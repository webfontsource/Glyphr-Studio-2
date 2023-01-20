// --------------------------------------------------------------
// Icons
// --------------------------------------------------------------
let icons = {};

export function makeIcon(oa) {
	// log(`makeIcon`, 'start');
	// log(oa);

	let size = 20;
	if (oa.name && oa.name.indexOf('page_') === 0) size = 50;
	if (oa.name && oa.name.indexOf('panel_') === 0) size = 50;

	let color = oa.color || 'rgb(76,81,86)';
	let con = '';

	if (icons[oa.name]) {
		if (icons[oa.name].outline) {
			con = icons[oa.name].outline;
		} else {
			con = icons[oa.name];
		}
	}

	let re = `
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}"
		>
			<defs></defs>
			<rect fill="transparent" width="${size}" height="${size}"/>
			<g pointer-events="none" fill="${color}">
				${con}
			</g>
		</svg>
	`;

	// log(`makeIcon`, 'end');

	return re;
}

// --------------------------------------------------------------
// Panels
// --------------------------------------------------------------

icons.panel_chooser = `
	<path d="M14.6,20.2v2.4H9.9v-1.7c-1.3,1.3-2.7,1.9-4.3,1.9c-1.2,0-2.3-0.4-3.2-1.2C1.5,20.8,1,19.7,1,18.5c0-1.3,0.5-2.3,1.5-3.2c1-0.8,2.1-1.3,3.5-1.3c1.3,0,2.5,0.4,3.7,1.2v-1.3c0-0.7-0.1-1.2-0.2-1.6c-0.1-0.4-0.4-0.7-0.9-1c-0.5-0.3-1.1-0.5-1.9-0.5c-1.3,0-2.3,0.5-2.9,1.6l-2.6-0.7c1.1-2.1,3.1-3.2,5.9-3.2c1,0,1.9,0.1,2.7,0.4c0.7,0.3,1.3,0.6,1.7,1.1c0.4,0.4,0.6,0.9,0.7,1.4c0.1,0.5,0.2,1.3,0.2,2.4v6.3H14.6z M9.7,17.5c-1.2-0.9-2.3-1.4-3.5-1.4c-0.7,0-1.4,0.2-1.9,0.6c-0.5,0.4-0.7,1-0.7,1.7c0,0.6,0.2,1.2,0.7,1.6c0.4,0.4,1,0.6,1.8,0.6c1.3,0,2.5-0.5,3.7-1.6V17.5z"/>
	<path d="M17,22.6v-2.4h2.4V5.4H17V3h5v7.9c1.3-1.5,3-2.3,4.9-2.3c1.9,0,3.4,0.6,4.7,1.9c1.3,1.3,1.9,3,1.9,5.1c0,2-0.6,3.7-1.9,5.1c-1.2,1.4-2.8,2.1-4.8,2.1c-1.1,0-2.1-0.2-3-0.7c-0.9-0.5-1.5-1-1.9-1.6v2H17z M22.1,15.8c0,1.4,0.4,2.5,1.3,3.4c0.9,0.8,1.9,1.2,3,1.2c1.2,0,2.2-0.4,3.1-1.3c0.9-0.9,1.3-2.1,1.3-3.5c0-1.4-0.4-2.5-1.3-3.3c-0.9-0.8-1.9-1.2-3-1.2c-1.1,0-2.1,0.4-3,1.2C22.6,13.1,22.1,14.2,22.1,15.8z"/>
	<path d="M48.6,8.8v5.1h-2.4c-0.1-1-0.5-1.7-1.2-2.3c-0.7-0.5-1.5-0.8-2.4-0.8c-1.2,0-2.2,0.4-2.9,1.3c-0.8,0.8-1.1,2-1.1,3.3c0,1.3,0.4,2.4,1.1,3.4c0.7,1,1.7,1.5,3.1,1.5c1.9,0,3.2-0.9,4.1-2.7l2.2,1c-1.2,2.7-3.4,4.1-6.4,4.1c-2.2,0-3.9-0.7-5.1-2.2c-1.2-1.5-1.9-3.2-1.9-5.1c0-2.1,0.7-3.8,2-5.1c1.4-1.3,2.9-2,4.7-2c1.5,0,2.8,0.4,3.8,1.3v-1H48.6z"/>
	<path d="M8.8,36L6.1,39h1.8v2.4H1.3V39h2l4.1-4.6l-3.9-4.2H1.6v-2.4H8v2.4H6.3l2.4,2.7l2.4-2.7H9.7v-2.4h6.4v2.4h-2.2l-3.7,4.2l4.2,4.6h1.7v2.4H9.7V39h1.9L8.8,36z"/>
	<path d="M26,41.2l-4.5-11h-2.3v-2.4H26v2.4h-1.6l2.9,7.5l2.9-7.5h-1.8v-2.4H35v2.4h-2l-6.7,17.3h-4.5v-2.3h2.7L26,41.2z"/>
	<path d="M37.3,41.4v-2.2l8.5-9.2h-5.6v2.6h-2.3v-4.8H49v2.4l-8.6,9h6.2v-2.8H49v5H37.3z"/>
`;

