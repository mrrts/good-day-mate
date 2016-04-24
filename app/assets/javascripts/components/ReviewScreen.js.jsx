var ReviewScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  render: function(){
    return (
      <div className='container'>
      </div>
    )
  }
})
