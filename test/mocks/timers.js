define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('timers', [{
		name: 'Importador Débito Cielo',
		status: 'SUCCESS',
		url: 'http://socc.confidencecambio.com/timers/importador_cielo'
	},
	{
		name: 'Prorrogador de Ordem de Pagamento',
		status: 'ERROR',
		url: 'http://socc.confidencecambio.com/timers/prorrogador_op'
	},
	{
		name: 'Cancelador de Propostas Expiradas',
		status: 'RUNNING',
		url: 'http://socc.confidencecambio.com/timers/cancelador_propostas'
	}]);
});
