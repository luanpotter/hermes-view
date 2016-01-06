define(function (require) {

  var NavbarHeader = require('js/components/navbar-header');
  var Notification = require('js/components/notification');

	var Navbar = React.createClass({
		render: function () {
			return <nav className='navbar navbar-inverse navbar-static-top'>
  				<div className='container'>
  					<NavbarHeader/>
            <ul className='nav navbar-brand pull-right icons-navbar'>
              <Notification />
            </ul>
				</div>
			</nav>;
		}
	});

	return Navbar;
});
