var HomeScreen = React.createClass({
  handleBuildClick: function(event){
    this.props.onUpdate('build')
  },
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  handleEndClick: function(event){
    this.props.onUpdate('end')
  },
  render: function(){
    return (
      <div>
        <a onClick={this.handleBuildClick} id='home-button' className="btn-large waves-effect waves-light">Build Your Day</a>
        <a onClick={this.handleStartClick} id='home-button' className="btn-large waves-effect waves-light">Start Your Day</a>
        <a onClick={this.handleEndClick} id='home-button' className="btn-large waves-effect waves-light">End Your Day</a>
      </div>
    )
  }
})
