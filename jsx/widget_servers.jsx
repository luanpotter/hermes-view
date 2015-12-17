define(function (require) {

	var Widget = require('js/components/widget');
	var Server = require('js/components/server');
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

		mount: function (server) {
			return <Server value={server} key={_.uniqueId('server_')}/>;
		},

		render: function () {
			if(!this.state.servers)
				return <div>Loading!</div>;

			return <Widget name='Servers' disableLazyButton={true} gridSize='8'>
				<div className='row'>
					{
						this.state.servers.map(function (server) {
							return this.mount(server);
						}.bind(this))
					}
				</div>
			</Widget>;
		}
	});

	return WidgetServers;
});