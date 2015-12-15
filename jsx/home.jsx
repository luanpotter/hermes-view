define(function (require) {

	var TimersService = require('js/services/timers');

	var Home = React.createClass({
		componentWillMount: function () {
			new TimersService().buscar().done(function(data){
				console.log(data);
			}.bind(this));
		},

		render: function () {
			return <div>
				<h1>Você esta na Home!</h1>
			</div>;
		}
	});

	return Home;
});
