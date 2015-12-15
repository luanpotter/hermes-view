define(function (require) {
	var $http = require('js/http');

	var TimersService = function () {
		var urlBase = '/timers';

		this.buscar = function () {
			return $http.get(urlBase);
		};
	};

	return TimersService;
});
