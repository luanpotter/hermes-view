define(function (require) {

	var Widget = React.createClass({
		render: function () {
			return <div className='panel panel-default'>
  				<div className='panel-heading'>
  					<h3 className='panel-title'>{ this.props.name || 'Widget' }</h3>
  				</div>
  				<div className='panel-body'>
    				{ this.props.children }
  				</div>
			</div>;
		}
	});

	return Widget;
});
