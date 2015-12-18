define(function (require) {

	var Tooltip = React.createClass({
		render: function () {
			var customClass = this.props.customClass || ''; 
			return <div className={ 'hint--top hint--bounce ' + customClass } data-hint={ this.props.text }>
				{ this.props.children }
			</div>;
		}
	});

	return Tooltip;
});
