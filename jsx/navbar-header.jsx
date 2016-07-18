define(function () {

	var NavbarHeader = React.createResponsiveClass({

		render: function () {
			return <div className='navbar-header wrapper-navbar-header'>
      					<a className='navbar-brand title-navbar' href='#'>
      						<div className='container-logo'>
        						<img className='logo' alt='Hermes' src='../images/logo.png'/>
        					</div>
      					</a>
    				</div>;
		}
	});

	return NavbarHeader;
});
