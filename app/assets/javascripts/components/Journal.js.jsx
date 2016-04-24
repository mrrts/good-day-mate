var Journal = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <p>{this.props.label}</p>
        <textarea></textarea>
      </div>
    )
  }
})
