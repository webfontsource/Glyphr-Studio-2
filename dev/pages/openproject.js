import {makeElement} from './../controls/controls.js';

/**
 * Page > Open Project
 * The first page you see when you open Glyphr Studio.
 * HTML and associated functions for this page.
 */
export default class PageOpenProject {
    /**
     * Initialize this page
     */
    constructor() {

    }

    /**
     * Load the Open Project page
     */
    get content() {
        // debug("LOADING PAGE >> openproject");
        let recent = 1000*60*60*24*7; // seven days in milliseconds
        let recentMessage = '';
        let app = window.GlyphrStudio;
        if ((Date.now() - app.versionDate) < recent) {
            recentMessage = ` - <a href="http://help.glyphrstudio.com/overview_updates.html" target="_blank">recently updated!</a>`;
        }

        let ct = `
        <table style="height:100%; width:100%;"><tr>
        <td id="openprojecttableleft" vertical-align="middle">
            <div id="splashscreenlogo"></div>

            <span class="splashvername">${app.version}</span>

            <span class="splashvernum">${app.versionNum.split('.')[2]}${recentMessage}</span>

            <div class="splashblurb">
                For more informaiton visit <a href="http://www.glyphrstudio.com" target="_blank">www.glyphrstudio.com</a><br>
                Glyphr Studio is licensed under a <a href="https://www.gnu.org/licenses/gpl.html" target="_blank">GNU General Public License</a>,
                which is a free / open source "copyleft" license. You are free to use, distribute, and modify Glyphr Studio as long as
                this license and its freeness stays intact.
            </div>
            <input style="display:none;" type="file" id="filechooser"/>
        </td>
        <td id="openprojecttableright" vertical-align="middle">${this.makeTabs()}</td>
        </tr></table>`;

        /*
        document.body.innerHTML = '<div id="mainwrapper"></div>';
        let mp = document.getElementById('mainwrapper');
        mp.innerHTML = ct;
        mp.style.marginLeft = '0px';
        document.getElementById('openprojecttableright').addEventListener('dragover', this.handleDragOver, false);
        document.getElementById('openprojecttableright').addEventListener('drop', this.handleDrop, false);
        document.getElementById('openprojecttableright').addEventListener('dragleave', this.handleDragLeave, false);
        document.getElementById('openprojecttableleft').addEventListener('dragover', this.handleDragOver, false);
        document.getElementById('openprojecttableleft').addEventListener('drop', this.handleDrop, false);
        document.getElementById('openprojecttableleft').addEventListener('dragleave', this.handleDragLeave, false);
        document.getElementById('filechooser').addEventListener('change', this.handleDrop, false);
        window.addEventListener('message', this.handleMessage, false);

        if (window.opener) window.opener.postMessage('ready', '*');
        this.changeTab();

        // document.getElementById('splashscreenlogo').innerHTML = makeGlyphrStudioLogo({'fill': 'white', 'width': 400});
        */
        let re = makeElement({className: 'pageWrapper'});
        re.innerHTML = ct;
        return re;
    }

    /**
     * Create the tabs for the load project page
     * @returns {string} html content
     */
    makeTabs() {
        // TABS
        let con = `
        <div class="openproject_tabs">
            <button id="new_tab" onclick="getCurrentPage().changeTab(\'new\');">new</button>
            <button id="load_tab" onclick="getCurrentPage().changeTab(\'load\');">load</button>
            <button id="examples_tab" onclick="getCurrentPage().changeTab(\'examples\');">examples</button>
        </div>`;

        // LOAD
        con += `
        <div class="openproject_tile" id="load_content" style="display: none;">
            <h2>Load a file</h2>
            <button onclick="document.getElementById(\'filechooser\').click();" class="buttonsel">Browse for a File</button>&ensp; or Drag and Drop:
            <div id="droptarget">
                Glyphr Studio Project &ensp;(.txt)<br>
                Open Type or True Type Font &ensp;(.otf or .ttf)<br>
                SVG Font &ensp;(.svg)
            </div>
            <div style="width:335px;"> makeErrorMessageBox() + '</div>
        </div>`;

        // NEW
        con += `
        <div class="openproject_tile" id="new_content" style="display: none;">
            <h2>Start a new Glyphr Studio Project</h2>
            Project name: &nbsp; <input id="newprojectname" type="text" value="My Font" autofocus/><br>
            <button onclick="newProjectHandler(); navigate({page:\'glyph edit\'});" class="buttonsel">Start a new font from scratch</button>
        </div>`;

        // EXAMPLES
        con += `
        <div class="openproject_tile" id="examples_content" style="display: none;">
            <h2>Load an Example project</h2>

            Modegg is a project that utilizes Glyphr Studio features, like Components:<br>
            <button onclick="openproject_loadSample(\'modegg\');" class="buttonsel">Modegg</button><br><br>

            California Gothic is an all-caps display font:<br>' +
            <button onclick="openproject_loadSample(\'californiagothic\');" class="buttonsel">California Gothic</button><br><br>

            Merriweather Sans is an open-source font imported from an Open Type file:<br>
            <button onclick="openproject_loadSample(\'merriweathersans\');" class="buttonsel">Merriweather Sans</button><br><br>
        </div>`;

        return con;
    }

