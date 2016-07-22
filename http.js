define(function (require) {
	var config = require('js/config');
	var baseUrl = config.url ? config.url : window.location.origin;
	var verbs = ['get', 'post', 'put', 'delete'];
	var map = {};

	var errorCallback = function (jqXHR) {
		//tratar erro
	};

	var perform = {
		ajax: function (url, verb, data, dontLoad, deferred) {
			data = data ? JSON.stringify(data) : null;
			$.ajax({
				url: baseUrl + '/api' + url,
				type: verb.toUpperCase(),
				data: data,
				crossDomain: true,
				contentType: 'application/json',
				xhrFields: {
					withCredentials: config.withCredentials
				}
			}).fail(function (jqXHR) {
				errorCallback(jqXHR);
				deferred.reject(jqXHR);
			}).success(function(data, status, xhr) {
				deferred.resolve(data, status, xhr);
			}).done(function (data, status, xhr) {
				deferred.resolve(data, status, xhr);
			});
		} /* @if ENV == 'test'*/ ,
		mock: function (url, verb, data, dontLoad, deferred) {
			var mocks = require('mocker');
			var result = mocks[verb](url, data);

			if (result._statusCode && result._statusCode !== 200) {
				result.status = result._statusCode;
				errorCallback(result);
				deferred.reject(result);
			} else {
				deferred.resolve(result);
			}
		} /* @endif */
	};

	var createFunction = function (verb) {
		return function (url, data, dontLoad) {
			var deferred = $.Deferred();

			perform[config.mocks ? 'mock' : 'ajax'](url, verb, data, dontLoad, deferred);
			return deferred;
		};
	};

	verbs.forEach(function (verb) {
		map[verb] = createFunction(verb);
	});

	return map;

});
