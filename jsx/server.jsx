define(function (require) {

	var Tooltip = require('js/components/tooltip');

	var Server = React.createClass({
		render: function () {
			var server = this.props.value;
			return <div className='col-sm-3 list-servers'>
				<div className='thumbnail list-group-item server'>
					<Tooltip text={ server.ip }>{ server.label }</Tooltip>
				</div>
			</div>;
		}
	});

	return Server;
});
