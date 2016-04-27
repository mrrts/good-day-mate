var LookbackScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  componentDidMount: function() {
    $.get("/users/history", function(response){
      this.setState({
        feeling: response.review.feeling,
        thankful1: response.review.thankful1,
        thankful2: response.review.thankful2,
        thankful3: response.review.thankful3,
        horizon: response.review.horizon,
      });
    }.bind(this))
  },
  render: function(){
    return (
      <div className='container flow-text'>
          <div className="card">
            <div className="card-content">
              You were feeling {this.state.feeling}
            </div>
          </div>
          <div className='card'>
            <div className="card-content">
              You were thankful for {this.state.thankful1}, {this.state.thankful2}, and {this.state.thankful3}
            </div>
          </div>
          <div className='card'>
            <div className="card-content">
              You are looking forward to {this.state.horizon}
            </div>
          </div>
          <div id="start-day-button" className='container'>
            <div className="center-align">
             <a onClick={this.handleStartClick} className='start-day btn-large waves-effect waves-light' id='start-day-button'>Start Your Day</a>
            </div>
          </div>
      </div>
    )
  }
})
