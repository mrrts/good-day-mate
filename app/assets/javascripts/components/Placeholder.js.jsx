var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder card-content">
        <p>Task</p>
        <div className='row'>
          <i className="col s2 material-icons">{this.props.icon}</i>
          <p className='col s10'>{this.props.label}</p>
        </div>
      </div>
    )
  }
})
