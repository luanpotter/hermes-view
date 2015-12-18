define(function (require) {

	var Notification = React.createClass({
		render: function () {
			var Notification = this.props.value;
			return <li className='dropdown'> 
				<a href='#' className='dropdown-toggle container-navbar-icon' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
					<span className='glyphicon glyphicon-bell btn-lg navbar-icon' aria-hidden='true'/>
				</a> 
				<ul className='dropdown-menu'> 
					<li><a href='#'>Action</a></li> 
					<li><a href='#'>Another action</a></li> 
					<li><a href='#'>Something else here</a></li> 
					<li role='separator' className='divider'></li> 
					<li><a href='#'>Separated link</a></li> 
					</ul> 
				</li>;
		}
	});

	return Notification;
});
