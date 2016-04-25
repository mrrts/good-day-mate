var Podcast = React.createClass({
  render: function(){
    return (
      <div className="podcast card-content">
        <a href={this.props.url}>{this.props.title}</a>
        <p>Genre: {this.props.genre}</p>
        <p>Duration: {this.props.duration}</p>
      </div>
    )
  }
})
