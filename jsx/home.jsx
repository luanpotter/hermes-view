define(function (require) {

	var WidgetTimers = require('js/components/widget_timers');
	var WidgetServers = require('js/components/widget_servers');

	var Home = React.createClass({

		render: function () {
			return <div className='container'>
				<div className='row'>
					<WidgetTimers />
					<WidgetServers />
				</div>
			</div>;
		}
	});

	return Home;
});