icons.panel_layers = `
	<polygon points="25,22 1,11.5 25,1 49,11.5"/>
	<polygon points="25,31 1,20.5 9,17 25,24 41,17 49,20.5"/>
	<polygon points="25,40 1,29.5 9,26 25,33 41,26 49,29.5"/>
	<polygon points="25,49 1,38.5 9,35 25,42 41,35 49,38.5"/>
`;

icons.panel_guides = `
	<polygon points="4,33 10,39 10,33"/>
	<polygon points="48,44 0,44 0,46 48,46 48,44"/>
	<polygon points="48,13 0,13 0,15 48,15 48,13"/>
	<polygon points="48,6 0,6 0,7 48,7 48,6"/>
	<polygon points="48,2 0,2 0,4 48,4 48,2"/>
	<polygon points="48,29 0,29 0,33 48,33 48,29"/>
	<polygon points="14,0 10,0 10,48 14,48 14,0"/>
	<polygon points="44.7,0 43.7,0 43.7,48 44.7,48 44.7,0"/>
`;

icons.panel_history = `
	<path d="M43.8,11.6L43,12.3c3.1,3.6,5,8.3,5,13.5c0,11.4-9.3,20.7-20.7,20.7c-9.2,0-17-6.1-19.7-14.4l-1,0.3c2.8,8.8,11,15.1,20.7,15.1c12,0,21.7-9.7,21.7-21.7C49,20.4,47,15.4,43.8,11.6z"/>
	<path d="M27.3,2C15.2,2,5.2,11,3.7,22.7H1l5.1,8.1l5.1-8.1H8.8C10.3,13.8,18,7.1,27.3,7.1c5.2,0,9.8,2.1,13.2,5.5L44.1,9C39.8,4.7,33.8,2,27.3,2z"/>
	<polygon points="35.9,18.2 34.8,17.1 27.4,24.5 25.4,20.4 24,21 26.3,25.6 22.7,29.2 23.8,30.3 27,27 34.1,41.2 35.5,40.6 28.2,25.9"/>
`;

icons.panel_attributes = `
	<polygon points="2,9 9,16 18,5 15,2 9,10 5,6"/>
	<polygon points="20,45 1,45 1,46 20,46 20,45"/>
	<polygon points="20,37 1,37 1,38 20,38 20,37"/>
	<polygon points="20,41 1,41 1,42 20,42 20,41"/>
	<polygon points="20,28 1,28 1,29 20,29 20,28"/>
	<polygon points="20,20 1,20 1,21 20,21 20,20"/>
	<polygon points="20,24 1,24 1,25 20,25 20,24"/>
	<polygon points="49,12 20,12 20,13 49,13 49,12"/>
	<polygon points="49,4 20,4 20,5 49,5 49,4"/>
	<polygon points="49,8 20,8 20,9 49,9 49,8"/>
	<path d="M24,18v13h25V18H24z M26,27l5-5l5,5H26z M42,27l-5-5h10L42,27z"/>
	<path d="M24,35v13h25V35H24z M26,44l5-5l5,5H26z M42,44l-5-5h10L42,44z"/>
`;

