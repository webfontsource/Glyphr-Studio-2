import { ComponentInstance } from '../project_data/component_instance.js';
import { sXcX, sYcY } from '../edit_canvas/edit_canvas.js';
import { json, round } from '../common/functions.js';
import { getCurrentProject } from '../app/main.js';

// --------------------------------------------------------------
// Glyph
// --------------------------------------------------------------

/**
 * Draw a Glyph to a canvas
 * @param {Glyph} glyph - what glyph to draw
 * @param {object} ctx - canvas context
 * @param {object} view - x/y/z view object
 * @param {number} alpha - transparency between 0 and 1
 * @param {string} fill - glyph fill color
 * @returns {number} - Advance Width, according to view.z
 */
export function drawGlyph(glyph, ctx, view = { x: 0, y: 0, z: 1 }, alpha = 1, fill = '#000') {
	// log('drawGlyph', 'start');
	// log(glyph.name);
	// log('view ' + json(view, true));
	// log(ctx);
	if (!glyph.paths) {
		console.warn(`Glyph ${glyph.name} has no paths to draw`);
		return false;
	}

	let path;
	let drewPath;

	ctx.beginPath();
	for (let j = 0; j < glyph.paths.length; j++) {
		path = glyph.paths[j];
		// log(`${glyph.name} drawing ${path.objType} #${j} "${path.name}"`);
		drewPath = drawPath(path, ctx, view);
		if (!drewPath) {
			console.warn('Could not draw path ' + path.name + ' in Glyph ' + glyph.name);
			if (path.objType === 'ComponentInstance' && !getCurrentProject().getGlyph(path.link)) {
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
	if (path.objType === 'ComponentInstance') {
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

	ctx.beginPath();
	for (let s = 0; s < g.paths.length; s++) {
		drewPath = drawPath(g.paths[s], ctx, view);
		failed = failed || !drewPath;
	}
	ctx.closePath();

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
	// log('drawPathToCanvas', 'start');
	// log(ctx);

	// log(`view ${view.dx}, ${view.dy}, ${view.dz}`);
	// log(path);

	// let currView = ProjectEditor.('drawPathToCanvas');
	// view = view || clone(currView);
	// setView(view);

	if (!path?.pathPoints || path.pathPoints === false) {
		// log(`RETURNING FALSE: path.pathPoints does not exist`);
		// log('drawPathToCanvas', 'end');
		return false;
	}

	if (path.pathPoints.length < 2) {
		// log(`RETURNING FALSE: ${path.pathPoints.length} points in the path`);
		// log('drawPathToCanvas', 'end');
		return false;
	}

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

	// log('end of top section');

	ctx.moveTo(p1x, p1y);
	// log(`move to ${p1x}, ${p1y}`);

	for (let cp = 0; cp < path.pathPoints.length; cp++) {
		pp = path.pathPoints[cp];
		// np = path.pathPoints[(cp+1) % path.pathPoints.length];
		np = path.pathPoints[path.getNextPointNum(cp)];

		if (!pp.h2.use && !np.h1.use) {
			// straight line
			p4x = sXcX(round(np.p.x, precision), view);
			p4y = sYcY(round(np.p.y, precision), view);

			// log(`lineTo ${p4x}, ${p4y}`);
			ctx.lineTo(p4x, p4y);
		} else {
			// curved line
			p2x = sXcX(round(pp.h2.x, precision), view);
			p2y = sYcY(round(pp.h2.y, precision), view);
			p3x = sXcX(round(np.h1.x, precision), view);
			p3y = sYcY(round(np.h1.y, precision), view);
			p4x = sXcX(round(np.p.x, precision), view);
			p4y = sYcY(round(np.p.y, precision), view);

			// log(`curveTo ${p2x}, ${p2y}, ${p3x}, ${p3y}, ${p4x}, ${p4y}`);
			ctx.bezierCurveTo(p2x, p2y, p3x, p3y, p4x, p4y);
		}
	}

	// setView(currView);
	// log('drawPathToCanvas', 'end');
	return true;
}
