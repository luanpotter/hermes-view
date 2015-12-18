define(function () {
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
              <li className='dropdown'> 
                <a href='#' className='dropdown-toggle container-navbar-icon' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
                  <span className='glyphicon glyphicon-bell btn-lg navbar-icon' aria-hidden='true'/>
                </a> 
                <ul className='dropdown-menu'> 
                  <li><a href='#'>Action</a>
                  </li> 
                  <li><a href='#'>Another action</a></li> 
                  <li><a href='#'>Something else here</a></li> 
                  <li role='separator' className='divider'></li> 
                  <li><a href='#'>Separated link</a></li> 
                </ul> 
              </li>
            </ul>
				</div>
			</nav>;
		}
	});

	return Navbar;
});
