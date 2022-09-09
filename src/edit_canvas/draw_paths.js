import { ComponentInstance } from '../project_data/component_instance.js';
import { sXcX, sYcY } from './edit-canvas.js';
import { round } from '../common/functions.js';


// --------------------------------------------------------------
// SHARED between Glyph, ComponentInstance, and Path
// --------------------------------------------------------------
export function isOverControlPoint(item, x, y, noHandles) {
	if(item.objType === 'Glyph') return isOverGlyphControlPoint(item, x, y, noHandles);
	if(item.objType === 'Path') return isOverPathControlPoint(item, x, y, noHandles);
	if(item.objType === 'PathPoint') return isOverPathPointControlPoint(item, x, y, noHandles);
	return false;
}


// --------------------------------------------------------------
// Glyph
// --------------------------------------------------------------

/**
 * Draw a Glyph to a canvas
 * @param {Glyph} glyph - what glyph to draw
 * @param {object} ctx - canvas context
 * @param {object} view - x/y/z view object
 * @param {number} alpha - transparency between 0 and 1
 * @param {boolean} addLSB - optionally move everything to account for LSB
 * @param {string} fill - glyph fill color
 * @returns {number} - Advance Width, according to view.z
 */
export function drawGlyph(
	glyph,
	ctx,
	view = { x: 0, y: 0, z: 1 },
	alpha = 1,
	addLSB = false,
	fill = '#000'
) {
	// log('drawGlyph', 'start');
	// log(glyph.name);
	// log('view ' + json(view, true));
	const sl = glyph.paths;
	let path;
	let drewPath;

	if (addLSB && glyph.isAutoWide) view.dx += glyph.lsb * view.dz;

	ctx.beginPath();
	for (let j = 0; j < sl.length; j++) {
		path = sl[j];
		// log(`${glyph.name} drawing ${path.objType} ${j} ${path.name}`);
		drewPath = drawPath(path, ctx, view);
		if (!drewPath) {
			console.warn('Could not draw path ' + path.name + ' in Glyph ' + glyph.name);
			if (
				path.objType === 'ComponentInstance' &&
				!getCurrentProject().getGlyph(path.link)
			) {
				console.warn('>>> Component Instance has bad link: ' + path.link);
				const i = glyph.paths.indexOf(path);
				if (i > -1) {
					glyph.paths.splice(i, 1);
					console.warn('>>> Deleted the Instance');
				}
			}
		}
	}

	ctx.closePath();
	ctx.fillStyle = fill;
	ctx.globalAlpha = alpha;
	ctx.fill('nonzero');
	ctx.globalAlpha = 1;
	// log(glyph.name);
	// log('drawGlyph', 'end');

	return glyph.advanceWidth * view.dz;
}

/**
 * Checks to see if the cursor is over a control point, for cursor hover effect
 * @param {Glyph} glyph - what glyph to draw
 * @param {number} x - x to check
 * @param {number} y - y to check
 * @param {boolean} noHandles - only check for Path Points, not Handles
 * @returns {boolean}
 */
function isOverGlyphControlPoint(glyph, x, y, noHandles) {
	let re = false;
	for (let s = 0; s < glyph.paths.length; s++) {
		if (glyph.paths[s].objType !== 'ComponentInstance') {
			re = isOverPathControlPoint(glyph.paths[s].path,
				x, y, noHandles);
			if (re) return re;
		}
	}
	return false;
}


// --------------------------------------------------------------
// SHARED path and component instance
// --------------------------------------------------------------
/**
 *
 * @param {Path or ComponentInstance} path - what thing to draw
 * @param {object} ctx - canvas context
 * @param {object} view - view
 */
export function drawPath(path, ctx, view) {
	if(path.objType === 'ComponentInstance') {
		return drawComponentInstanceToCanvas(path, ctx, view);
	} else {
		return drawPathToCanvas(path, ctx, view);
	}
}


// --------------------------------------------------------------
// Component Instance
// --------------------------------------------------------------

/**
 * Draw this Path to a canvas
 * @param {ComponentInstance} componentInstance - what to draw
 * @param {object} ctx - canvas context
 * @param {view} view
 * @returns {boolean}
 */
function drawComponentInstanceToCanvas(componentInstance, ctx, view) {
	// log('drawComponentInstanceToCanvas', 'start');
	// log('view ' + json(view, true));

	// Have to iterate through paths instead of using drawGlyph
	// due to stacking paths with appropriate winding

	const g = componentInstance.transformedGlyph;
	if (!g) return false;
	let drewPath = false;
	let failed = false;
	for (let s = 0; s < g.paths.length; s++) {
		drewPath = drawPath(g.paths[s], ctx, view);
		failed = failed || !drewPath;
	}
	// log('drawComponentInstanceToCanvas', 'end');
	return !failed;
}


