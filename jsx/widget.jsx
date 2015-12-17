define(function (require) {

	var Widget = React.createClass({
		classPanel: function () {
			return 'widget widget-' + this.props.name.toLowerCase();
		},
		gridClass: 'col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3',
		lazyButton: function () {
			if (this.props.disableLazyButton) {
				return <div/>;
			}
			return <div className='row'>
    			<button className={ 'btn btn-default show-more ' + this.gridClass }>Show more ...</button>
    		</div>;
		},
		render: function () {
			return <div className={'col-xs-12 col-md-' + this.props.gridSize}>
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
