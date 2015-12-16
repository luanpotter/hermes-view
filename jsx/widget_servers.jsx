define(function (require) {

	var Widget = require('js/components/widget');
	var Tooltip = require('js/components/tooltip');
	var BaseService = require('js/services/base');

	var WidgetServers = React.createClass({
		getInitialState: function () {
			return { servers: null };
		},

		componentWillMount: function () {
			new BaseService().buscarTodos('/servers').done(function(data){
				this.setState({
					servers: data
				});
			}.bind(this));
		},

		mount: function (server, i) {
			return <div className='col-sm-6 col-md-3 list-servers' key={_.uniqueId('server_')}>
				<div className='thumbnail list-group-item server' key={i}>
					<Tooltip text={ server.ip }>{ server.label }</Tooltip>
				</div>
			</div>;
		},

		render: function () {
			if(!this.state.servers)
				return <div>Loading!</div>;

			return <Widget name='Servers' disableLazyButton={true}>
				<div className='row'>
					{
						this.state.servers.map(function (server, i) {
							return this.mount(server, i);
						}.bind(this))
					}
				</div>
			</Widget>;
		}
	});

	return WidgetServers;
});