    /**
     * Handle tab changes
     * @param {string} tab - which tab to select
     */
    changeTab(tab) {
        let contentnew = document.getElementById('new_content');
        let contentload = document.getElementById('load_content');
        let contentexamples = document.getElementById('examples_content');
        // var contentrecent = document.getElementById('recent_content');

        let tabnew = document.getElementById('new_tab');
        let tabload = document.getElementById('load_tab');
        let tabexamples = document.getElementById('examples_tab');
        // var tabrecent = document.getElementById('recent_tab');

        contentnew.style.display = 'none';
        contentload.style.display = 'none';
        contentexamples.style.display = 'none';
        // contentrecent.style.display = 'none';

        tabnew.style.borderBottomColor = 'rgb(229,234,239)';
        tabload.style.borderBottomColor = 'rgb(229,234,239)';
        tabexamples.style.borderBottomColor = 'rgb(229,234,239)';
        // tabrecent.style.borderBottomColor = 'rgb(229,234,239)';


        if (tab === 'load') {
            contentload.style.display = 'block';
            tabload.style.borderBottomColor = 'rgb(0,140,210)';
        } else if (tab === 'examples') {
            contentexamples.style.display = 'block';
            tabexamples.style.borderBottomColor = 'rgb(0,140,210)';
        } else {
            // default to new
            contentnew.style.display = 'block';
            tabnew.style.borderBottomColor = 'rgb(0,140,210)';
        }
    }

    /**
     * Handle file drop
     * @param {object} evt - drop event
     */
    handleDrop(evt) {
        // debug('\n handleDrop - START');
        document.getElementById('openprojecttableright').innerHTML = 'Loading File...';
        document.getElementById('openprojecttableright').style.backgroundColor = _UI.colors.gray.offwhite;

        evt.stopPropagation();
        evt.preventDefault();

        let f = evt.dataTransfer || document.getElementById('filechooser');
        f = f.files[0];
        // debug('\t filename: ' + f.name);
        let fname = f.name.split('.');
        fname = fname[fname.length-1].toLowerCase();
        // debug('\t fname = ' + fname);

        let reader = new FileReader();

        if (fname === 'otf' || fname === 'ttf') {
            reader.onload = function() {
                // debug('\n reader.onload::OTF or TTF - START');
                window.GlyphrStudio.temp.droppedFileContent = reader.result;
                ioOTF_importOTFfont();
                // debug(' reader.onload:: OTF or TTF - END\n');
            };

            reader.readAsArrayBuffer(f);
        } else if (fname === 'svg' || fname === 'txt') {
            reader.onload = function() {
                // debug('\n reader.onload::SVG or TXT - START');
                window.GlyphrStudio.temp.droppedFileContent = reader.result;
                if (fname === 'svg') {
                    // debug('\t File = .svg');
                    ioSVG_importSVGfont();
                } else if (fname === 'txt') {
                    // debug('\t File = .txt');
                    importGlyphrProjectFromText();
                    navigate();
                }
                // debug(' reader.onload::SVG OR TXT - END\n');
            };

            reader.readAsText(f);
        } else {
            let con = '<h3>Unsupported file type</h3>';
            con += 'Glyphr Studio can\'t import .' + fname + ' files.<br>';
            con += 'Try loading another file.';
            document.getElementById('openprojecttableright').innerHTML = makeTabs();
            changeTab('load');
            showErrorMessageBox(con);
            document.getElementById('openprojecttableright').style.backgroundColor = _UI.colors.gray.offwhite;
        }

        // debug(' handleDrop - END\n');
    }

    /**
     * Handle Message event
     * @param {object} evt - event
     */
    handleMessage(evt) {
        // assume strings are SVG fonts
        window.GlyphrStudio.temp.droppedFileContent = evt.data;

        if ( typeof evt.data === 'string' ) {
            ioSVG_importSVGfont(false);

        // assume array buffers are otf fonts
        } else if ( evt.data instanceof ArrayBuffer ) {
            ioOTF_importOTFfont(false);
        }
    }

    /**
     * Handle DragOver event
     * @param {object} evt - event
     */
    handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';

        let frtr = document.getElementById('openprojecttableright');
        frtr.style.backgroundColor = _UI.colors.blue.l95;
        frtr.innerHTML = 'Drop it!';
    }

    /**
     * Handle DragLeave event
     * @param {object} evt - event
     */
    handleDragLeave(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        let frtr = document.getElementById('openprojecttableright');
        frtr.style.backgroundColor = _UI.colors.gray.offwhite;
        frtr.innerHTML = makeTabs();
        changeTab('load');
    }

    /**
     * Load a project sample
     * @param {string} name - which sample to load
     */
    openproject_loadSample(name) {
        document.getElementById('examples_content').innerHTML = '<h2>Load an Example project</h2>Loading example project...';

        setTimeout(function() {
            loadGlyphrStudioProject(_UI.sampleproject[name]);
            navigate({page: 'glyph edit'});
        }, 5);
    }
}
