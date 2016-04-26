var App = React.createClass({
	getInitialState: function() {
		return {
			screen: "splash",
			availableCurrents: "",
			timeRemaining: 3,
			loggedIn: false,
			userId: undefined

		}
	},
	tick: function() {
    this.setState({timeRemaining: this.state.timeRemaining - 1});
    if (this.state.timeRemaining <= 1) {
    	$('.splash-screen').fadeOut(1000);
    }
    if (this.state.timeRemaining <= 0) {
    	clearInterval(this.interval)
    	this.updateScreen('home')
    }
  },
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
		$.get('/sessions/info', function(resp) {
			if (resp.session_id === false) {
				this.setState({loggedIn: false})
			} else {
				this.setState({loggedIn: true, userId: resp.session_id})
			}
		}.bind(this));
	},
	updateScreen: function(newScreen, newStates = {}) {
		this.setState({
			screen: newScreen,
		});
		var newStatesObj = {}
		for (newState in newStates) {
			newStatesObj[newState]= newStates[newState]
		}
		this.setState(newStatesObj)
		var screens = "splash home login registration review start evening build goodnight lookback";
		$('body').removeClass(screens).addClass(newScreen);
	},
	getScreenContent: function () {
		switch(this.state.screen) {
			case "splash":
				return <SplashScreen />
			case "home":
				if (this.state.loggedIn === false) {
					return <LoginScreen onUpdate={this.updateScreen}/>
				}
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
				return <BuildScreen onUpdate={this.updateScreen} />
			case "goodnight":
				return <GoodNightScreen />
			case "lookback":
				return <LookbackScreen />
		}
	},
	getNavBar: function() {
		if (this.state.screen != "splash") {
			return (<Navbar screen={this.state.screen} loggedIn={this.state.loggedIn} onUpdate={this.updateScreen} />);
		}
		else {
			return ("");
		}
	},
	render: function () {
		return (
				<div>
					{this.getNavBar()}
					<div className="screenContent">
						{this.getScreenContent()}
					</div>
					// <div className="canvas-container">
					// 	<CanvasClass />
					// </div>
				</div>
		)
	}
});
