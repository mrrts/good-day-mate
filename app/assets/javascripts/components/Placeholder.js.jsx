var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <p><i className="material-icons">{this.props.icon}</i> {this.props.label}</p>
      </div>
    )
  }
})
