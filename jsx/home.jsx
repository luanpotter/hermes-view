define(function (require) {

	var WidgetTimers = require('js/components/widget_timers');
	var WidgetServers = require('js/components/widget_servers');
	var WidgetServices = require('js/components/widget_services');

	var Home = React.createClass({

		render: function () {
			return <div className='container'>
				<div className='row'>
					<WidgetTimers />
					<WidgetServers />
					<WidgetServices />
				</div>
			</div>;
		}
	});

	return Home;
});