icons.panel_save = `
	<rect x="6" y="15" width="1" height="5"/>
	<rect x="20" y="4" width="4" height="2"/>
	<rect x="6" width="2" height="11"/>
	<rect x="16" width="2" height="11"/>
	<rect x="6" y="10" width="12" height="2"/>
	<rect x="9" y="15" width="9" height="5"/>
	<rect x="6" y="15" width="11" height="1"/>
	<rect x="6" y="19" width="11" height="1"/>
	<polygon points="5,22 2,19 2,2 24,2 24,0 0,0 0,19.8 4.2,24 24,24 24,22"/>
	<polygon points="24,0 22,0 22,2 22,22 22,24 24,24"/>
`;

// --------------------------------------------------------------
// Commands
// --------------------------------------------------------------

icons.command_save = `
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;

icons.command_export = `
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;

icons.command_newTab = `
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;

icons.command_info = `
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;

icons.command_help = `
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;

icons.command_autoFit = `
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;

// --------------------------------------------------------------
// Pages
// --------------------------------------------------------------

icons.page_about = `
	<path d="M25,2.5c10.3,0,16,0,19.3,3.2c3.2,3.2,3.2,8.9,3.2,19.3s0,16-3.2,19.3c-3.2,3.2-8.9,3.2-19.3,3.2c-10.3,0-16,0-19.3-3.2C2.5,41,2.5,35.3,2.5,25s0-16,3.2-19.3C9,2.5,14.7,2.5,25,2.5 M25,0C14,0,8,0,4,4C0,8,0,14,0,25s0,17,4,21c4,4,10.1,4,21,4s17,0,21-4c4-4,4-10.1,4-21s0-17-4-21C42,0,36,0,25,0L25,0z"/>
	<path d="M22.9,36.7V23h-3.3v-3.7h7.4v17.5h3.3v3.7H19.6v-3.7H22.9z M22.3,12c0-0.7,0.2-1.3,0.7-1.8c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7C22.6,13.3,22.3,12.7,22.3,12z"/>
`;

icons.page_help = `
	<path d="M25,2.5c10.3,0,16,0,19.3,3.2c3.2,3.2,3.2,8.9,3.2,19.3c0,10.3,0,16-3.2,19.3c-3.2,3.2-8.9,3.2-19.3,3.2c-10.3,0-16,0-19.3-3.2C2.5,41,2.5,35.3,2.5,25c0-10.3,0-16,3.2-19.3C9,2.5,14.7,2.5,25,2.5 M25,0C14,0,8,0,4,4C0,8,0,14,0,25s0,17,4,21c4,4,10.1,4,21,4s17,0,21-4c4-4,4-10.1,4-21s0-17-4-21C42,0,36,0,25,0L25,0z"/>
	<path d="M25.2,32.3h-2.3l-0.5-9.7c0.7,0.2,1.4,0.3,2.1,0.3c1.9,0,3.3-0.5,4.1-1.4s1.3-2.1,1.3-3.4c0-1.5-0.5-2.8-1.4-3.6c-0.9-0.9-2.1-1.3-3.5-1.3c-1.7,0-3,0.5-3.8,1.5S20,16.7,20,18.2c0,0.3,0,0.7,0,1.1h-4.1c0-0.4,0-0.7,0-1c0-3,0.9-5.2,2.7-6.6s3.9-2.1,6.3-2.1c2.9,0,5.2,0.8,6.9,2.4c1.6,1.6,2.4,3.7,2.4,6.2c0,2.5-0.8,4.5-2.3,6c-1.5,1.5-3.3,2.2-5.4,2.2c-0.2,0-0.4,0-0.7,0L25.2,32.3z M21.3,40.5v-5.4h5.4v5.4H21.3z"/>
`;

