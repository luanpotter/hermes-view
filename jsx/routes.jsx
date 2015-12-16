define(function (require) {

	var Router = require('../../reactrouter');
	var RouteHandler = Router.RouteHandler;
	var DefaultRoute = Router.DefaultRoute;
	var Route = Router.Route;

	var Home = require('js/components/home');
	var Navbar = require('js/components/navbar');

	var App = React.createClass({
		render: function () {
			return <div>
				<Navbar/>
				<RouteHandler/>
			</div>;
		}
	});

	var rotas = (
		<Route path='/' handler={App}>
			<Route name='home' handler={Home}/>
			<DefaultRoute name='default' handler={Home}/>
		</Route>
	);

	return {
		start: function () {
			Router.run(rotas, function (Handler) {
				React.render(<Handler/>, document.body);
			});
		}
	};
});
