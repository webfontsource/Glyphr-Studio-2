import { getCurrentProjectEditor } from '../app/main.js';
import { drawPath } from '../edit_canvas/draw_paths.js';
import { Glyph } from '../project_data/glyph.js';
import { Path } from '../project_data/path.js';

/**
		Multi-Select
		An object that contains pieces of other things (Path Points
		or Paths) and then can use virtual containers (Paths and Glyphs)
		to treat the collections as if they were regular (Paths or Glyphs).

		So:
		 - A random collection of Path Points can be treated like a single Path
		 - A random collection of Paths can be treated like a Glyph
**/

// --------------------------------------------------------------
// COMMON MULTI-SELECT
// --------------------------------------------------------------
class MultiSelect {
	constructor() {
		this.members = [];
		this.handleSingleton = false;
	}

	isSelectable(obj) {
		log(`MultiSelect.isSelectable`, 'start');
		log(obj);
		log(`obj.objType: ${obj.objType}`);

		let selectable = [
			'Path Point', 'Path', 'Component Instance'
		];

		log(`MultiSelect.isSelectable`, 'end');
		return selectable.includes(obj?.objType);
	}

	select(obj) {
		log('MultiSelect.select', 'start');
		if (this.isSelectable(obj)) {
			log('selecting object');
			this.members = [obj];
			this.publishChanges();
		} else {
			log('this.isSelectable = false, clearing');
			this.clear();
		}

		log('MultiSelect.select', 'end');
	}

	clear() {
		this.members = [];
		if (this.glyph) this.glyph.ratioLock = false;
		this.handleSingleton = false;
		this.publishChanges();
	}

	add(obj) {
		log(`MultiSelect.add`, 'start');
		if (this.isSelectable(obj) && this.members.indexOf(obj) < 0) {
			this.members.push(obj);
		}
		this.publishChanges();
		log(`MultiSelect.add`, 'end');
	}

	remove(obj) {
		this.members = this.members.filter(function (m) {
			return m !== obj;
		});
		this.publishChanges();
	}

	removeMissing() {
		this.members = this.members.filter(function (m) {
			return typeof m === 'object';
		});
		this.publishChanges();
	}

	count() {
		return this.members.length;
	}

	toggle(obj) {
		if (this.isSelected(obj)) this.remove(obj);
		else this.add(obj);

		this.publishChanges();
	}

	get type() {
		if (this.members.length === 0)
			return false;
		else if (this.members.length === 1)
			return this.members[0].objType;
		else
			return 'multi';
	}

	get length() {
		return this.members.length;
	}

	set members(arr) {
		this._members = arr;
	}

	get members() {
		return this._members;
	}

	get singleton() {
		if (this.members.length === 1)
			return this.members[0];
		else
			return false;
	}

	isSelected(obj) {
		return this.members.indexOf(obj) > -1;
	}
}




// --------------------------------------------------------------
// SELECTED POINTS
// --------------------------------------------------------------

export class MultiSelectPoints extends MultiSelect {
	constructor() {
		super();
		this._path = new Path();
	}

	get path() {
		this._path.path = new Path({ pathPoints: this.members });
		// this.path.recalculateMaxes();
		return this._path;
	}

	publishChanges() {
		let editor = getCurrentProjectEditor();
		editor.publish('currentPathPoint', this.members);
		this.selectPathsThatHaveSelectedPoints();
	}

	updatePathPosition(dx, dy) {
		this.path.updatePathPosition(dx, dy);
	}

	deletePathPoints() {
		let point;
		let path;
		let pindex;

		for (let m = 0; m < this.members.length; m++) {
			point = this.members[m];
			path = point.parent;
			pindex = point.pointNumber;

			if (pindex > -1) {
				path.pathPoints.splice(pindex, 1);
				// path.recalculateMaxes();
				path.changed();
			}
		}

		let editor = getCurrentProjectEditor();
		const wi = editor.selectedWorkItem;

		this.clear();
	}

	getSingletonPointNumber() {
		if (!this.members[0]) return false;
		else return this.members[0].pointNumber;
	}

