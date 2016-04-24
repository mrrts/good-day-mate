var ReviewScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  componentDidMount: function() {
    $.get("/check_ins/show", function(response){
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
      <div className='container'>
        <ul>
          <li className='card'>You were feeling {this.state.feeling}</li>
          <li className='card'>You were thankful for {this.state.thankful1}, {this.state.thankful2}, {this.state.thankful3}</li>
          <li className='card'>You are looking forward to {this.state.horizon}</li>
          <a onClick={this.handleStartClick} className='btn-large waves-effect waves-light' id='start-day-button'>Start Your Day</a>
        </ul>
      </div>
    )
  }
})