// --------------------------------------------------------------
// Path
// --------------------------------------------------------------

/**
 * Draw a path to a canvas
 * @param {Path} path - what path to draw
 * @param {object} ctx - HTML Canvas Context
 * @param {object} view - View object with x / y offset and Zoom
 * @param {boolean} snap - snap values to whole numbers
 */
function drawPathToCanvas(path, ctx, view, snap = true) {
	// log('drawPath', 'start');
	// log(`view ${view.dx}, ${view.dy}, ${view.dz}`);

	// let currView = getView('drawPath');
	// view = view || clone(currView);
	// setView(view);

	if (path.pathPoints === false || path.pathPoints.length < 2) return;

	let pp;
	let np;
	const precision = snap ? 0 : 9;
	const p1x = sXcX(round(path.pathPoints[0].p.x, precision), view);
	const p1y = sYcY(round(path.pathPoints[0].p.y, precision), view);
	let p2x;
	let p2y;
	let p3x;
	let p3y;
	let p4x;
	let p4y;

	ctx.moveTo(p1x, p1y);
	// log(`move to ${p1x}, ${p1y}`);

	for (let cp = 0; cp < path.pathPoints.length; cp++) {
		pp = path.pathPoints[cp];
		// np = path.pathPoints[(cp+1) % path.pathPoints.length];
		np = path.pathPoints[path.getNextPointNum(cp)];

		if (pp.type === 'symmetric') {
			pp.makeSymmetric('h1');
		} else if (pp.type === 'flat') {
			pp.makeFlat('h1');
		}

		p2x = sXcX(round(pp.h2.x, precision), view);
		p2y = sYcY(round(pp.h2.y, precision), view);
		p3x = sXcX(round(np.h1.x, precision), view);
		p3y = sYcY(round(np.h1.y, precision), view);
		p4x = sXcX(round(np.p.x, precision), view);
		p4y = sYcY(round(np.p.y, precision), view);

		// log(`curveTo ${p2x}, ${p2y}, ${p3x}, ${p3y}, ${p4x}, ${p4y}`);

		ctx.bezierCurveTo(p2x, p2y, p3x, p3y, p4x, p4y);
	}

	// setView(currView);
	// log('drawPath', 'end');
	return true;
}

function isOverPathControlPoint(path, x, y, noHandles){
	log(`isOverPathControlPoint`, 'start');
	log(path);
	let pp = path.pathPoints || [];
	let re = false;

	for(let k=pp.length-1; k>=0; k--){
		re = pp[k].isOverControlPoint(x, y, noHandles);
		log(`returning`);
		log(re);
		log(`isOverPathControlPoint`, 'end');
		if(re) return re;
	}

	log(`returning false`);
	log(`isOverPathControlPoint`, 'end');
	return false;
}

export function isOverFirstPoint(path, x, y) {
	// log('\n isOverFirstPoint - START');
	// log('\t Passed ' + x + '/' + y);
	let pp = path.pathPoints[0];
	let pointSize = 7;
	let hp = pointSize / getView('isOverFirstPoint').dz;
	// log('\t Checking ' + pp.P.x + '/' + pp.P.y + ' around ' + hp);

	if(!pp) return false;

	if( ((pp.P.x+hp) > x) && ((pp.P.x-hp) < x) && ((pp.P.y+hp) > y) && ((pp.P.y-hp) < y) ){
		// log(' isOverFirstPoint - END - return TRUE\n');
		return true;
	}

	// log(' isOverFirstPoint - END - return FALSE\n');
	return false;
}



// --------------------------------------------------------------
// Path Point
// --------------------------------------------------------------

/**
 * Checks to see if there is a control point where the mouse is
 * @param {number} x - mouse x position
 * @param {number} y - mouse y position
 * @param {boolean} noHandles - Eliminates checking for handles in multi-select situations
 * @returns {object} - 'type' = h1/h2/p, 'point' = reference to this PathPoint
 */
	function isOverPathPointControlPoint(x = 0, y = 0, noHandles = false) {
		let targetSize = 3;
		const test = { x: x, y: y };
		if (pointsAreEqual(this.p, test, targetSize)) {
			// log('PathPoint.isOverControlPoint - Returning P1');
			return { point: this, type: 'p' };
		}

		if (this.h1.use && !noHandles) {
			if (pointsAreEqual(this.h1, test, targetSize)) {
				// log('PathPoint.isOverControlPoint - Returning h1');
				return { point: this, type: 'h1' };
			}
		}

		if (this.h2.use && !noHandles) {
			if (pointsAreEqual(this.h2, test, targetSize)) {
				// log('PathPoint.isOverControlPoint - Returning h2');
				return { point: this, type: 'h2' };
			}
		}

		return false;
	}