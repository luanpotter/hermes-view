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

		mount: function (timer) {
			return <label>{ timer.name }</label>;
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <ul>
				{
					this.state.timers.map(function (timer, i) {
						return <li key={i}>{ this.mount(timer) }</li>;
					}.bind(this))
				}
			</ul>;
		}
	});

	return WidgetTimers;
});
