var GoodNightScreen = React.createClass({
  componentDidMount: function () {
    setTimeout(function () {
      this.props.onUpdate('home')
    }.bind(this), 5000)
  },
  render: function(){
    return (
      <div className="container">
        <div className="valign-wrapper">
          <h3 id='goodnight-message' className='center valign center-align'>Good Night!</h3>
        </div>
      </div>
      )
  }
})
