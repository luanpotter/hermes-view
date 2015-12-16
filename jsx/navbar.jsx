define(function (require) {

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

    				<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
    					<ul className='nav navbar-nav'>
    						<li><a href='#'>Link</a></li>
    					</ul>
    				</div>
				</div>
			</nav>;
		}
	});

	return Navbar;
});
