define(function (require) {

	var WidgetTimers = require('js/components/widget_timers');

	var Home = React.createClass({

		render: function () {
			return <div>
				<WidgetTimers />
			</div>;
		}
	});

	return Home;
});