icons.page_exportFont = `
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;

icons.page_exportSVG = `
	<polygon points="40.1,0 30.1,9.9 37.6,9.9 37.6,18.8 42.5,18.8 42.5,9.9 50,9.9"/>
	<path d="M5.3,22.7V50h29.8V12.7H15.2L5.3,22.7zM12.7,36.5c-0.5,0.5-1.2,0.8-2,0.8c-0.8,0-1.6-0.3-2.2-0.9v0.7H7.4v-3.3h1.1v0.8c0.5,1,1.2,1.5,2.1,1.5c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.5-0.6,0.5-1.1c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.2-0.7-0.4-1.4-0.6C9.6,33,9,32.8,8.6,32.6c-0.4-0.2-0.7-0.5-0.9-0.8c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.8,0.3-1.4,0.8-1.8C8.6,28.2,9.2,28,10,28c0.7,0,1.4,0.2,2,0.7v-0.6h1.1v2.7H12v-0.6c-0.5-0.7-1.1-1-1.9-1c-0.5,0-0.9,0.1-1.1,0.3c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.2,0.1,0.5,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.6,0.2,1.2,0.4c0.8,0.2,1.4,0.4,1.7,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.3,0.4,0.4,0.9,0.4,1.4C13.5,35.4,13.3,36,12.7,36.5zM27.9,28c1.3,0,2.3,0.4,3.2,1.1v-1h1.1v3H31c-0.2-0.5-0.6-0.9-1.1-1.3c-0.6-0.4-1.2-0.6-1.9-0.6c-1,0-1.8,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,1.1,0.3,1.9,1,2.6c0.6,0.6,1.4,0.9,2.3,0.9c0.7,0,1.4-0.2,1.9-0.6c0.6-0.4,0.9-0.9,1-1.6h-1.6v-1.1h3.3c0,0.1,0,0.2,0,0.3c0,1.3-0.4,2.3-1.2,3c-0.8,0.8-1.9,1.1-3.3,1.1c-1.6,0-2.8-0.5-3.6-1.4c-0.8-0.9-1.2-2-1.2-3.3c0-1.3,0.4-2.4,1.2-3.3C25.3,28.4,26.5,28,27.9,28zM18.7,35.3l2.2-6h-1.1v-1.1h3.5v1.1h-1.1l-3,8h-1.2l-3-8h-1.1v-1.1h3.6v1.1h-1L18.7,35.3z"/>
`;

icons.page_importAndExport = `
	<polygon points="18 10 10.47 0 3 10 8 10 8 18 13 18 13 10 18 10"/>
	<polygon points="33 40 40.53 50 48 40 43 40 43 32 38 32 38 40 33 40"/>
	<path d="M28,13h-12v24h19V20l-7-7Zm4,19h-11v-2h11v2Zm0-4h-11v-2h11v2Zm0-4h-14v-2h14v2Z"/>
`;

icons.page_settings = `
	<path d="M47.81,32.49c.73-2.22,1.14-4.58,1.19-7.04l-6.53-2.69c-.08-.65-.2-1.29-.35-1.92l5.2-4.74c-.9-2.25-2.11-4.34-3.61-6.2l-6.75,2.15c-.45-.42-.93-.82-1.43-1.19l.94-7.01c-2.09-1.13-4.36-1.96-6.76-2.44l-3.79,5.99c-.3-.02-.6-.05-.91-.05s-.61,.03-.91,.05l-3.79-5.99c-2.4,.48-4.68,1.31-6.76,2.44l.94,7.01c-.5,.37-.97,.77-1.43,1.19l-6.75-2.15c-1.5,1.86-2.72,3.94-3.61,6.2l5.2,4.74c-.15,.63-.27,1.27-.35,1.92l-6.53,2.69c.05,2.45,.46,4.82,1.19,7.04l7.03,.29c.31,.62,.64,1.21,1.01,1.79l-3.27,6.24c1.57,1.79,3.4,3.33,5.43,4.59l5.55-4.28c.65,.28,1.31,.53,2,.73l1.5,6.86c1.16,.17,2.34,.29,3.55,.29s2.39-.12,3.55-.29l1.5-6.86c.68-.2,1.35-.45,2-.73l5.55,4.28c2.03-1.26,3.86-2.8,5.43-4.59l-3.27-6.24c.37-.57,.71-1.17,1.01-1.79l7.03-.29Zm-22.81,2.57c-5.52,0-10-4.48-10-10s4.48-10,10-10,10,4.48,10,10-4.48,10-10,10Z"/>
