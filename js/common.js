requirejs.config({
	baseUrl: './',
	paths: {
		mocker: '../test/mocker',
		fixtures: '../test/fixtures',
		mocks: '../test/mocks',
		react: 'react-with-addons'
	},
	map: {
		'*': {
			'React': 'react',
			'jQuery': 'jquery'
		}
	}
});

define(['react', 'underscore', 'jquery'], function (React, _, $) {
	var common = {};

	common.React = React;
	common._ = _;
	common.$ = $;
	
	return common;
});