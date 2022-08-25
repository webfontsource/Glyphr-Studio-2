import { makeElement } from '../../common/dom.js';
import { log } from '../../common/functions.js';
import { getCurrentProject, getCurrentProjectEditor } from '../../app/main.js';
import { accentColors } from '../../common/colors.js';
import { glyphToHex } from '../../common/unicode.js';
import { eventHandlerData, initEventHandlers } from './events_mouse.js';

/**
 * CanvasEdit takes a string of glyphs and displays them on the canvas
 * And has a bunch of controls and interactions that allow for editing
 */
export default class CanvasEdit extends HTMLElement {
	/**
	 * Specify which attributes are observed and trigger attributeChangedCallback
	 */
	 static get observedAttributes() {
		return ['glyphs'];
	}

	/**
	 * Create an CanvasEdit
	 * @param {object} attributes - collection of key: value pairs to set as attributes
	 */
	constructor(attributes = {}) {
		log(`CanvasEdit.constructor`, 'start');

		super();

		Object.keys(attributes).forEach((key) =>
			this.setAttribute(key, attributes[key])
		);

		// element attributes
		this.glyphs = this.getAttribute('glyphs') || '';
		this.width = this.getAttribute('width') || 2000;
		this.height = this.getAttribute('height') || 2000;

		// internal properties
		this.canvas = makeElement({ tag: 'canvas' });
		this.ctx = this.canvas.getContext('2d');

		// Put it all together
		let shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(this.canvas);

		this.canvas.height = this.height;
		this.canvas.width = this.width;

		let editor = getCurrentProjectEditor();
		initEventHandlers(this.canvas);
		editor.editCanvas = this;
		editor.subscribe({topic: 'view', name: 'Edit canvas', callback: () => this.redraw()});

		this.redraw();
		log(`CanvasEdit.constructor`, 'end');
	}

	/**
	 * Listens for attribute changes on this element
	 * @param {string} attributeName - which attribute was changed
	 * @param {string} oldValue - value before the change
	 * @param {string} newValue - value after the change
	 */
	attributeChangedCallback(attributeName, oldValue, newValue) {
		log(`CanvasEdit.attributeChangeCallback`, 'start');
		log(`Attribute ${attributeName} was ${oldValue}, is now ${newValue}`);

		switch (attributeName) {
			case 'glyphs':
				this.glyphs = newValue;
				this.redraw();
				break;
		}

		if (attributeName === 'glyphs') {
			this.redraw();
		}
		log(`CanvasEdit.attributeChangeCallback`, 'end');
	}



	// --------------------------------------------------------------
	// Redraw the canvas
	// --------------------------------------------------------------
	redraw() {
		log('CanvasEdit.redraw', 'start');
		let editor = getCurrentProjectEditor();
		let ctx = this.ctx;
		let view = editor.view;
		ctx.clearRect(0, 0, this.width, this.height);

		// Current Glyph
		let glyphHex = glyphToHex(this.glyphs.charAt(0));
		let sg = editor.project.getGlyph(glyphHex);
		log(sg);

		// Grid
		ctx.fillStyle = accentColors.gray.l90;
		ctx.fillRect(view.dx, 0, 1, 1000);
		ctx.fillRect(view.dx + (sg.width * view.dz), 0, 1, 1000);
		ctx.fillRect(0, view.dy, 1000, 1);

		// Draw glyphs
		sg.drawGlyph(ctx, view);

		// Draw selected shape / path
		ctx.beginPath();
		editor.multiSelect.shapes.drawShape(ctx, view);
		ctx.closePath();
		ctx.strokeStyle = accentColors.blue.l60;
		ctx.lineWidth = 1.5;
		ctx.stroke();

		// Draw temporary new shapes
		if(eventHandlerData.tempNewBasicShape) {
			editor.multiSelect.shapes.drawShape(ctx, view);
		}

		log('CanvasEdit.redraw', 'end');
	}
}

/* cSpell:disable */
/*

// --------------------------------------------------------------
// Redraw
// --------------------------------------------------------------
	function redraw_GlyphEdit() {
		// log('redraw_GlyphEdit', 'start');
		_UI.redrawing = true;

		let sg = getSelectedWorkItem();
		let editmode = getEditMode();

		// if (sg) sg.calcMaxes();
		// log('Selected WI ' + sg.name);

		// draw grids
		drawGrid();
		drawGuides();

		// load glyph info
		if (sg && sg.shapes.length) {
			let v = getView('Redraw');
			if (sg.contextGlyphs) drawContextGlyphs();
			sg.drawGlyph(_UI.glyphEditCTX, v);
		} else {
			_UI.redrawing = false;
			return;
		}

		_UI.multiSelect.shapes.drawPathOutline();

		if (editmode === 'arrow') {
			_UI.multiSelect.shapes.drawBoundingBox();
			_UI.multiSelect.shapes.drawBoundingBoxHandles();
		} else if (editmode === 'rotate') {
			_UI.multiSelect.shapes.draw_RotationAffordance();
		} else if (editmode === 'pen') {
			if (_UI.eventhandlers.multi) sg.drawMultiSelectAffordances(_UI.colors.blue);
			_UI.multiSelect.points.draw_PathPointHandles();
			_UI.multiSelect.shapes.draw_PathPoints();
			// _UI.multiSelect.points.draw_PathPoints();

			if (_UI.eventhandlers.hoverpoint) {
				let hp = _UI.eventhandlers.hoverpoint;
				_UI.glyphEditCTX.fillStyle = hp.fill;
				_UI.glyphEditCTX.fillRect(hp.x, hp.y, hp.size, hp.size);
			}
		} else if (editmode === 'newPath') {
			_UI.multiSelect.points.draw_PathPointHandles();
			_UI.multiSelect.shapes.draw_PathPoints();
			// _UI.multiSelect.points.draw_PathPoints();
		}

		_UI.redrawing = false;
		// log('redraw_GlyphEdit', 'end');
	}
*/

// --------------------------------------------------------------------------
// Convert between Saved values and Canvas values
// --------------------------------------------------------------------------
// convert stored x-y point to canvas x-y
export function sXcX(sx, view = getCurrentProjectEditor().view) {
	let canvasx = view.dx;
	canvasx += sx * view.dz;
	return canvasx || view.dx;
}

export function sYcY(sy, view = getCurrentProjectEditor().view) {
	let canvasy = view.dy;
	canvasy -= sy * view.dz;
	return canvasy || view.dy;
}

// convert canvas x-y inputs to saved shape x-y
export function cXsX(cx, view = getCurrentProjectEditor().view) {
	return (cx - view.dx) / view.dz;
}

export function cYsY(cy, view = getCurrentProjectEditor().view) {
	return (view.dy - cy) / view.dz;
}
