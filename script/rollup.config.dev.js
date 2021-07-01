const path = require('path');
const { defineConfig } = require('rollup');
const alias = require('@rollup/plugin-alias');
const postcss = require('rollup-plugin-postcss');
const { eslint } = require('rollup-plugin-eslint');
const { terser } = require('rollup-plugin-terser');
const livereload = require('rollup-plugin-livereload');
const serve = require('rollup-plugin-serve');
const html = require('@rollup/plugin-html');

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
		html(),
	]
});