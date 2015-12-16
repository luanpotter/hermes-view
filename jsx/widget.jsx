define(function (require) {

	var Widget = React.createClass({
		classPanel: function () {
			return 'widget-' + this.props.name.toLowerCase();
		},
		render: function () {
			return <div className={ 'panel panel-default ' + this.classPanel() }>
  				<div className='panel-heading'>
  					<h3 className='panel-title'>{ this.props.name || 'Widget' }</h3>
  				</div>
  				<div className='panel-body'>
    				{ this.props.children }
    				<button className='btn btn-default show-more'>Show more ...</button>
  				</div>
			</div>;
		}
	});

	return Widget;
});
