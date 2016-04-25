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
      }
  },
  componentDidMount: function(){

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
      return (<span> {this.timeRemaining()} </span>)
    } else {
      return (
          <button className="btn waves-effect waves-light right" type="submit" onClick={this.startCount} name="action">Start
          <i className="material-icons right">send</i>
          </button>
            )
    }
  },
  startCount: function() {
    this.interval = setInterval(this.tick, 1000);
    this.setState({start: true});
  },
  showState: function() {
    if (this.state.timeLeft <= 0) {
      return (<p>
          FINISHED!
        </p>)
    } else {
      return (<p>
          {this.props.label}
          {this.startButton()}
        </p>)
    }
  },
  render: function () {
      return (
      <div className="card-content">
        {this.showState()}
      </div>
      )
    }
});