`;

icons.page_globalActions = `
	<path d="M46.1,37.1l-7.5-7.5C41.3,26.8,43,23,43,18.8c0-3.6-1.3-7-3.4-9.6c0,1.2-0.3,2.4-0.7,3.8c-1.2,3.5-3.6,7.2-6.8,10.4c-4.6,4.6-10,7.5-14.2,7.6c2.6,2.1,6,3.4,9.6,3.4c4,0,7.6-1.5,10.4-4l3.3,3.3c-8,7.3-20.4,7.1-28.1-0.6c-7.7-7.7-7.9-20.1-0.6-28.1L16,8.4c-2.5,2.8-4,6.4-4,10.4c0,3.6,1.3,6.9,3.3,9.6c3.3,1.7,9.9-1,15.3-6.5c3-3,5.3-6.4,6.3-9.6c0.8-2.3,0.8-4.3,0.2-5.6c-2.6-2.1-6-3.4-9.6-3.4c-4.2,0-8,1.7-10.8,4.4L9.2,0.2C9-0.1,8.7-0.1,8.5,0.2s-0.2,0.5,0,0.7l1.8,1.8c-8.5,9.2-8.3,23.6,0.6,32.5c3.7,3.7,8.3,5.9,13.1,6.6V45c-5.1,0.1-9,0.7-9,1.5v2c0,0.8,4.7,1.5,10.5,1.5S36,49.3,36,48.5v-2c0-0.8-3.9-1.4-9-1.5v-3c0.1,0,0.3,0,0.4,0c5.7,0,11.4-2.1,15.9-6.3l2,2c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2C46.3,37.6,46.3,37.3,46.1,37.1z"/>
`;

icons.page_livePreview = `
	<rect x="42" y="9" width="2" height="32"/>
	<rect x="36" y="7" width="6" height="2"/>
	<rect x="44" y="7" width="6" height="2"/>
	<rect x="36" y="41" width="6" height="2"/>
	<rect x="44" y="41" width="6" height="2"/>
	<path d="M0,31.82v-3.52H2.98V14.52H0v-3.52H11.44v3.52h-3.04v13.79h6.15v-6.44h4.06v9.95H0Z"/>
	<path d="M29.41,35.02v3.34h-9.97v-3.34h2.44v-14.35h-2.04v-3.34h6.66v1.82c1.29-1.36,2.72-2.04,4.31-2.04,1.92,0,3.43,.76,4.53,2.28s1.65,3.3,1.65,5.32c0,2.15-.57,3.92-1.71,5.33-1.14,1.41-2.65,2.11-4.55,2.11-1.55,0-2.96-.6-4.24-1.81v4.68h2.9Zm2.84-10.4c0-1.27-.26-2.22-.79-2.84s-1.21-.94-2.07-.94-1.57,.32-2.12,.97c-.54,.64-.82,1.6-.82,2.88,0,1.15,.27,2.07,.81,2.77,.54,.7,1.26,1.05,2.16,1.05,.83,0,1.51-.31,2.04-.94s.79-1.61,.79-2.93Z"/>
`;

icons.page_kerning = `
	<path d="M34.1,38.7l-9-23.8h-3.3v-3.4h10.6v3.4h-3.1L36.1,33l6.7-18.1h-3.1v-3.4H50v3.4h-3.3l-8.9,23.8H34.1z"/>
	<path d="M25.3,35.1l-7.4-20.2h3.3v-0.3v-3v0H7.4v0v3v0.3h3.1L3.3,35.1H0v3.4h10.6v-3.4H7.3L9.4,29h9.7l2,6.1h-3.3v3.4h10.5v-3.4H25.3z M10.4,25.8l3.6-11h0.6l3.5,11H10.4z"/>
	<rect y="44" width="27" height="2"/>
	<rect x="26.3" y="40" width="2" height="10"/>
	<rect x="23" y="4" width="27" height="2"/>
	<rect x="21.8" width="2" height="10"/>
