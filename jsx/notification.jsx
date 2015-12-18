define(function (require) {

	var BaseService = require('js/services/base');
	var Router = require('../../reactrouter');
	var Link = Router.Link;

	var Notification = React.createClass({
		getInitialState: function () {
			return { notifications: null };
		},
		componentWillMount: function () {
			this.loadNotifications();
		},
		loadNotifications: function () {
			new BaseService().buscarTodos('/notifications').done(function(data){
				this.setState({
					notifications: data
				});
			}.bind(this));
		},
		clearNotifications: function () {
			//TODO
		},
		mount: function () {
			var result = [];
			if (!this.state.notifications || this.state.notifications.length == 0) {
				result.push(<li><a>Nenhuma notificação</a></li>);
			} else {
				this.state.notifications.forEach(function (notification) {
					var read = notification.read ? <span /> : <span className='label label-danger'>NEW!</span>;
					result.push(<li>
							<Link to={ '/notifications/' + notification.id }>
								{ read }	
								<span className='notification-title'>{ notification.title }</span>
							</Link>
						</li> );
				}.bind(this));
				result.push(<li role='separator' className='divider'></li> );
				result.push(<li onClick={this.clearNotifications}><a href='#'>Marcar todas como lida</a></li> );
			}
			return result;
		},
		render: function () {
			return <li className='dropdown'> 
				<a href='#' className='dropdown-toggle container-navbar-icon' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
					<span className='glyphicon glyphicon-bell btn-lg navbar-icon' aria-hidden='true'/>
				</a> 
				<ul className='dropdown-menu'>
					{ this.mount() } 
				</ul> 
			</li>;
		}
	});

	return Notification;
});
