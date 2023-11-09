import { makeElement } from '../../common/dom';
import { showToast } from '../../controls/dialogs/dialogs';
import {
	clearAllSelections,
	destinationEditor,
	makeProjectFlipper,
	selectedItemIDs,
	sourceEditor,
	toggleCheckboxes,
	updateSelectedIDs,
} from './cross_project_actions';

export function updateContent_overwriteSettings(parent) {
	parent.innerHTML = '';
	parent.appendChild(
		makeElement({
			tag: 'p',
			content: `This action will take the values from the selected settings in the source project, and overwrite the same
			setting's value in the destination project.`,
		})
	);

	parent.appendChild(makeProjectFlipper('Overwrite settings from'));

	// Table
	const table = makeElement({
		className: 'cross-project-actions__column-layout',
		style: 'grid-template-columns: 20px max-content max-content max-content;',
	});
	parent.appendChild(updateOverwriteSettingsTable(table));
}

export function updateOverwriteSettingsTable(table) {
	table.innerHTML = '';
	// Table column headers
	let wrapper = makeElement({
		className: 'checkbox-wrapper',
		attributes: { style: 'padding: 4px;	border-bottom: 1px solid var(--blue-l20);' },
	});
	wrapper.appendChild(
		makeElement({
			tag: 'input',
			attributes: { type: 'checkbox', style: 'grid-column: 1;' },
			className: 'item-select-checkbox',
			id: 'toggle-all-checkbox',
			title: 'Toggle selection for all rows',
			onClick: toggleCheckboxes,
		})
	);
	table.appendChild(wrapper);

	table.appendChild(
		makeElement({
			className: 'cross-project-actions__column-header',
			innerHTML: 'toggle selection for all rows',
		})
	);

	table.appendChild(
		makeElement({
			className: 'cross-project-actions__column-header',
			innerHTML: 'source value',
		})
	);

	table.appendChild(
		makeElement({
			className: 'cross-project-actions__column-header',
			innerHTML: 'destination value (to overwrite)',
		})
	);

	// Table Rows
	makeRows(table);

	return table;
}

function makeRows(parent) {
	// log(`makeRows`, 'start');

	makeOneRow('project', 'name');
	makeOneRow('app', 'stopPageNavigation');
	makeOneRow('app', 'autoSave');
	makeOneRow('app', 'showNonCharPoints');
	makeOneRow('app', 'formatSaveFile');
	makeOneRow('app', 'moveShapesOnSVGDragDrop');
	makeOneRow('app', 'saveLivePreviews');
	makeOneRow('app', 'previewText');
	makeOneRow('font', 'previewText');
	makeOneRow('font', 'family');
	makeOneRow('font', 'style');
	makeOneRow('font', 'version');
	makeOneRow('font', 'description');
	makeOneRow('font', 'panose');
	makeOneRow('font', 'upm');
	makeOneRow('font', 'ascent');
	makeOneRow('font', 'descent');
	makeOneRow('font', 'capHeight');
	makeOneRow('font', 'xHeight');
	makeOneRow('font', 'overshoot');
	makeOneRow('font', 'lineGap');
	makeOneRow('font', 'italicAngle');
	makeOneRow('font', 'designer');
	makeOneRow('font', 'designerURL');
	makeOneRow('font', 'manufacturer');
	makeOneRow('font', 'manufacturerURL');
	makeOneRow('font', 'license');
	makeOneRow('font', 'licenseURL');
	makeOneRow('font', 'copyright');
	makeOneRow('font', 'trademark');
	makeOneRow('font', 'variant');
	makeOneRow('font', 'weight');
	makeOneRow('font', 'stretch');
	makeOneRow('font', 'stemv');
	makeOneRow('font', 'stemh');
	makeOneRow('font', 'slope');
	makeOneRow('font', 'underlinePosition');
	makeOneRow('font', 'underlineThickness');
	makeOneRow('font', 'strikethroughPosition');
	makeOneRow('font', 'strikethroughThickness');
	makeOneRow('font', 'overlinePosition');
	makeOneRow('font', 'overlineThickness');

	function makeOneRow(settingGroup, settingName) {
		const title = `Select ${settingGroup} / ${settingName}`;
		const settingID = `${settingGroup}.${settingName}`;
		const sourceValue = sourceEditor.project.settings[settingGroup][settingName];
		const destinationValue = destinationEditor.project.settings[settingGroup][settingName];
		// log(`sourceValue: ${sourceValue}`);
		// log(`destinationValue: ${destinationValue}`);

		let wrapper = makeElement({ className: 'checkbox-wrapper' });
		wrapper.appendChild(
			makeElement({
				tag: 'input',
				attributes: { type: 'checkbox', style: 'grid-column: 1;', 'item-id': settingID },
				className: 'item-select-checkbox',
				id: `checkbox-${settingID}`,
				title: title,
				onClick: (event) => {
					updateSelectedIDs(settingID, event.target.checked);
				},
			})
		);
		parent.appendChild(wrapper);

		parent.appendChild(
			makeElement({
				tag: 'label',
				attributes: { for: `checkbox-${settingID}` },
				content: `${settingGroup} / ${settingName}`,
				className: 'glyph-name',
				title: title,
			})
		);

		parent.appendChild(
			makeElement({
				tag: 'label',
				attributes: { for: `checkbox-${settingID}` },
				content: sourceValue,
				className: 'text-value',
				title: title,
			})
		);

		parent.appendChild(
			makeElement({
				tag: 'label',
				attributes: { for: `checkbox-${settingID}` },
				content: destinationValue,
				className: 'text-value',
				title: title,
			})
		);
	}

	// log(`makeRows`, 'end');
}

export function updateFooter_overwriteSettings(parent) {
	parent.appendChild(
		makeElement({
			tag: 'fancy-button',
			content: 'Overwrite settings for selected items',
			onClick: overwriteSettings,
		})
	);
}

function overwriteSettings() {
	// log(`Cross Project Actions - overwriteSettings`, 'start');

	selectedItemIDs.forEach((itemID) => {
		// log(`itemID: ${itemID}`);
		const settingGroup = itemID.split('.')[0];
		const settingName = itemID.split('.')[1];
		const sourceValue = sourceEditor.project.settings[settingGroup][settingName];
		destinationEditor.project.settings[settingGroup][settingName] = sourceValue;
	});

	showToast(`Overwrote settings for ${selectedItemIDs.length} items`);
	updateContent_overwriteSettings(document.querySelector('#cross-project-actions__page-content'));
	clearAllSelections();
	// log(`Cross Project Actions - overwriteSettings`, 'end');
}