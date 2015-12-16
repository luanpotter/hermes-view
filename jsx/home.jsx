define(function (require) {

	var WidgetTimers = require('js/components/widget_timers');
	var WidgetServers = require('js/components/widget_servers');

	var Home = React.createClass({

		render: function () {
			return <div className='home'>
				<WidgetTimers />
				<WidgetServers />
			</div>;
		}
	});

	return Home;
});
