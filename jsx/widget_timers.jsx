define(function (require) {

	var TimersService = require('js/services/timers');

	var WidgetTimers = React.createClass({
		getInitialState: function () {
			return {timers: null}
		},

		componentWillMount: function () {
			new TimersService().buscar().done(function(data){
				this.setState({
					timers: data
				});
			}.bind(this));
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <div>
				{
					this.state.timers.map(function (timer, i) {
						return <label key={i}>{ timer.name }</label>;
					})
				}
			</div>;
		}
	});

	return WidgetTimers;
});
