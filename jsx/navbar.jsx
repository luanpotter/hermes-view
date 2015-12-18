define(function (require) {

  var Notification = require('js/components/notification');

	var Navbar = React.createClass({
		render: function () {
			return <nav className='navbar navbar-inverse navbar-static-top'>
  				<div className='container'>
  					<div className='navbar-header'>
      					<a className='navbar-brand' href='#'>
      						<div className='container-logo'>
        						<img className='logo' alt='OSI-7' src='../images/logo.png'/>
        						<span className='logo-title'>OSI-7</span>
        					</div>
      					</a>
    				</div>

            <ul className='nav navbar-nav navbar-right'>
              <Notification />
            </ul>
				</div>
			</nav>;
		}
	});

	return Navbar;
});
