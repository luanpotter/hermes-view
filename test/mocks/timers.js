define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('timers', [{
		name: 'Importador Débito Cielo',
		status: 'SUCCESS',
		repeatStatus: 89,
		url: 'http://socc.confidencecambio.com/timers/importador_cielo'
	},
	{
		name: 'Prorrogador de Ordem de Pagamento',
		status: 'ERROR',
		repeatStatus: 2,
		url: 'http://socc.confidencecambio.com/timers/prorrogador_op'
	},
	{
		name: 'Cancelador de Propostas Expiradas',
		status: 'RUNNING',
		repeatStatus: 1,
		url: 'http://socc.confidencecambio.com/timers/cancelador_propostas'
	}]);
});
