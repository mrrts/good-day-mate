var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <p>Icon: {this.props.icon}</p>
        <p>{this.props.label}</p>
      </div>
    )
  }
})
