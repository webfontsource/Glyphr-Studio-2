import { getCurrentProjectEditor, log } from '../app/main';
import { makeElement } from '../common/dom';
import { makeToolButtonSVG } from '../edit_canvas/tools/tools';
import style from './pop-out-window.css?inline';
import color from '../common/colors.css?inline';
import reset from '../common/resets.css?inline';
import dialogStyle from '../controls/dialogs/dialogs.css?inline';
import { DisplayCanvas } from '../display_canvas/display_canvas';
import logo from '../common/graphics/logo-icon.svg?raw';
import { makeModalDialog, showModalDialog } from '../controls/dialogs/dialogs';

export function openPopOutWindow() {
	// log(`openPopOutWindow`, 'start');
	const editor = getCurrentProjectEditor();
	editor.popOutWindow = window.open('', 'glyphr-studio-pop-out-live-preview');

	// Init window properties
	let popDoc = editor.popOutWindow.document;
	popDoc.head.appendChild(makeElement({ tag: 'title', content: 'Live Preview - Glyphr Studio' }));

	const resets = makeElement({ tag: 'style', innerHTML: reset });
	popDoc.head.appendChild(resets);
	const colors = makeElement({ tag: 'style', innerHTML: color });
	popDoc.head.appendChild(colors);
	const styles = makeElement({ tag: 'style', innerHTML: style });
	popDoc.head.appendChild(styles);
	const dialogs = makeElement({ tag: 'style', innerHTML: dialogStyle });
	popDoc.head.appendChild(dialogs);

	popDoc.body.appendChild(
		makeElement({
			tag: 'div',
			id: 'pop-out__wrapper',
		})
	);

	editor.popOutWindow.addEventListener('beforeunload', closePopOutWindow);
	window.addEventListener('beforeunload', closePopOutWindow);
	editor.popOutWindow.addEventListener('resize', livePreviewPopOutWindowResize);

	editor.subscribe({
		topic: '*',
		subscriberID: 'livePreviewPopOutWindow',
		callback: redrawPopOutWindow,
	});

	let favIcon = makeElement({
		tag: 'link',
		attributes: { rel: 'shortcut icon', href: `data:image/svg+xml,${encodeURI(logo)}` },
	});

	popDoc.head.appendChild(favIcon);

	const popWrapper = popDoc.querySelector('#pop-out__wrapper');
	// log(popWrapper);
	// log(popWrapper.getClientRects()[0]);

	editor.livePreviews.forEach((options, index) => {
		// index 0 is for the Live Previews Page
		// the rest are for the Pop Out Window
		if (index !== 0) {
			// log(`appending new display canvas`);
			// log(options);
			options.widthAdjustment = -20;
			popWrapper.appendChild(new DisplayCanvas(options));
		}
	});

	// Preview controls
	const footer = makeElement({ tag: 'div', className: 'pop-out__footer' });
	const editPreviewsButton = makeElement({
		tag: 'fancy-button',
		content: 'Edit live previews',
		attributes: { minimal: '' },
	});
	editPreviewsButton.addEventListener('click', showEditLivePreviewDialog);

	footer.appendChild(editPreviewsButton);
	popWrapper.appendChild(footer);

	// Update buttons
	const popButton = document.getElementById('editor-page__tool__open-live-preview-pop-out');
	if (popButton) {
		popButton.innerHTML = makeToolButtonSVG({
			name: 'closeLivePreview',
			selected: false,
		});
	}
	// log(popDoc);
	// editor.popOutWindow.setTimeout(refreshPopOutWindow, 10);
	// log(`openPopOutWindow`, 'end');
}

export function closePopOutWindow(event) {
	// log(`closePopOutWindow`, 'start');

	if (event) event.preventDefault();
	const editor = getCurrentProjectEditor();

	try {
		editor.popOutWindow.close();
	} catch (e) {
		console.warn('Could not close pop-out window');
	}

	editor.popOutWindow = false;
	editor.unsubscribe({ idToRemove: 'livePreviewPopOutWindow' });
	window.removeEventListener('beforeunload', closePopOutWindow);

	// Update buttons
	const popButton = document.getElementById('editor-page__tool__open-live-preview-pop-out');
	if (popButton) {
		popButton.innerHTML = makeToolButtonSVG({
			name: 'openLivePreview',
			selected: false,
		});
	}

	// log(`closePopOutWindow`, 'end');
	return undefined;
}

function redrawPopOutWindow() {
	const editor = getCurrentProjectEditor();
	const canvases = editor.popOutWindow.document.body.querySelectorAll('display-canvas');
	canvases.forEach((can) => can.redraw());
}

export function makeLivePreviewPopOutCard(showBlurb = false) {
	const card = makeElement({
		tag: 'div',
		className: 'panel__card full-width',
		innerHTML: '<h3>Pop out live preview</h3>',
	});
	if (showBlurb) {
		card.innerHTML += `
			A full-screen live preview can be launched in a new window,
			useful for sentence or paragraph scale previews of your typeface.`;
	}
	const button = makeElement({
		tag: 'fancy-button',
		attributes: { secondary: '' },
		content: 'Launch live preview in a new window',
	});
	// button.innerHTML += makeToolButtonSVG({ name: 'openLivePreview' });
	button.addEventListener('click', openPopOutWindow);
	card.appendChild(button);

	return card;
}

export function livePreviewPopOutWindowResize() {
	// log(`livePreviewPopOutWindowResize`, 'start');
	const editor = getCurrentProjectEditor();
	let popDoc = editor.popOutWindow.document;
	const allDisplayCanvases = popDoc.querySelectorAll('display-canvas');
	// log(allDisplayCanvases);
	allDisplayCanvases.forEach((displayCanvas) => {
		// log(`displayCanvas.options.name: ${displayCanvas.getAttribute('title')}`);
		displayCanvas.resizeAndRedraw(-50);
	});
	// log(`livePreviewPopOutWindowResize`, 'end');
}

function showEditLivePreviewDialog() {
	const popDoc = getCurrentProjectEditor().popOutWindow.document;
	let diag = makeModalDialog(makeElement({ tag: 'h1', content: 'YO' }), false, popDoc);
	diag.style.display = 'block';
	popDoc.body.appendChild(diag);
}
