var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder card-content">
        <p><i className="material-icons">{this.props.icon}</i> {this.props.label}</p>
      </div>
    )
  }
})
