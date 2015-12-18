define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('services', [{
		name: 'Sinatra - HTML to PDF',
		status: 'ON',
		server: '10.90.0.71'
	},{
		name: 'NFS - mount digitalização',
		status: 'OFF',
		server: '10.90.0.79'
	},{
		name: 'New Relic',
		status: 'OFF',
		server: '10.0.0.60'
	}]);
});
