/**
 * MANIFEST
 * Object describing Glyphr Studio's project file structure.
 * This is used to:
 *  Assemble the Development environment, maintaining individual files
 *  Concat / Minimize to a single file for Distribution
 */
// debug(`\n MANIFEST.js - START`);


let manifest = [
    {
        path: 'glyph_elements',
        files: [
            'xypoint.js',
            'coord.js',
            'controlpoint.js',
            'pathpoint.js',
            'maxes.js',
            'path.js',
            'segment.js',
            'polysegment.js',
            'shape.js',
            'componentinstance.js',
            'glyph.js',
            'hkern.js',

            'xypoint.test.js',
            'coord.test.js',
            'controlpoint.test.js',
            'pathpoint.test.js',
            'maxes.test.js',
            'path.test.js',
            'segment.test.js',
            'polysegment.test.js',
            'shape.test.js',
            'componentinstance.test.js',
            'glyph.test.js',
            'hkern.test.js',
        ],
    },

    {
        path: 'app',
        files: [
            'app.js',
            'colors.js',
            // 'nav.js',

            'colors.test.js',
            // 'test.test.js',
        ],
    },

    {
        path: 'common',
        files: [
            'functions.js',
            'unicode.js',
        ],
    },
/*
    {
        path: 'project',
        files: [
            'glyphr_studio_project.js',
            'project_editor.js',
            'import.js',
            'migrate.js',
            'history.js',

            'glyphr_studio_project.test.js',
        ],
    },
*/
    {
        path: 'edit_canvas',
        files: [
            'edit_canvas.js',
            // 'events_mouse.js',
            // 'events_keyboard.js',
            // 'guide.js',
            // 'multiselect.js',
            // 'glyph_sequence.js',

            // 'edit_canvas.css',
        ],
    },
/*
    {
        path: 'controls',
        files: [
            'controls.js',
            'controls.css',
            'dialogs.js',
        ],
    },

    {
        path: 'io',
        files: [
            'svg_outline_import.js',
            'svg_font_import.js',
            'svg_font_export.js',
            'otf_import.js',
            'otf_export.js',
        ],
    },

    {
        path: 'pages',
        files: [
            'glyphedit.js',
            'components.js',
            'ligatures.js',
            'kerning.js',
            'testdrive.js',
            'globalactions.js',
            'fontsettings.js',
            'projectSettings.js',
            'openproject.js',
            'importSVG.js',
            'exportfont.js',
            'about.js',

            'pages.css',
        ],
    },

    {
        path: 'panels',
        files: [
            'attributes_glyph.js',
            'attributes_component.js',
            'attributes_kern.js',
            'chooser.js',
            'layers.js',
            'guides.js',
            'history.js',
            'actions.js',

            'panels.css',
        ],
    },
    */

    {
        path: 'lib',
        files: [
            // 'satchooser.js',
            // 'samples.js',
            'unicode_names.js',
            'xml_to_json.js',
            'opentypejs_0-9-0.js',
        ],
    },
];

export default manifest;
