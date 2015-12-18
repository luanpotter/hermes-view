define(function (require) {

  var NavbarHeader = require('js/components/navbar-header');
  var Notification = require('js/components/notification');

	var Navbar = React.createClass({
		render: function () {
			return <nav className='navbar navbar-inverse navbar-static-top'>
  				<div className='container'>
  					<NavbarHeader min-width={768} />
            <ul className='nav navbar-nav navbar-right'>
              <Notification />
            </ul>
				</div>
			</nav>;
		}
	});

	return Navbar;
});
