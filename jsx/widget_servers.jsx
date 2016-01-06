define(function (require) {

	var Widget = require('js/components/widget');
	var Server = require('js/components/server');
	var BaseService = require('js/services/base');

	var WidgetServers = React.createClass({
		getInitialState: function () {
			//TODO actual version dynamic
			return { servers: null, actualVersion: 'b70e2a0d855b4dc7b1ea34a8a9d10305'};
		},

		componentWillMount: function () {
			new BaseService().buscarTodos('/servers', {
				run_id: 'last'
			}).done(function(data){
				this.setState({
					servers: data
				});
			}.bind(this));
		},

		mount: function (server) {
			return <Server value={server} key={_.uniqueId('server_')} actualVersion={this.state.actualVersion}/>;
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