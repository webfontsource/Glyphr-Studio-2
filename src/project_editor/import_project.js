import { GlyphrStudioProject } from '../project_data/glyphr_studio_project.js';
import { getGlyphrStudioApp } from '../app/main.js';
import { parseSemVer } from '../io/validate_file_input.js';
import { Glyph } from '../project_data/glyph.js';
import { Path } from '../project_data/path.js';
import { PathPoint } from '../project_data/path_point.js';
import { unicodeRanges } from '../common/unicode.js';
import { ControlPoint } from '../project_data/control_point.js';

/**
 * Takes a js Object from a JSON-based project file, and returns
 * a Glyphr Studio project object.
 * @param {Object} importedProject - Object from JSON project file data
 * @returns {GlyphrStudioProject}
 */
export function importGlyphrProjectFromText(importedProject) {
	log('importGlyphrProjectFromText', 'start');
	log('passed:');
	log(importedProject);

	const version = parseSemVer(importedProject.metadata.latestVersion);
	log('version found ' + importedProject.metadata.latestVersion);

	if (version.major === 1) {
		importedProject = migrate_Project(importedProject);
	}

	// Update the version
	const app = getGlyphrStudioApp();
	importedProject.metadata.latestVersion = app.version;

	// Hydrate after all updates
	log('importGlyphrProjectFromText', 'end');
	return new GlyphrStudioProject(importedProject);
}

// --------------------------------------------------------------
// Migrate from v1 to v2
// --------------------------------------------------------------

/**
 * Starting with Glyphr Studio Project file version 1.13.2,
 * roll through updates to translate any old project file structure
 * to current project file structure.
 * Hopefully this is minimal.
 * @param {string} project - Old project object data
 * @returns {object} - Latest Glyphr Studio v2 Project structure
 */
function migrate_Project(oldProject) {
	// log('migrate_Project', 'start');

	const newProject = new GlyphrStudioProject();

	Object.keys(oldProject.glyphs).forEach((key) => {
		newProject.glyphs[key] = migrate_Glyph(oldProject.glyphs[key], key);
	});

	// TODO Ligatures
	// TODO Components
	// TODO Kerns

	// Metadata
	const newPreferences = newProject.metadata.preferences;
	const newRanges = newProject.metadata.glyphRanges;
	const newSysGuides = newProject.guides.system;
	const newFont = newProject.metadata.font;
	const oldSettings = oldProject.projectsettings;
	const oldRanges = oldProject.projectsettings.glyphrange;
	const oldGuides = oldProject.projectsettings.guides;
	const oldColors = oldProject.projectsettings.colors;
	const oldMeta = oldProject.metadata;

	newProject.metadata.name = oldSettings.name || 'My Font';

	// Glyph ranges
	if (oldRanges.basiclatin) newRanges.push(unicodeRanges.basicLatin);
	if (oldRanges.latinsupplement) newRanges.push(unicodeRanges.latinSupplement);
	if (oldRanges.latinextendeda) newRanges.push(unicodeRanges.latinExtendedA);
	if (oldRanges.latinextendedb) newRanges.push(unicodeRanges.latinExtendedB);
	if (oldRanges.custom.length) oldRanges.custom.forEach((range) => newRanges.push(range));

	// Preferences
	// newPreferences.showNonCharPoints = oldSettings.glyphrange.filternoncharpoints || true;
	newPreferences.combinePathsOnExport = oldSettings.combineshapesonexport || false;
	newPreferences.maxCombinePathsOnExport = oldSettings.maxcombineshapesonexport || 30;
	newPreferences.stopPageNavigation = oldSettings.stoppagenavigation || true;
	newPreferences.formatSaveFile = oldSettings.formatsavefile || true;
	newPreferences.contextGlyphs.showGuides = oldSettings.showcontextglyphguides || true;
	newPreferences.contextGlyphs.transparency = oldColors.contextglyphtransparency || 90;

	// Guides
	newSysGuides.transparency = oldColors.systemguidetransparency || 90;
	newSysGuides.showBaseline = oldGuides.baseline.visible || true;
	newSysGuides.showLeftSide = oldGuides.leftside.visible || true;
	newSysGuides.showRightSide = oldGuides.rightside.visible || true;
	// TODO Custom Guides

	// Font
	newFont.family = oldMeta.font_family || 'My Font';
	newFont.style = oldMeta.font_style || 'normal';
	newFont.panose = oldMeta.panose_1 || '2 0 0 0 0 0 0 0 0 0';
	newFont.upm = oldSettings.upm || 1000;
	newFont.ascent = oldSettings.ascent || 700;
	newFont.descent = oldSettings.descent || -300;
	newFont.capHeight = oldSettings.capHeight || 675;
	newFont.xHeight = oldSettings.xHeight || 400;
	newFont.lineGap = oldSettings.lineGap || 250;
	newFont.italicAngle = oldSettings.italicAngle || 0;
	newFont.overshoot = oldSettings.overshoot || 10;
	newFont.designer = oldMeta.designer || '';
	newFont.designerURL = oldMeta.designerURL || '';
	newFont.manufacturer = oldMeta.manufacturer || '';
	newFont.manufacturerURL = oldMeta.manufacturerURL || '';
	newFont.license = oldMeta.license || '';
	newFont.licenseURL = oldMeta.licenseURL || '';
	newFont.version = oldMeta.version || '';
	newFont.description = oldMeta.description || '';
	newFont.copyright = oldMeta.copyright || '';
	newFont.trademark = oldMeta.trademark || '';

	// SVG Font properties
	newFont.variant = oldMeta.font_variant || 'normal';
	newFont.weight = oldMeta.font_weight || 400;
	newFont.stretch = oldMeta.font_stretch || 'normal';
	newFont.stemv = oldMeta.stemv || 0;
	newFont.stemh = oldMeta.stemh || 0;
	newFont.slope = oldMeta.slope || 0;
	newFont.underlinePosition = oldMeta.underline_position || -50;
	newFont.underlineThickness = oldMeta.underline_thickness || 10;
	newFont.strikethroughPosition = oldMeta.strikethrough_position || 300;
	newFont.strikethrough_thickness = oldMeta.strikethrough_thickness || 10;
	newFont.overlinePosition = oldMeta.overline_position || 750;
	newFont.overlineThickness = oldMeta.overline_thickness || 10;

	return newProject;
	// log('migrate_Project', 'end');
}

