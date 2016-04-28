var Timer = React.createClass({
  getInitialState: function() {
    return {
      timeLeft: this.props.duration,
      start: false
          }
  },
  tick: function() {
    if (this.state.timeLeft > 0) {
      this.setState({timeLeft: this.state.timeLeft - 1});
      } else {
        clearInterval(this.interval);
        document.getElementById("alarmSound").play();
        document.getElementById("alarmSound").loop = true;
      }
  },
  componentDidMount: function(){
    console.log(this.props)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  timeRemaining: function() {
    var minutes = Math.floor(this.state.timeLeft / 60)
    var seconds = this.state.timeLeft % 60
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    return (<span>{minutes}:{seconds}</span>)
  },
  startButton: function() {
    if (this.state.start) {
      return (<span className="right"> {this.timeRemaining()} </span>)
    } else {
      return (
          <button className="timer-button btn-floating waves-effect waves-light right" type="submit" onClick={this.startCount} name="action">
          <i className="material-icons right">query_builder</i>
          </button>
            )
    }
  },
  startCount: function() {
    this.interval = setInterval(this.tick, 1000);
    this.setState({start: true});
  },
  stopMusic: function() {
    document.getElementById("alarmSound").pause();
  },
  showState: function() {
    if (this.state.timeLeft <= 0) {
      return (<p>
          FINISHED!
          <button id='timer-button' className="valign btn-floating waves-effect waves-light right" type="submit" onClick={this.stopMusic} name="action">
          <i className="material-icons right">done</i>
          </button>
        </p>)
    } else {
      return (
        <p>
          {this.props.label}
          {this.startButton()}
        </p>)
    }
  },
  render: function () {
      return (
      <div className="card-content">
        <p>Timer</p>
        {this.showState()}
        <audio controls preload="auto" className="hide" id="alarmSound">
        <source src="/assets/beautiful_sounds-ecf1b3380a0382cbd08c1f18913d6a79fb9a773e9071159f31ed90e1db51bd53.mp3" type="audio/mpeg" />
        </audio>
      </div>
      )
    }
});