`;

icons.page_ligatures = `
	<path id="ligatures" d="M39.8,39.3V17.1h-5h-0.4h-7h0c0-0.8,0-1.8,0-3.2c0-1.2,0.2-2.9,1.3-3.7c1-0.8,2.4-0.7,3.1-0.6c0,0,1.6,0.4,1.8,1.9c0.2,1.5,1.6,2.5,3,2.3c1.5-0.2,2.5-1.6,2.3-3c-0.5-4.1-4-6.1-6.3-6.5c-2.9-0.5-5.5,0.2-7.5,1.8c-0.9,0.8-1.9,2-2.5,3.8c-1.2-1.7-3.1-2.6-5.7-2.6c-1.9,0-3.5,0.6-4.9,1.9c-1.4,1.2-2.1,3.5-2.1,6.8v1.2H6v4.7h3.9v17.6H6V44h12.3H23h7.3h5H44v-4.7H39.8z M15.2,15.9c0-1.8,0.1-3,0.4-3.5c0.3-0.5,0.8-0.8,1.6-0.8c1.2,0,1.8,0.9,2,2.6l2.7-0.4c0,0,0,0.1,0,0.1c0,1.2,0,2.3,0,3.2h-6.8V15.9z M15.2,39.3V21.8h7v17.6H15.2z M30.4,39.3h-2.9V21.8h7v0h0.1v17.5H30.4z"/>
`;

icons.page_components = `
	<path d="M0,49.9v-3.3h3.4V25.9H0v-3.3h7v11c1.9-2.1,4.2-3.2,6.9-3.2c2.6,0,4.8,0.9,6.6,2.7c1.8,1.8,2.7,4.2,2.7,7.1c0,2.8-0.9,5.2-2.6,7.1c-1.7,1.9-4,2.9-6.7,2.9c-1.5,0-2.9-0.3-4.2-1C8.5,48.6,7.6,47.8,7,47v2.8H0z M7.1,40.4c0,2,0.6,3.5,1.8,4.7c1.2,1.2,2.6,1.7,4.2,1.7c1.7,0,3.1-0.6,4.3-1.8c1.2-1.2,1.8-2.9,1.8-4.9c0-2-0.6-3.6-1.8-4.7c-1.2-1.1-2.6-1.7-4.2-1.7c-1.6,0-3,0.6-4.2,1.7C7.8,36.6,7.1,38.3,7.1,40.4z"/>
	<path d="M18.9,6.8c0,2,0.6,3.5,1.8,4.7c1.2,1.2,2.6,1.7,4.2,1.7c1.7,0,3.1-0.6,4.3-1.8s1.8-2.9,1.8-4.9c0-2-0.6-3.6-1.8-4.7c-1.2-1.1-2.6-1.7-4.2-1.7c-1.6,0-3,0.6-4.2,1.7S18.9,4.6,18.9,6.8z"/>
	<path d="M50,46.6v3.3h-7.1v-2.8c-1.9,2.1-4.1,3.1-6.8,3.1c-2.5,0-4.6-0.8-6.5-2.5s-2.8-4.1-2.8-7.2c0-3.1,1-5.6,2.9-7.4c1.9-1.8,4.1-2.7,6.5-2.7c2.6,0,4.8,1,6.7,3.1v-7.5h-3.7v-3.3h7.4v24H50z M30.7,40.4c0,2.1,0.6,3.7,1.8,4.8c1.2,1.1,2.6,1.7,4.3,1.7c1.6,0,3-0.6,4.3-1.8c1.2-1.2,1.9-2.8,1.9-4.9c0-2.1-0.6-3.7-1.9-4.8c-1.3-1.1-2.7-1.6-4.3-1.6c-1.7,0-3.1,0.6-4.3,1.9C31.3,37,30.7,38.5,30.7,40.4z"/>
	<rect x="16.4" y="26.6" transform="matrix(0.8321 0.5547 -0.5547 0.8321 18.1105 -5.0629)" width="2" height="1.5"/>
	<rect x="18.1" y="23.6" transform="matrix(0.8321 0.5547 -0.5547 0.8321 17.0248 -6.3814)" width="2" height="2.6"/>
	<rect x="20" y="20.7" transform="matrix(0.8321 0.5547 -0.5547 0.8321 15.7303 -7.9538)" width="2" height="2.6"/>
	<rect x="21.9" y="17.8" transform="matrix(0.8321 0.5547 -0.5547 0.8321 14.4354 -9.5264)" width="2" height="2.6"/>
	<polygon points="25,17.8 23.3,16.7 25,14.2 26.7,16.7"/>
	<rect x="29.6" y="23.9" transform="matrix(0.5547 0.8321 -0.8321 0.5547 34.5215 -14.6524)" width="2.6" height="2"/>
	<rect x="27.7" y="21" transform="matrix(0.5547 0.8321 -0.8321 0.5547 31.2197 -14.3328)" width="2.6" height="2"/>
	<rect x="25.7" y="18.1" transform="matrix(0.5547 0.8321 -0.8321 0.5547 27.9188 -14.0128)" width="2.6" height="2"/>
	<rect x="31.8" y="26.4" transform="matrix(0.5548 0.832 -0.832 0.5548 37.2821 -14.9216)" width="1.5" height="2"/>
