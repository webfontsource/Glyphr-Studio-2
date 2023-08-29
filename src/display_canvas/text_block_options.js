import { makeElement } from '../common/dom';

export class TextBlockOptions {
	/**
	 * PageHeight / PageWidth:
	 * {Number} for fixed px value
	 * 'fit' to extend to the size of the parent div
	 * 'auto' to be as tall as the text requires
	 */
	constructor(options = {}) {
		// log(`TextBlockOptions.constructor`, 'start');
		// log(options);
		this.name = options.name || false;
		this.text = options.text || '';
		this.fontSize = options.fontSize || 48;
		this.lineGap = options.lineGap || 12;
		this.pagePadding = options.pagePadding || 10;
		this.pageWidth = options.pageWidth || 'fit';
		this.pageHeight = options.pageHeight || 'auto';
		this.showCharacterExtras = options.showCharacterExtras || false;
		this.showLineExtras = options.showLineExtras || false;
		this.showPageExtras = options.showPageExtras || false;
		// log(`TextBlockOptions.constructor`, 'end');
	}

	get text() {
		if (this._text === '{{swadesh_207}}') return swadesh_207;
		if (this._text === '{{english_10}}') return english_10;
		if (this._text === '{{english_50}}') return english_50;
		return this._text;
	}

	set text(newText = '') {
		this._text = newText;
	}
}

// Text samples
const swadesh_207 =
	'I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name';
const english_10 =
	'able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size';
const english_50 =
	'salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy';

export function makeDisplayCanvasFromTextBlockOptions(textBlock = new TextBlockOptions()) {
	// log(`makeDisplayCanvasFromTextBlockOptions`, 'start');
	// log(textBlock);
	const displayCanvas = makeElement({ tag: 'display-canvas' });
	displayCanvas.setAttribute('text', textBlock.text);
	displayCanvas.setAttribute('fontSize', textBlock.fontSize);
	displayCanvas.setAttribute('lineGap', textBlock.lineGap);
	displayCanvas.setAttribute('pageWidth', textBlock.pageWidth);
	displayCanvas.setAttribute('pageHeight', textBlock.pageHeight);
	displayCanvas.setAttribute('pagePadding', textBlock.pagePadding);
	displayCanvas.setAttribute('showPageExtras', textBlock.showPageExtras);
	displayCanvas.setAttribute('showLineExtras', textBlock.showLineExtras);
	displayCanvas.setAttribute('showCharacterExtras', textBlock.showCharacterExtras);

	// log(`textBlock.name: ${textBlock.name}`);
	if (textBlock.name) {
		displayCanvas.setAttribute('title', textBlock.name);
	}

	// log(`makeDisplayCanvasFromTextBlockOptions`, 'end');

	return displayCanvas;
}
