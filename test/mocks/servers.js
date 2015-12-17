define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('servers', [{
		label: 'APACHE',
		ip: '10.0.0.60',
		status: 'SUCCESS',
		version: 'b70e2a0d855b4dc7b1ea34a8a9d10305'
	},{
		label: 'CORRETORA 71',
		ip: '10.90.0.71',
		status: 'SUCCESS',
		version: '9a2df29a402aec855313eea7ede842f0'
	},{
		label: 'CORRETORA 79',
		ip: '10.90.0.79',
		status: 'ERROR'
	},{
		label: 'BANCO 66',
		ip: '10.90.0.66',
		status: 'ERROR'
	},{
		label: 'BANCO 80',
		ip: '10.90.0.80',
		status: 'SUCCESS',
		version: 'b70e2a0d855b4dc7b1ea34a8a9d10305'
	}]);
});
