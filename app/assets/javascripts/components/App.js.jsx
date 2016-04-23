var App = React.createClass({
	render: function () {
		console.log(this.props.currents)
		return (
				<div>
					<Navbar />
					<Stream currents={this.props.currents} />
				</div>
		)
	}
});
