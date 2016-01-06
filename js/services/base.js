define(function (require) {
	var $http = require('js/http');

	var BaseService = function () {

		this.buscarTodos = function (url, params) {
			var queryParams = '?';
			for (var nameParam in params) {
 				if (params.hasOwnProperty(nameParam)) {
    				queryParams = queryParams + nameParam + '=' + params[nameParam] + '&'
  				}
			}
			queryParams = queryParams.slice(0, -1);
			return $http.get(url + queryParams);
		};
	};

	return BaseService;
});
