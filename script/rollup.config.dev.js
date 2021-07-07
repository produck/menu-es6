import path from'path';
import { defineConfig } from'rollup';
import alias from'@rollup/plugin-alias';
import postcss from'rollup-plugin-postcss';
import { eslint } from'rollup-plugin-eslint';
import { terser } from'rollup-plugin-terser';
import livereload from'rollup-plugin-livereload';
import serve from'rollup-plugin-serve';
import html from'@rollup/plugin-html';

const DIST_DIR = path.join(__dirname, '../.dev');

export default defineConfig({
	input: path.join(__dirname, '../example/debug.js'),
	output: {
		dir: DIST_DIR,
		sourcemap: 'inline',
		format: 'umd',
		name: 'example'
	},
	plugins: [
		alias({
			entries: [
				{ find: 'dom', replacement: path.join(__dirname, '../src/dom.js') },
				{ find: 'lang', replacement: path.join(__dirname, '../src/lang.js') },
				{ find: '@', replacement: path.join(__dirname, '../src') }
			]
		}),
		terser(),
		eslint(),
		serve({ host: '0.0.0.0', port: 3000, contentBase: DIST_DIR }),
		livereload({ watch: DIST_DIR }),
		postcss({
			extensions: ['.css']
		}),
		html({
			attributes: {}
		}),
	]
});