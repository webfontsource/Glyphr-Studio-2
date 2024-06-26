import { describe } from 'vitest';
import opentype from '../../lib/opentype.js-1.3.4/opentype.module.js';
import { ioFont_importFont } from '../font_import.js';
// import sampleFile from './ObleggExtendedTestRegular.otf';

describe('OTF Font', () => {
	it('Import: Most Basic Test', async () => {
		const loadResult = opentype.loadSync('./src/formats_io/font_tests/MostBasicTestRegular.otf');
		const result = await ioFont_importFont(loadResult, true);
		expect(result).toBeTruthy();

		// Glyphs
		const capA = result.glyphs['glyph-0x41'];
		expect(capA).toBeTruthy();
		expect(capA.advanceWidth).toEqual(970);
		expect(capA.shapes.length).toEqual(1);
		expect(capA.shapes[0].pathPoints.length).toEqual(4);

		// Metadata
		expect(result.settings.font.style).toEqual('Regular');
	});

	it('Import: Oblegg Extended Test', async () => {
		const loadResult = opentype.loadSync('./src/formats_io/font_tests/ObleggExtendedTestRegular.otf');
		const result = await ioFont_importFont(loadResult, true);
		expect(result).toBeTruthy();

		// Glyphs
		const capA = result.glyphs['glyph-0x41'];
		expect(capA).toBeTruthy();
		expect(capA.advanceWidth).toEqual(1252);
		expect(capA.shapes.length).toEqual(2);
		expect(capA.shapes[0].pathPoints.length).toEqual(32);

		// Kerns
		const kernOne = result.kerning['kern-1'];
		expect(kernOne.leftGroup[0]).toEqual('0x2F');
		expect(kernOne.rightGroup[0]).toEqual('0x41');
		expect(kernOne.value).toEqual(219);

		// Metadata
		expect(result.settings.font.style).toEqual('ExtendedTestRegular');
	});
});