`;

icons.page_overview = `
	<path d="M15.4,19.4v2.7h-5.3v-1.9c-1.5,1.4-3.1,2.1-4.9,2.1c-1.4,0-2.6-0.5-3.6-1.4c-1-0.9-1.5-2.1-1.5-3.5c0-1.4,0.5-2.6,1.6-3.6c1.1-0.9,2.4-1.4,4-1.4c1.4,0,2.8,0.4,4.2,1.3v-1.5c0-0.8-0.1-1.4-0.2-1.8c-0.1-0.4-0.5-0.8-1-1.1C8,9,7.3,8.8,6.4,8.8c-1.5,0-2.6,0.6-3.3,1.8L0.2,9.9c1.3-2.4,3.5-3.6,6.6-3.6c1.2,0,2.2,0.2,3,0.5c0.8,0.3,1.5,0.7,1.9,1.2c0.4,0.5,0.7,1,0.8,1.6c0.1,0.6,0.2,1.5,0.2,2.7v7.1H15.4z M9.8,16.4c-1.3-1-2.6-1.5-4-1.5c-0.8,0-1.5,0.2-2.1,0.7c-0.6,0.5-0.8,1.1-0.8,1.9c0,0.7,0.2,1.3,0.7,1.8s1.2,0.7,2,0.7c1.5,0,2.8-0.6,4.1-1.8V16.4z"/>
	<path d="M15.9,22.1v-2.7h2.7V2.7h-2.7V0h5.7v8.9c1.5-1.7,3.4-2.6,5.6-2.6c2.1,0,3.9,0.7,5.3,2.2c1.4,1.5,2.2,3.4,2.2,5.8c0,2.3-0.7,4.2-2.1,5.8c-1.4,1.6-3.2,2.3-5.4,2.3c-1.2,0-2.3-0.3-3.4-0.8s-1.7-1.1-2.2-1.8v2.3H15.9z M21.6,14.4c0,1.6,0.5,2.9,1.5,3.8s2.1,1.4,3.4,1.4c1.3,0,2.5-0.5,3.5-1.5c1-1,1.5-2.3,1.5-4c0-1.6-0.5-2.9-1.5-3.8C29,9.5,27.9,9,26.6,9c-1.3,0-2.4,0.5-3.4,1.4C22.1,11.3,21.6,12.7,21.6,14.4z"/>
	<path d="M49.5,6.7v5.8h-2.7c-0.1-1.1-0.6-2-1.4-2.6s-1.7-0.9-2.7-0.9c-1.4,0-2.5,0.5-3.3,1.4c-0.8,1-1.3,2.2-1.3,3.8c0,1.5,0.4,2.7,1.2,3.8s2,1.7,3.5,1.7c2.1,0,3.7-1,4.6-3l2.5,1.2c-1.4,3.1-3.8,4.6-7.2,4.6c-2.4,0-4.4-0.8-5.7-2.5c-1.4-1.7-2.1-3.6-2.1-5.7c0-2.3,0.8-4.2,2.3-5.7c1.5-1.5,3.3-2.3,5.3-2.3c1.7,0,3.1,0.5,4.3,1.5V6.7H49.5z"/>
	<path d="M8.8,36.6l-3.1,3.6h2v2.8H0v-2.8h2.3l4.8-5.4l-4.6-4.9H0.4V27h7.4v2.8h-2l2.9,3.1l2.8-3.1H9.9V27h7.5v2.8h-2.6l-4.3,4.9l5,5.4h2v2.8H9.9v-2.8h2.2L8.8,36.6z"/>
	<path d="M26,42.6l-5.2-12.8h-2.6V27H26v2.8h-1.9l3.4,8.8l3.4-8.8h-2.1V27h7.7v2.8h-2.4L26.3,50H21v-2.7h3.1L26,42.6z"/>
	<path d="M36.3,42.9v-2.6l9.9-10.7h-6.5v3h-2.7V27H50v2.8L40,40.3h7.3V37H50v5.8H36.3z"/>
