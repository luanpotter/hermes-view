define(function (require) {

	var Widget = require('js/components/widget');
	var Tooltip = require('js/components/tooltip');
	var BaseService = require('js/services/base');

	var WidgetTimers = React.createClass({
		getInitialState: function () {
			return { timers: null };
		},

		componentWillMount: function () {
			this.load();
			setInterval(function () {
				this.load();
			}.bind(this), 5000);
		},

		load: function () {
			new BaseService().buscarTodos('/timers', {
				run_id: 'last'
			}).done(function(data){
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
			var repeatStatus = timer.repeatStatus > 99 ? '+99' : timer.repeatStatus;

			return <li className='list-group-item' key={i}>
				<span className={ 'badge ' + timer.status.toLowerCase() }>{ repeatStatus }</span>
				<Tooltip text={ timer.url } customClass='hint-timer'><div className='timer-name'>{ timer.name }</div></Tooltip>
			</li>;
		},

		render: function () {
			if(!this.state.timers)
				return <div>Loading!</div>;

			return <Widget name='Timers' gridSize='4'>
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
