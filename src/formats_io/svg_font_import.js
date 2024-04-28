import { getProjectEditorImportTarget, log, setCurrentProjectEditor } from '../app/main.js';
import {
	hexesToChars,
	hexesToHexArray,
	parseCharsInputAsHex,
	validateAsHex,
} from '../common/character_ids.js';
import { generateNewID } from '../common/functions.js';
import { updateProgressIndicator } from '../controls/progress-indicator/progress_indicator.js';
import { getUnicodeName } from '../lib/unicode/unicode_names.js';
import { makeLigatureID } from '../pages/ligatures.js';
import { KernGroup } from '../project_data/kern_group.js';
import { ioSVG_convertSVGTagsToGlyph } from './svg_outline_import.js';

/**
	IO > Import > SVG Font
	Reading XML Text and parsing it into Glyphr
	Studio Objects.  Relies heavily on
	IO > Import > SVG Outline
**/
let glyphTags;
let kernTags;

export function ioSVG_importSVGfont(font) {
	// log('ioSVG_importSVGfont', 'start');

	const editor = getProjectEditorImportTarget();
	const project = editor.project;

	setTimeout(setupFontImport, 10);

	function setupFontImport() {
		// log('setupFontImport', 'start');
		updateProgressIndicator('Reading font data...');

		// Get Kerns
		kernTags = getTagsByName(font, 'hkern');

		// Get Glyphs
		glyphTags = getTagsByName(font, 'glyph');

		// Get Notdef
		let missingGlyph = getTagsByName(font, 'missing-glyph');
		if (missingGlyph.length) importMissingGlyph(missingGlyph[0].attributes);

		// Start it up
		updateSVGImportProgressIndicator('character', 1);
		setTimeout(importOneGlyph, 10);
		// log('setupFontImport', 'end');
	}

	/*
	 *
	 *  Process-wide counters
	 *
	 */
	const finalGlyphs = {};
	const finalLigatures = {};
	let charCounter = 0;

	/*
	 *
	 *  NOTDEF GLYPH IMPORT
	 *
	 */
	function importMissingGlyph(missingGlyph) {
		// log(`\n⮟missingGlyph⮟`);
		// log(missingGlyph);
		const glyphSVG = `<svg><glyph d="${missingGlyph.d}"/></svg>`;
		const newGlyph = ioSVG_convertSVGTagsToGlyph(glyphSVG, false);
		const advanceWidth = parseInt(missingGlyph['horiz-adv-x']);
		newGlyph.advanceWidth = advanceWidth;
		project.incrementRangeCountFor('0x0');
		newGlyph.id = `glyph-0x0`;
		finalGlyphs[`glyph-0x0`] = newGlyph;
		// log(`\n⮟finalGlyphs['glyph-0x0']⮟`);
		// log(finalGlyphs[`glyph-0x0`]);
	}

	/*
	 *
	 *  GLYPH IMPORT
	 *
	 */
	function importOneGlyph() {
		// log(`importOneGlyph`, 'start');

		if (charCounter >= glyphTags.length) {
			setTimeout(importOneKern, 10);
			updateProgressIndicator('Finalizing the imported font...');
			// setTimeout(startFinalizeFontImport, 10);

			return;
		}

		// One Glyph or Ligature in the font
		const attributes = glyphTags[charCounter].attributes;
		const glyphName = attributes['glyph-name'];
		// log('glyphTags[charCounter]');
		// log(glyphTags[charCounter]);

		let uni = parseCharsInputAsHex(attributes.unicode);
		if (attributes.unicode === ' ' || glyphName.toLowerCase() === 'space') {
			uni = ['0x20'];
		}

		if (!attributes.unicode && glyphName.startsWith('uni')) {
			const hex = validateAsHex(`0x${glyphName.substring(3)}`);
			// log(`UNI detected ${glyphName} hex is ${hex}`);
			if (hex) {
				uni = [hex];
				project.settings.app.showNonCharPoints = true;
			}
		}
		// log(`attributes.unicode: |${attributes.unicode}| parsed as ${uni}`);

		if (uni === false || uni === '0x0') {
			// Check for .notdef
			// log('!!! Skipping '+glyphName+' NO UNICODE !!!');
			glyphTags.splice(charCounter, 1);
		} else {
			// log('GLYPH ' + charCounter + '/'+glyphTags.length+'\t unicode: ' + json(uni) + '\t attributes: ' + json(attributes));
			/*
			 *
			 *  GLYPH OR LIGATURE IMPORT
			 *
			 */
			const glyphSVG = `<svg><glyph d="${glyphTags[charCounter].attributes.d}"/></svg>`;
			const newGlyph = ioSVG_convertSVGTagsToGlyph(glyphSVG, false);

			// Get Advance Width
			// log(`attributes['horiz-adv-x']: ${attributes['horiz-adv-x']}`);

			const advanceWidth = parseInt(attributes['horiz-adv-x']);
			newGlyph.advanceWidth = advanceWidth;

			if (uni.length === 1) {
				// It's a GLYPH
				updateSVGImportProgressIndicator('character', charCounter);
				// log(`Detected Glyph`);
				uni = uni[0];
				project.incrementRangeCountFor(uni);
				newGlyph.id = `glyph-${uni}`;
				// log(newGlyph);
				finalGlyphs[`glyph-${uni}`] = newGlyph;
				if (getUnicodeName(uni) === '[name not found]') {
					project.settings.app.showNonCharPoints = true;
				}
			} else {
				// It's a LIGATURE
				updateSVGImportProgressIndicator('ligature', charCounter);
				// log(`Detected Ligature`);
				uni = uni.join('');
				// log(`uni: ${uni}`);
				const chars = hexesToChars(uni);
				// log(`chars: ${chars}`);
				const newID = makeLigatureID(chars);
				newGlyph.id = newID;
				newGlyph.gsub = hexesToHexArray(uni);
				finalLigatures[newID] = newGlyph;
			}

			// Successful loop, advance charCounter
			charCounter++;
		}

		// finish loop
		setTimeout(importOneGlyph, 10);

		// log(`importOneGlyph`, 'end');
	}

	/*
	 *
	 *  KERN IMPORT
	 *
	 */
	let thisKern;
	let leftGroup;
	let rightGroup;
	let newID;
	let kernValue;
	const finalKerns = {};
	let kernCount = 0;

	function importOneKern() {
		if (kernCount >= kernTags.length) {
			updateProgressIndicator('Finalizing the imported font...');
			setTimeout(startFinalizeFontImport, 10);
			return;
		}

		updateSVGImportProgressIndicator('kern pair', kernCount + glyphTags.length);

		// log('Kern Import - START ' + kernCount + '/' + kernTags.length);
		leftGroup = [];
		rightGroup = [];
		thisKern = kernTags[kernCount];
		// log('Kern Attributes: ' + json(thisKern.attributes, true));

		// Get members by name
		leftGroup = getKernMembersByName(thisKern.attributes.g1, glyphTags, leftGroup);
		rightGroup = getKernMembersByName(thisKern.attributes.g2, glyphTags, rightGroup);

		// log('kern groups by name ' + json(leftGroup, true) + ' ' + json(rightGroup, true));

		// Get members by Unicode
		leftGroup = getKernMembersByUnicodeID(thisKern.attributes.u1, glyphTags, leftGroup);
		rightGroup = getKernMembersByUnicodeID(thisKern.attributes.u2, glyphTags, rightGroup);

		// log('kern groups parsed as ' + json(leftGroup, true) + ' ' + json(rightGroup, true));

		if (leftGroup.length && rightGroup.length) {
			newID = generateNewID(finalKerns, 'kern-');
			kernValue = thisKern.attributes.k || 0;
			// log('Making a kern pair with k = ' + kernValue);
			finalKerns[newID] = new KernGroup({
				leftGroup: leftGroup,
				rightGroup: rightGroup,
				value: kernValue,
			});
			finalKerns[newID].id = newID;
			// log('Made the new kern successfully.');
			kernCount++;
		} else {
			kernTags.splice(kernCount, 1);
			// log('Kern ' + json(thisKern.attributes, true) + ' returned an empty group.');
		}

		// log('Kern Import', 'end');
		setTimeout(importOneKern, 10);
	}

	/*
	 *
	 *  FINALIZE
	 *
	 */
	function startFinalizeFontImport() {
		updateProgressIndicator('Finalizing the imported font...');
		setTimeout(finalizeFontImport, 10);
	}

	function finalizeFontImport() {
		project.glyphs = finalGlyphs;
		project.ligatures = finalLigatures;
		project.kerning = finalKerns;

		// Import Font Settings
		// Check to make sure certain stuff is there
		// space has horiz-adv-x

		// Font Settings
		const fontAttributes = getFirstTagInstance(font, 'font-face').attributes;
		const fontSettings = project.settings.font;
		const fname = fontAttributes['font-family'] || 'My Font';

		fontSettings.family = fname;
		fontSettings.style = fontAttributes['font-style'] || 'Regular';
		fontSettings.panose = fontAttributes['panose-1'] || '0 0 0 0 0 0 0 0 0 0';
		fontSettings.upm = 1 * fontAttributes['units-per-em'] || fontSettings.upm;
		fontSettings.ascent = 1 * fontAttributes.ascent || fontSettings.ascent;
		fontSettings.capHeight = 1 * fontAttributes['cap-height'] || fontSettings.capHeight;
		fontSettings.xHeight = 1 * fontAttributes['x-height'] || fontSettings.xHeight;
		fontSettings.descent = 1 * fontAttributes.descent || fontSettings.descent;
		fontSettings.variant = fontAttributes['font-variant'] || 'normal';
		fontSettings.weight = 1 * fontAttributes['font-weight'] || 400;
		fontSettings.stretch = fontAttributes['font-stretch'] || 'normal';
		fontSettings.underlinePosition = 1 * fontAttributes['underline-position'] || -100;
		fontSettings.underlineThickness = 1 * fontAttributes['underline-thickness'] || 20;
		fontSettings.strikethroughPosition =
			1 * fontAttributes['strikethrough-position'] || fontSettings.xHeight / 2;
		fontSettings.strikethroughThickness = 1 * fontAttributes['strikethrough-thickness'] || 20;
		fontSettings.overlinePosition =
			1 * fontAttributes['overline-position'] || fontSettings.ascent + 50;
		fontSettings.overlineThickness = 1 * fontAttributes['overline-thickness'] || 20;

		fontSettings.overshoot = fontSettings.upm > 2000 ? 30 : 20;
		project.settings.project.name = fname;

		// log(project);
		setCurrentProjectEditor(editor);
		editor.nav.page = 'Overview';
		editor.navigate();
		// log('ioSVG_importSVGfont', 'end');
	}
	// log('ioSVG_importSVGfont', 'end');
}

