var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder card-content valign-wrapper">
        <div className="valign">
          <p>{this.props.label}</p>
        </div>
        <div className="valign">
          <i className="material-icons">{this.props.icon}</i>
        </div>
      </div>
    )
  }
})