	draw_PathPointHandles() {
		const sh = this.path;
		draw_PathPointHandles(sh.path.pathPoints);
	}

	draw_PathPoints() {
		// log('MS.points.draw_PathPoints', 'start');
		const sh = this.path;
		// ('\t path is ' + json(sh));

		draw_PathPoints(sh.path.pathPoints);

		// log('MS.points.draw_PathPoints', 'end');
	}

	setPointType(t) {
		for (let m = 0; m < this.members.length; m++) {
			this.members[m].setPointType(t);
		}
	}

	insertPathPoint() {
		let path;
		let pp;
		const newpoints = [];

		for (let m = 0; m < this.members.length; m++) {
			path = this.members[m].parent;
			pp = this.members[m].pointNumber;
			newpoints.push(path.insertPathPoint(false, pp));
		}

		this.clear();

		for (let n = 0; n < newpoints.length; n++) this.add(newpoints[n]);
	}

	resetHandles() {
		for (let m = 0; m < this.members.length; m++) {
			// log(this.members[m]);
			this.members[m].resetHandles();
		}
	}

	resolvePointType() {
		for (let m = 0; m < this.members.length; m++) {
			// log(this.members[m]);
			this.members[m].resolvePointType();
		}
	}

	updatePathPointPosition(controlPoint, dx, dy) {
		if (controlPoint === 'p') {
			for (let m = 0; m < this.members.length; m++) {
				this.members[m].updatePathPointPosition(controlPoint, dx, dy);
			}
		} else if (this.handleSingleton) {
			this.handleSingleton.updatePathPointPosition(controlPoint, dx, dy);
		}
	}

	selectPathsThatHaveSelectedPoints() {
		// log('MS.points.selectPathsThatHaveSelectedPoints', 'start');
		// this.clear();
		const points = this.members;
		const paths = getCurrentProjectEditor().selectedWorkItem.paths;
		let path;
		let count = 0;

		if (points.length === 0) return;

		// log('selected points ' + points);
		// log('WI paths ' + paths);

		for (let p = 0; p < points.length; p++) {
			path = points[p].parent;

			for (let s = 0; s < paths.length; s++) {
				if (paths[s].objType !== 'ComponentInstance') {
					if (path === paths[s].path) {
						paths.add(paths[s]);
						count++;
					}
				}
			}
		}

		// log('MS.points.selectPathsThatHaveSelectedPoints - Selected ' + count + '', 'end');
	}
}


// --------------------------------------------------------------
// SELECTED PATHS
// --------------------------------------------------------------

export class MultiSelectPaths extends MultiSelect {
	constructor() {
		super();
		this.glyph = new Glyph();
	}

	set glyph(newGlyph) {
		this._glyph = newGlyph;
	}

	get glyph() {
		this._glyph.paths = this.members;

		// Pretty sure calling changed on a virtual
		// glyph makes no sense
		// this._glyph.changed();

		return this._glyph;
	}

	contains(objTypeName) {
		if (this.members.length === 0) return false;
		let re = false;
		for (let m = 0; m < this.members.length; m++) {
			re = this.members[m].objType === objTypeName;
			if (re) return true;
		}

		return false;
	}

	publishChanges() {
		let editor = getCurrentProjectEditor();
		editor.publish('currentPath', this.members);
	}

	selectPathsThatHaveSelectedPoints() {}

	combine() {
		// log('multiSelect.paths.combine', 'start');

		const ns = new Glyph(clone(this.glyph));

		ns.flattenGlyph();

		const cs = combinePaths(ns.paths);

		// If everything worked, delete original paths and add new ones
		if (cs) {
			this.deletePaths();

			for (let n = 0; n < cs.length; n++) action_addPath(cs[n]);

			historyPut('Combined paths');
		}

		// log('multiSelect.paths.combine', 'end');
	}

	deletePaths() {
		// log('deletePath', 'start');
		let editor = getCurrentProjectEditor();
		const wipaths = editor.selectedWorkItem.paths;
		const sels = this.members;
		let curs;
		let i;

		if (sels.length === 0) clear();
		else {
			for (let s = 0; s < sels.length; s++) {
				curs = sels[s];

				if (curs.objType === 'ComponentInstance') {
					removeFromUsedIn(curs.link, editor.selectedGlyph);
				}

				i = wipaths.indexOf(curs);
				if (i > -1) wipaths.splice(i, 1);
			}

			this.select(wipaths[i] || wipaths[wipaths.length - 1]);
		}

		// TODO publish change
		// log('deletePath', 'end');
	}

