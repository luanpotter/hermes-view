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

		mount: function (timer, i) {
			return <li key={i}>
				<label>{ timer.name }</label>
				<div className={ 'icon timer-' + timer.status.toLowerCase() }/>
			</li>;
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <div>
				<h1>Timers</h1>
				<ul>
					{
						this.state.timers.map(function (timer, i) {
							return this.mount(timer, i);
						}.bind(this))
					}
				</ul>
			</div>;
		}
	});

	return WidgetTimers;
});
