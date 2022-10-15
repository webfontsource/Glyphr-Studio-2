import { ProjectEditor } from '../project_editor/project_editor.js';
import { GlyphrStudioApp } from './app.js';

/* Web Components */
import { AnchorTwelvepoint } from '../controls/anchor-twelvepoint/anchor-twelvepoint.js';
import { ButtonToggle } from '../controls/button-toggle/button-toggle.js';
import { CanvasDisplay } from '../controls/canvas-display/canvas-display.js';
import { EditCanvas } from '../edit_canvas/edit_canvas.js';
import { FancyButton } from '../controls/fancy-button/fancy-button.js';
import { GlyphTile } from '../controls/glyph-tile/glyph-tile.js';
import { InfoBubble } from '../controls/info-bubble/info-bubble.js';
import { InputNumber } from '../controls/input-number/input-number.js';
import { InputNumberLockable } from '../controls/input-number-lockable/input-number-lockable.js';
import { getVersionTwoTestProject } from '../samples/versionTwoTestProject.js';
import { linkCSS } from '../controls/controls.js';
import { makeElement } from '../common/dom.js';

// The main app object
export const GSApp = new GlyphrStudioApp();

/**
 * First function to run when the browser starts
 */
export function glyphrStudioOnLoad() {
	if (GSApp.version) {
		console.info(
			`%cApp Version ${GSApp.version}%c\n`,
			'color:hsl(199, 100%, 64%); background-color:hsla(200, 100%, 49%, 10%); padding: 4px 8px; border-radius: 12px;',
			'background-color: transparent;'
		);
	}
	log(`glyphrStudioOnLoad`, 'start');

	if (passPreChecks()) {
		registerCustomComponents();

		// Load project
		let sample = getVersionTwoTestProject();
		GSApp.setUp(JSON.stringify(sample));
		log(GSApp);
	} else {
		log('did NOT pass pre-checks');
	}
	log(`glyphrStudioOnLoad`, 'end');
}

/**
 * Does some checking against new-ish HTML/JavaScript features
 * @returns {boolean}
 */
function passPreChecks() {
	let pass = true;
	// Templates
	const template = document.createElement('template');
	if (!template.content) {
		console.error('Browser does not support HTML Templates');
		pass = false;
	}
	return pass;
}

/**
 * Registers all the custom Web Components to the current document
 * Also adds the CSS file for each component to avoid FOUC.
 */
function registerCustomComponents() {
	const data = [
		{ fileName: 'anchor-twelvepoint', className: AnchorTwelvepoint },
		{ fileName: 'button-toggle', className: ButtonToggle },
		{ fileName: 'canvas-display', className: CanvasDisplay },
		{ fileName: 'fancy-button', className: FancyButton },
		{ fileName: 'glyph-tile', className: GlyphTile },
		{ fileName: 'info-bubble', className: InfoBubble },
		{ fileName: 'input-number', className: InputNumber },
		{ fileName: 'input-number-lockable', className: InputNumberLockable },
	];

	data.forEach((control) => {
		customElements.define(control.fileName, control.className);
		document.head.appendChild(linkCSS(control.fileName));
	});

	// Special case EditCanvas
	customElements.define('edit-canvas', EditCanvas);
	document.head.appendChild(
		makeElement({
			tag: 'link',
			attributes: {
				href: `./edit_canvas/edit-canvas.css`,
				rel: 'stylesheet',
				type: 'text/css',
			},
		})
	);
}

/**
 * Returns the overall App object
 * @returns {GlyphrStudioApp}
 */
export function getGlyphrStudioApp() {
	return GSApp;
}

/**
 * Returns the project that is currently being edited
 * @returns {GlyphrStudioProject}
 */
export function getCurrentProject() {
	return getGlyphrStudioApp().getCurrentProjectEditor().project;
}

/**
 * Returns the current Project Editor
 * @returns {ProjectEditor}
 */
export function getCurrentProjectEditor() {
	const gs = getGlyphrStudioApp();
	if (!gs.projectEditors[gs.selectedProjectEditor]) {
		gs.projectEditors[gs.selectedProjectEditor] = new ProjectEditor();
	}
	return gs.projectEditors[gs.selectedProjectEditor];
}

/**
 * Wrapper for console.log that does some extra fancy stuff, and
 * also adheres to a global switch in settings
 * @param {string} message - message to show in the console
 * @param {boolean} type - 'start' or 'end'
 */

let logColors = {};
let logCount = 0;
export function log(message, type) {
	let dev = GSApp.settings.dev;
	// if (!dev.mode) return;

	if (dev.mode) {
		if (typeof message === 'string') {
			message = message.replace(/&lt;/gi, '<');
			message = message.replace(/&gt;/gi, '>');

			if (type === 'start') {
				if (!logColors[message])
					logColors[message] = `hsl(${Math.floor(Math.random() * 210 + 150)}, 90%, 20%)`;
			}

			const common = `
				font-weight:bold;
				position: relative;
				left: -20px;
				color: white;
				background-color: ${logColors[message]};
				padding: 6px 0px 6px 0px;
				margin: 0px;
			`;

			const startCommon = `padding-bottom: 4px; margin-top: 10px; margin-bottom: -2px;`;
			const endCommon = ` margin-bottom: 20px; margin-top: -3px`;

			const startLeft = `
				${common}
				color: #FFFFFF66;
				padding-left: 12px;
				border-radius: 12px 0px 0px 2px;
				${startCommon}
			`;
			const startMid = `
				${common}
				padding-left: 0px;
				color: #FFFFFF99;
				${startCommon}
			`;
			const startRight = `
				${common}
				padding-right: 12px;
				border-radius: 0px 12px 2px 0px;
				${startCommon}
			`;

			const endLeft = `
				${common}
				color: #FFFFFF66;
				padding-left: 12px;
				border-radius: 2px 0px 0px 12px;
				${endCommon}
			`;
			const endMid = `
				${common}
				padding-left: 0px;
				color: #FFFFFF99;
				${endCommon}
			`;
			const endRight = `
				${common}
				padding-right: 12px;
				border-radius: 0px 2px 12px 0px;
				${endCommon}
			`;

			const indent = `
				color: rgba(127, 127, 127, 0.5);
				font-size: 1.2em;
			`;
			let ch = '･ ';

			if (type === 'start' || type === 'end') {
				let message1 = '';
				let message2 = message;
				if (message.split('.').length > 1) {
					message1 = message.split('.')[0] + '.';
					message2 = message.split('.')[1];
				}

				if (type === 'start') {
					console.log(
						`%c${ch.repeat(logCount)}%cSTART %c${message1}%c${message2}`,
						indent,
						startLeft,
						startMid,
						startRight
					);
					logCount++;
				} else if (type === 'end') {
					logCount--;
					logCount = Math.max(logCount, 0);
					console.log(
						`%c${ch.repeat(logCount)}%cEND   %c${message1}%c${message2}`,
						indent,
						endLeft,
						endMid,
						endRight
					);
					delete logColors[message];
				}
			} else {
				console.log(
					`%c${ch.repeat(logCount)}%c${message}`,
					indent,
					'color: default; border-radius: 4px;'
				);
			}
		} else if (typeof message === 'object') {
			// console.table(message);
			console.log(message);
		} else {
			console.log(message);
		}
	}
}
