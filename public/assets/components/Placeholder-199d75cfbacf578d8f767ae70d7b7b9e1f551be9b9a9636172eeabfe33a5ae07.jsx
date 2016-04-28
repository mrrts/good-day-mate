var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder card-content">
        <div className='row'>
          <p className='col s10'>Task</p><i id='stream-icon' className="col s2 fa fa-list-ol" aria-hidden="true"></i>
        </div>
        <div className='row'>
          <i className="col s2 material-icons">{this.props.icon}</i>
          <p className='col s10'>{this.props.label}</p>
        </div>
      </div>
    )
  }
})
