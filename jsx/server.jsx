define(function (require) {

	var Tooltip = require('js/components/tooltip');

	var Server = React.createClass({
		getTypeImage: function (server) {
			if(server.version && server.version != this.props.actualVersion)
				return 'warning';

			return server.status.toLowerCase();
		},
		render: function () {
			var server = this.props.value;
			return <div className='col-sm-3 col-xs-6 list-servers'>
				<div className='thumbnail list-group-item server'>
					<Tooltip text={ server.ip }>{ server.label }</Tooltip>
					<img className='server-status' alt={ server.status } src={'../images/server-' + this.getTypeImage(server) + '.png'}/>
				</div>
			</div>;
		}
	});

	return Server;
});
