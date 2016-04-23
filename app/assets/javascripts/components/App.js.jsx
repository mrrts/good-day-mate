var App = React.createClass({
	getInitialState: function() {
		return {
			screen: "morning",
			availableCurrents: ""
		}
	},
	componentDidMount: function () {
		$.get('/', function(response) {
      console.log(response)
			this.setState({
				availableCurrents: response.availableCurrents
			})
		}.bind(this));
	},
	getScreenContent: function () {
		switch(this.state.screen) {
			case "home":
				return <HomeScreen />
			case "login":
				return <LoginScreen />
			case "registration":
				return <RegistrationScreen />
			case "morning":
				return <MorningScreen currents={this.props.currents} />
			case "evening":
				return <EveningScreen />
			case "build":
				return <BuildScreen availableCurrents={this.state.availableCurrents} />
			case "lookback":
				return <LookbackScreen />
		}
	},
	render: function () {
		console.log(this.props.currents)
		return (
				<div>
					<Navbar />
					{this.getScreenContent()}
				</div>
		)
	}
});
