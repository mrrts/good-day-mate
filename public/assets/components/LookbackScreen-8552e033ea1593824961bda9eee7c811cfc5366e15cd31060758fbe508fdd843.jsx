var LookbackScreen = React.createClass({
  getInitialState: function(){
    return {}
  },

  gratitudesList: function() {
    var grats = this.state.gratitudes;
    if (grats) {
      grats = grats.map(function(gratitude, i) {
        if (gratitude[1] >1 ) {
          return (
            <li data-key={i} key={i} className="lookback-input">
               {gratitude[0]}
            </li>
          )
        }
      })
    } else {
      grats = "loading..."
    }
    return grats
  },

  feelsList: function() {
    var feels = this.state.feelings;
    if (feels) {
      feels = feels.map(function(feeling, i) {
        if (feeling[1] > 1 ) {
          return (
            <li data-key={i} key={i} className="lookback-input">
               {feeling[0]}
            </li>
          )
        }
      })
    } else {
      feels = "UNKNOWN"
    }
    return feels
  },

  componentDidMount: function() {
    $.get("/users/history", function(response){
      this.setState({
        gratitudes: response.gratitudes,
        feelings: response.feelings,
        horizons: response.horizons
      })
    }.bind(this))
  },

  render: function(){
    return (
      <div className='container flow-text'>
          <div className="card">
            <div className="card-content">
              <p className="review-header">I{"'"}m grateful for:</p>
              <ul>
                {this.gratitudesList()}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="review-header">I{"'"}ve been feeling:</p>
              <ul>
                {this.feelsList()}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <JournalReview />
            </div>
          </div>
      </div>
    )
  }
})
