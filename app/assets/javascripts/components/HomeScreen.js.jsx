var HomeScreen = React.createClass({
  getInitialState: function(){
    return {bottleMessagesToDisplay: []}
  },
  componentDidMount: function(){
    $.ajax({
      method: 'GET',
      url: '/bottle_messages/today'
    }).done(function(resp){
      if ( resp.length > 0 ) {
        this.setState({bottleMessagesToDisplay: resp})
      }
    }.bind(this))
  },
  handleBuildClick: function(event){
    this.props.onUpdate('build')
  },
  handleStartClick: function(event){
    this.props.onUpdate('review')
  },
  handleEndClick: function(event){
    this.props.onUpdate('evening')
  },
  render: function(){
    return (
      <div id="home-buttons" className='container'>
        <div className="valign-wrapper outer-valign-wrapper center-align">
          <div className="valign">

            <div className="valign-wrapper">
              <button onClick={this.handleStartClick} className="valign home-button btn-large waves-effect waves-light">
                  Good Morning
              </button>
            </div>

            <BottleMessageDisplay messages={this.state.bottleMessagesToDisplay}/>

            <div className="valign-wrapper">
              <button onClick={this.handleEndClick} className="valign home-button btn-large waves-effect waves-light">
                <Anchor /> Good Night
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  }
})
// ?
