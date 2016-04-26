var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder card-content valign-wrapper">
        <div className="valign left-align">
          <i className="material-icons">{this.props.icon}</i>
        </div>
        <div className="valign right-align">
          <p>{this.props.label}</p>
        </div>
      </div>
    )
  }
})
