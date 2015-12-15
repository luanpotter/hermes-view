define(function () {

	return function (endpoint, fixtures) {
		var paths = {};
		paths['get /' + endpoint] = fixtures;
		fixtures.forEach(function (fixture) {
			paths['get /' + endpoint + '/' + fixture.id] = fixture;
		});
		paths['post /' + endpoint] = {};
		return paths;
	};

});