/**
 * Converts a v1 Glyph, Component, or Ligature to v2
 * @param {Object} oldGlyph - v1 Glyph to migrate
 * @returns {Glyph} - new v2 Glyph
 */
function migrate_Glyph(oldGlyph, glyphID) {
	const newGlyph = new Glyph();
	newGlyph.id = glyphID;
	newGlyph.advanceWidth = oldGlyph.glyphwidth;
	newGlyph.ratioLock = oldGlyph.ratiolock;
	newGlyph.usedIn = oldGlyph.usedin;
	newGlyph.contextGlyphs = oldGlyph.contextglyphs;

	oldGlyph.shapes.forEach((shape) => {
		newGlyph.paths.push(migrate_Path(shape, newGlyph));
	});

	return newGlyph;
}

/**
 * Converts a v1 Path to v2
 * @param {Object} oldShape - v1 Shape to migrate
 * @returns {Path} - new v2 Path
 */
function migrate_Path(oldShape, parentGlyph) {
	const newPath = new Path();
	newPath.parent = parentGlyph;
	newPath.name = oldShape.name;
	newPath.xLock = oldShape.xlock;
	newPath.yLock = oldShape.ylock;
	newPath.wLock = oldShape.wlock;
	newPath.hLock = oldShape.hlock;
	newPath.ratioLock = oldShape.ratiolock;

	oldShape.path.pathpoints.forEach((point) => {
		newPath.pathPoints.push(migrate_PathPoint(point, newPath));
	});

	return newPath;
}

/**
 * Converts a v1 PathPoint to v2
 * @param {Object} oldPathPoint - v1 PathPoint to migrate
 * @returns {PathPoint} - new v2 PathPoint
 */
function migrate_PathPoint(oldPathPoint, parentPath) {
	const newPathPoint = new PathPoint();
	newPathPoint.parent = parentPath;
	newPathPoint.p = new ControlPoint({
		coord: oldPathPoint.P,
		type: 'p',
		parent: newPathPoint,
	});

	newPathPoint.h1 = new ControlPoint({
		coord: oldPathPoint.H1,
		type: 'h1',
		use: oldPathPoint.useh1,
		parent: newPathPoint,
	});

	newPathPoint.h2 = new ControlPoint({
		coord: oldPathPoint.H2,
		type: 'h2',
		use: oldPathPoint.useh2,
		parent: newPathPoint,
	});

	this.resolvePointType();
	return newPathPoint;
}
