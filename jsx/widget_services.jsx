define(function (require) {

	var Widget = require('js/components/widget');
	var Tooltip = require('js/components/tooltip');
	var BaseService = require('js/services/base');

	var WidgetServices = React.createClass({
		getInitialState: function () {
			return { services: null };
		},

		componentWillMount: function () {
			new BaseService().buscarTodos('/services', {
				run_id: 'last'
			}).done(function(data){
				this.setState({
					services: data
				});
			}.bind(this));
		},

		getType: function (service) {
			return {
				OFF: 'danger',
				ON: 'success'
			}[service.status];
		},

		mount: function (service) {
			return <div className='col-sm-6 col-xs-12 list-services' key={_.uniqueId('services_')}>
				<div className='thumbnail list-group-item'>
					<span className={ 'label label-' + this.getType(service) }>{ service.status }</span>
					<Tooltip text={ service.server }>
						<span className='name-service'>{ service.name }</span>
					</Tooltip>
				</div>
			</div>;
		},

		render: function () {
			if(!this.state.services)
				return <div>Loading!</div>;

			return <Widget name='Services' disableLazyButton={true} gridSize='8'>
				<div className='row'>
					{
						this.state.services.map(function (service) {
							return this.mount(service);
						}.bind(this))
					}
				</div>
			</Widget>;
		}
	});

	return WidgetServices;
});