function updateSVGImportProgressIndicator(type, counter) {
	const total = glyphTags.length + kernTags.length;
	updateProgressIndicator(`
			Importing ${type}:
			<span class="progress-indicator__counter">${counter}</span>
			 of
			<span class="progress-indicator__counter">${total}</span>
		`);
}

/**
 * Recursively looks through data and returns any data that matches
 * a specified list of tag names.
 * @param {Object} obj - object to look through
 * @param {Array or String} grabTags - list of tags to collect
 * @returns {Array} - collection of objects representing tags
 */
function getTagsByName(obj, grabTags) {
	// log('getTagsByName', 'start');
	// log('grabTags: ' + JSON.stringify(grabTags));
	// log('passed obj: ');
	// log(obj);

	if (typeof grabTags === 'string') grabTags = [grabTags];
	let result = [];

	if (obj.content) {
		for (let c = 0; c < obj.content.length; c++) {
			result = result.concat(getTagsByName(obj.content[c], grabTags));
		}
	} else {
		if (grabTags.indexOf(obj.name) > -1) {
			result = [obj];
		}
	}

	// log('getTagsByName', 'end');
	return result;
}

export function getFirstTagInstance(obj, tagname) {
	// log('getFirstTagInstance', 'start');
	// log('finding ' + tagname + ' in:');
	// log(obj);

	if (tagname === obj.name) {
		// log('getFirstTagInstance - tagname === obj.name', 'end');
		return obj;
	} else if (obj.content) {
		for (let c = 0; c < obj.content.length; c++) {
			const sub = getFirstTagInstance(obj.content[c], tagname);
			if (sub) {
				// log('getFirstTagInstance - looked through obj and found it', 'end');
				return sub;
			}
		}
	} else {
		// log('getFirstTagInstance - NO obj.content FOUND', 'end');
		return false;
	}
}

function getKernMembersByName(names, chars, arr, limit) {
	limit = limit || 0xffff;
	let uni;
	if (names) {
		names = names.split(',');

		// Check all the glyph names
		for (let n = 0; n < names.length; n++) {
			// Check all the chars
			for (let c = 0; c < chars.length; c++) {
				if (chars[c].attributes.unicode) {
					// Push the match
					if (names[n] === chars[c].attributes['glyph-name']) {
						uni = parseCharsInputAsHex(chars[c].attributes.unicode);
						if (1 * uni < limit) arr = arr.concat(uni);
					}
				}
			}
		}
	}

	return arr;
}

function getKernMembersByUnicodeID(ids, chars, arr, limit) {
	limit = limit || 0xffff;
	let uni;
	if (ids) {
		ids = ids.split(',');

		// Check all the IDs
		for (let i = 0; i < ids.length; i++) {
			// Check all the chars
			for (let c = 0; c < chars.length; c++) {
				if (chars[c].attributes.unicode) {
					// Push the match
					if (ids[i] === chars[c].attributes.unicode) {
						uni = parseCharsInputAsHex(chars[c].attributes.unicode);
						if (1 * uni < limit) arr = arr.concat(uni);
					}
				}
			}
		}
	}

	return arr;
}
