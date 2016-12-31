'use strict';
const path = require('path');
const fs = require('fs');
const Builder = require('systemjs-builder');

const BUNDLES = [
	{ path: '\+contact', module: 'contact.module.js' }
];

const SYSTEM_BUILDER_CONFIG = {
	defaultJSExtensions: true,
	base: __dirname,
	packageConfigPaths: [
		path.join('node_modules', '*', 'package.json'),
		path.join('node_modules', '@angular', '*', 'package.json')
	],
	paths: {
		'@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
		'@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
		'@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
		'@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
		'@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
		'@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
		'@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
		'@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
		'app/*': 'dist/app/*',
        'aot/*': 'dist/aot/*',
		'*': 'node_modules/*'
	},
	packages: {
		rxjs: {
			defaultExtension: 'js'
		}
	}
};

const BUNDLER_OPTIONS = {
	format: 'cjs',
	minify: true,
	mangle: false,
	sourceMaps: true
};

const bundleMain = () => {
	const builder = new Builder(SYSTEM_BUILDER_CONFIG);
    const mainpath = 'app/main.js';
    const outpath = 'build/main.js';
	return builder
		.bundle(mainpath, outpath, BUNDLER_OPTIONS)
		.then(res => res.modules);
};

const bundleModule = (exclude, bundle) => {
    const builder = new Builder(SYSTEM_BUILDER_CONFIG);
    const all = 'dist/app';
    const bootstrap = `app/${bundle.path}/${bundle.module}`;
    const bootstrapDir = `dir/${bundle.path}`;
	const expression = `${bootstrap} - (${all}/**/*.js - ${bootstrapDir}/**/*.js) - ${exclude.join(' - ')}`;
	console.log('bundling', expression);
	return builder
		.buildStatic(expression, path.join('build', bundle.path, bundle.module), Object.assign({}, BUNDLER_OPTIONS, {format: 'umd'}))
		.then(res => {
			console.log(res.modules);
			console.log('Bundled', bundle.path);
			return res;
		});
};

bundleMain()
	.then(bundled => Promise.all(BUNDLES.map(bundle => bundleModule(bundled, bundle))))
	.then(() => {
		console.log('Build complete')
	})
	.catch(err => {
		console.log('Build error');
		console.log(err);
		process.exit(-1);
	});
