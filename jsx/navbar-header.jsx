define(function () {

	var NavbarHeader = React.createResponsiveClass({

		render: function () {
			return <div className='navbar-header wrapper-navbar-header'>
      					<a className='navbar-brand title-navbar' href='#'>
      						<div className='container-logo'>
        						<img className='logo' alt='OSI-7' src='../images/logo.png'/>
        						<span className='logo-title'>OSI-7</span>
        					</div>
      					</a>
    				</div>;
		}
	});

	return NavbarHeader;
});
