define(function (require) {

	var Tooltip = React.createClass({
		render: function () {
			return <div className='hint--top hint--bounce' data-hint={ this.props.text }>
				{ this.props.children }
			</div>;
		}
	});

	return Tooltip;
});
