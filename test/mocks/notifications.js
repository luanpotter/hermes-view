define(function (require) {
	var fixtures = require('fixtures');
	return fixtures('notifications', [{
		id: 13,
		title: 'Erro na proposta de transferencia numero: 999.15.071.139',
		read: false
	},{
		id: 65,
		title: '[PRODUCAO] Problemas com o NFS',
		read: false
	},{
		id: 109,
		title: '[SOCC] Verificar JBoss Produção',
		read: true
	},{
		id: 118,
		title: '[SOCC] PTAX BOT FAIL',
		read: true
	}]);
});
