define(function (require) {

	var Widget = React.createClass({
		classPanel: function () {
			return 'widget widget-' + this.props.name.toLowerCase();
		},
		lazyButton: function () {
			if (this.props.disableLazyButton) {
				return <div/>;
			}
			return <div className='container-show-more'>
    			<button className='btn btn-default show-more'>Show more ...</button>
    		</div>;
		},
		render: function () {
			return <div className={'col-sm-' + this.props.gridSize}>
				<div className={ 'panel panel-default ' + this.classPanel() }>
  					<div className='panel-heading'>
  						<h3 className='panel-title'>{ this.props.name || 'Widget' }</h3>
  					</div>
  					<div className='panel-body'>
    					{ this.props.children }
    					{ this.lazyButton() }
  					</div>
				</div>
			</div>;
		}
	});

	return Widget;
});
