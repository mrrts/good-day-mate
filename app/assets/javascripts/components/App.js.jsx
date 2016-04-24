var App = React.createClass({
	getInitialState: function() {
		return {
			screen: "splash",
			availableCurrents: "",
			timeRemaining: 5
		}
	},
	tick: function() {
    this.setState({timeRemaining: this.state.timeRemaining - 1});
    if (this.state.timeRemaining <= 0) {
    	clearInterval(this.interval)
    	this.setState({screen: "home"})
    }
  },
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
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
			case "splash":
				return <SplashScreen />
			case "home":
				return <HomeScreen onUpdate={this.updateScreen} />
			case "login":
				return <LoginScreen onUpdate={this.updateScreen}/>
			case "registration":
				return <RegistrationScreen onUpdate={this.updateScreen} />
			case "review":
				return <ReviewScreen onUpdate={this.updateScreen} />
			case "start":
				return <MorningScreen currents={this.props.currents} />
			case "evening":
				return <EveningScreen onUpdate={this.updateScreen} />
			case "build":
				return <BuildScreen />

			case "lookback":
				return <LookbackScreen />
		}
	},
	getNavBar: function() {
		if (this.state.screen != "splash") {
			return (<Navbar onUpdate={this.updateScreen} />);
		}
		else {
			return ("");
		}
	},
	render: function () {
		return (
				<div>
					{this.getNavBar()}
					{this.getScreenContent()}
				</div>
		)
	}
});