	align(edge) {
		// showToast('align ' + edge);
		const g = this.glyph;
		const gnum = g.paths.length;
		g.alignPaths(edge);

		historyPut('Aligned ' + gnum + ' paths ' + edge);
	}

	// Wrapper functions

	changed() {
		for (let m = 0; m < this.members.length; m++) {
			this.members[m].changed();
		}
	}

	// convert to name setter
	changePathName(n) {
		this.singleton.changePathName(n);
	}

	updatePathPosition(dx, dy) {
		this.glyph.updateGlyphPosition(dx, dy);
	}

	setPathPosition(nx, ny) {
		this.glyph.setGlyphPosition(nx, ny);
	}

	updatePathSize(dw, dh, ratioLock) {
		if (this.members.length === 1)
			this.members[0].updatePathSize(dw, dh, ratioLock);
		else if (this.members.length > 1)
			this.glyph.updateGlyphSize(dw, dh, ratioLock);
	}

	setPathSize(nw, nh, ratioLock) {
		this.glyph.setGlyphSize(nw, nh, ratioLock);
	}

	rotate(angle, about) {
		this.glyph.rotate(angle, about);
	}

	isRotateable() {
		if (this.members.length === 1) return true;
		else return !this.contains('ComponentInstance');
	}

	flipNS(mid) {
		this.glyph.flipNS(mid);
	}

	flipEW(mid) {
		this.glyph.flipEW(mid);
	}

	getAttribute(attr) {
		if (this.members.length === 1) return this.members[0][attr];
		else if (this.members.length > 1) return this.glyph[attr] || false;
		else return false;
	}

	isOverControlPoint(
		x,
		y,
		targetSize,
		noHandles
	) {
		if (this.members.length === 0) return false;
		let re = false;
		for (let m = 0; m < this.members.length; m++) {
			re = this.members[m].isOverControlPoint(x, y, targetSize, noHandles);
			if (re) return re;
		}

		return false;
	}

	isOverBoundingBoxHandle(px, py) {
		// log('SelectedPaths.isOverBoundingBoxHandle', 'start');
		// log('passed x/y: ' + px + '/' + py);

		if (this.members.length === 0) {
			return false;
		} else if (this.members.length === 1) {
			// log('calling singleton method');
			return this.members[0].isOverBoundingBoxHandle(px, py);
		}

		const c = isOverBoundingBoxHandle(
			px,
			py,
			this.glyph.maxes,
			_UI.multiSelectThickness
		);
		// log('SelectedPaths.isOverBoundingBoxHandle returning ' + c);
		return c;
	}

	getCenter() {
		return this.glyph.maxes.center;
	}

	// recalculateMaxes = function() {
	//     for (let m=0; m<this.members.length; m++) {
	//         this.members[m].recalculateMaxes();
	//     }
	// }

	getMaxes() {
		if (this.members.length === 1) return this.members[0].maxes;
		else return this.glyph.maxes;
	}

	drawPaths(lctx, view) {
		let failed = false;
		let drewpath = false;
		for (let m = 0; m < this.members.length; m++) {
			drewpath = drawPath(this.members[m], lctx, view);
			failed = failed || !drewpath;
		}

		return !failed;
	}

	draw_PathPoints() {
		// log('MS.paths.draw_PathPoints', 'start');
		let s;
		for (let m = 0; m < this.members.length; m++) {
			s = this.members[m];
			// log('drawing points on path ' + m + ' as ' + s.path.pathPoints);
			if (s.objType !== 'ComponentInstance')
				draw_PathPoints(this.members[m].path.pathPoints);
		}

		// log('MS.paths.draw_PathPoints', 'end');
	}

	reverseWinding() {
		for (let m = 0; m < this.members.length; m++) {
			this.members[m].reverseWinding();
		}
	}
}