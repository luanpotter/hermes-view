define(function (require) {
	var $http = require('js/http');

	var BaseService = function () {

		this.buscarTodos = function (url) {
			return $http.get(url);
		};
	};

	return BaseService;
});
