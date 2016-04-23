var App = React.createClass({
	getInitialState: function() {
		return {
			screen: "home",
			availableCurrents: ""
		}
	},
	componentDidMount: function () {

		$.get('/', function(response) {
			this.setState({
				availableCurrents: response.availableCurrents
			})
		}.bind(this));
	},
	updateScreen: function(newState){
		this.setState({
			screen: newState,
		})
	},
	getScreenContent: function () {
		switch(this.state.screen) {
			case "home":
				return <HomeScreen onUpdate={this.updateScreen} />
			case "login":
				return <LoginScreen onUpdate={this.updateScreen}/>
			case "registration":
				return <RegistrationScreen onUpdate={this.updateScreen} />
			case "start":
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
		return (
				<div>
					<Navbar onUpdate={this.updateScreen} />
					{this.getScreenContent()}
				</div>
		)
	}
});
