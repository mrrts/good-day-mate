var LookbackScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  // code came from the ReviewScreen...will need to change this to handle moving
  // through the different views on lookbacks
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },

  gratitudesList: function() {
    var grats = this.state.gratitudes;
    if (grats) {
      grats.map(function(gratitude, i) {
        return (
          <li data-key={i} key={i}>
             Gratitude: {gratitude[0]}, frequency: {gratitude[1]}
          </li>
        )
      })
    } else {
      "UNKNOWN"
    }
    // var firstGrat = grats ? grats[0] : "UNKNOWN"
    // console.log("firstGrat " + firstGrat);
    return grats
  },

  componentDidMount: function() {
    $.get("/users/history", function(response){
      console.log(response)
      this.setState({
        gratitudes: response.gratitudes,
        feelings: response.feelings,
        horizons: response.horizons
      })
    }.bind(this))
  },

  // var grats: this.state.gratitudes,
  // var feels: this.state.feelings,
  // var tomorrows: this.state.horizons,

 

  render: function(){
    return (
      <div className='container flow-text'>
          <div className="card">
            <div className="card-content">
              I'm grateful for: 
              <ul>
                {this.gratitudesList()}
              </ul>
            </div>
          </div>         
      </div>
    )
  }
})
