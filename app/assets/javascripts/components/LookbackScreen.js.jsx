var LookbackScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  // code came from the ReviewScreen...will need to change this to handle moving
  // through the different views on lookbacks
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  componentDidMount: function() {
    $.get("/users/history", function(response){
      this.setState({
        gratitudes: response.gratitudes
      });
    }.bind(this))
  },
  render: function(){
    return (
      <div className='container flow-text'>
          <div className="card">
            <div className="card-content">
              <p>Here I am!</p>
              <p>{this.props.gratitudes}</p>
            </div>
          </div>         
      </div>
    )
  }
})
