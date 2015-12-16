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
			return <div className='thumbnail list-group-item' key={i}>
				<Tooltip text={ server.ip }>{ server.label }</Tooltip>
			</div>;
		},

		render: function () {
			if(!this.state.servers)
				return <div>Loading!</div>;

			return <Widget name='Servers'>
				<div className='list-servers'>
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
