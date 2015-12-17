define(function (require) {

	var Widget = require('js/components/widget');
	var Tooltip = require('js/components/tooltip');
	var BaseService = require('js/services/base');

	var WidgetTimers = React.createClass({
		getInitialState: function () {
			return { timers: null };
		},

		componentWillMount: function () {
			new BaseService().buscarTodos('/timers').done(function(data){
				this.setTimersSorting(data);
			}.bind(this));
		},

		setTimersSorting: function (timers) {
			var timersSorted = timers.filter(function (timer) {
				return timer.status == 'ERROR'; 
			}).concat(timers.filter(function (timer) {
				return timer.status == 'RUNNING';
			}).concat(timers.filter(function (timer) {
				return timer.status == 'SUCCESS';
			})));

			this.setState({
				timers: timersSorted
			});
		},

		mount: function (timer, i) {
			return <li className='list-group-item' key={i}>
				<span className={ 'badge ' + timer.status.toLowerCase() }>{ timer.repeatStatus }</span>
				<Tooltip text={ timer.url }>{ timer.name }</Tooltip>
			</li>;
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <Widget name='Timers' gridSize='4'>
				<ul className='list-group list-timers'>
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