`;

icons.page_glyphEdit = `
	<polygon points="43 44 43 43 45 43 45 42 47 42 47 36 47 35 46 35 46 34 45 34 45 33 44 33 44 32 43 32 43 31 42 31 42 30 41 30 41 29 40 29 40 28 39 28 39 27 38 27 38 26 37 26 37 25 36 25 36 24 35 24 35 26 36 26 36 28 37 28 37 30 38 30 38 32 39 32 39 34 40 34 41 34 41 35 42 35 42 37 41 37 41 38 40 38 39 38 39 37 38 37 38 35 39 35 39 34 38 34 38 32 37 32 37 30 36 30 36 28 35 28 35 40 35 41 36 41 36 42 37 42 37 43 38 43 38 44 39 44 39 45 40 45 41 45 41 44 43 44"/>
	<polygon points="48 47 48 46 49 46 49 44 48 44 48 42 47 42 47 43 45 43 45 44 43 44 43 45 41 45 41 46 41 47 42 47 42 49 44 49 44 48 46 48 46 47 48 47"/>
	<path d="M20.08,21.65v-5.38h14.92c0,3.86-.7,6.92-2.09,9.18s-3.43,4.04-6.09,5.33-5.65,1.95-8.96,1.95c-5.75,0-10.17-1.54-13.24-4.62S0,21.11,0,16.37C0,13.07,.76,10.16,2.29,7.63S5.87,3.2,8.45,1.92,13.83,0,16.85,0c4.27,0,7.6,1.04,9.98,3.11V.5h5.4V11.81h-5.4c-.56-1.91-1.69-3.41-3.36-4.51s-3.48-1.65-5.4-1.65c-2.53,0-4.69,.9-6.48,2.69s-2.68,4.28-2.68,7.45c0,3.63,.91,6.4,2.72,8.3s4.03,2.85,6.64,2.85c1.92,0,3.52-.47,4.78-1.4s2.14-2.23,2.63-3.89h-5.61Z"/>
`;

// --------------------------------------------------------------
// Miscellaneous
// --------------------------------------------------------------

icons.back = `<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>`;

icons.more = `<polygon points="0,0 0,10 5,5"/>`;

icons.selected = `<polygon points="6,6 6,14 14,10"/>`;

icons.notSelected = `<rect x="5" y="9.75" width="10" height="0.5"/>`;

icons.keyboard = `
	<rect x="12" y="29" width="26" height="7"/>
	<rect y="29" width="10" height="7"/>
	<rect y="21" width="8" height="6"/>
	<rect x="10" y="21" width="6" height="6"/>
	<rect x="18" y="21" width="6" height="6"/>
	<rect x="26" y="21" width="6" height="6"/>
	<rect x="34" y="21" width="6" height="6"/>
	<rect x="42" y="21" width="8" height="6"/>
	<rect x="6" y="13" width="6" height="6"/>
	<rect x="14" y="13" width="6" height="6"/>
	<rect x="22" y="13" width="6" height="6"/>
	<rect x="38" y="13" width="6" height="6"/>
	<rect x="30" y="13" width="6" height="6"/>
	<rect x="46" y="13" width="4" height="6"/>
	<rect y="13" width="4" height="6"/>
	<rect x="40" y="29" width="10" height="7"/>
`;
