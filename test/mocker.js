define(function (require) {

	var mocks = {};
	_.defaults(mocks, require('mocks/timers'));

	var verbs = ['get', 'post', 'put', 'delete'];

	var api = {};

	verbs.forEach(function (verb) {
		var normalize = function (url) {
			var path = url.split('?')[0];
			if (path[path.length - 1] === '/') {
				path = path.substr(0, path.length - 1);
			}
			return path;
		};
		api[verb] = function (url, data) {
			var path = normalize(url);
			var mock = mocks[verb + ' ' + path];
//			if (!mock) {
//				return {
//					_statusCode: 404
//				};
//			}
			if (_.isFunction(mock)) {
				return mock(data);
			}
			return mock;
		};
	});

	return api;
});
