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
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function () {

    if (this.state.timeLeft <= 0) {
      return (
      <div className="card-content">
        <p>
          YOU{"'"}RE DONE KID
        </p>
      </div>
      )
    } else {
    return (
      <div className="card-content">
        <p>
          {this.props.label} = {this.state.timeLeft}
        </p>
      </div>
      )
    }
  }
});
