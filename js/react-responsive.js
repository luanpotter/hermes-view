'use strict';

define(function (require) {

	var React = require('react');

	React.createResponsiveClass = function (desc) {
		var rawRender = desc.render;
		desc.render = function () {
			if (this.props['min-width'] && screen.width <= this.props['min-width']) {
				return nothing();
			}

			if (this.props['max-width'] && screen.width >= this.props['max-width']) {
				return nothing();
			}

			return rawRender.bind(this)();
		};

		return React.createClass(desc);
	};

	var nothing = function () {
		return React.createElement('div', null, null);
	};

	return React;
});