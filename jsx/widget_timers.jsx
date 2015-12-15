define(function (require) {

	var Widget = require('js/components/widget');
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
			return <li className='list-group-item' key={i}>
				<span className={ 'badge ' + timer.status.toLowerCase() }>{ timer.repeatStatus }</span>
				{ timer.name }
			</li>;
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <Widget name='Timers'>
				<ul className='list-group'>
					{
						this.state.timers.map(function (timer, i) {
							return this.mount(timer, i);
						}.bind(this))
					}
				</ul>
			</Widget>;
		}
	});

	return WidgetTimers;
});
