define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('servers', [{
		label: 'APACHE',
		ip: '10.0.0.60',
		status: 'OK'
	},{
		label: 'CORRETORA 71',
		ip: '10.90.0.71',
		status: 'NOT_FOUND'
	},{
		label: 'CORRETORA 79',
		ip: '10.90.0.79',
		status: 'APP_SERVER_DOWN'
	},{
		label: 'BANCO 66',
		ip: '10.90.0.66',
		status: 'EAR_NOT_FOUND'
	},{
		label: 'BANCO 80',
		ip: '10.90.0.80',
		status: 'OK'
	}]);
});
