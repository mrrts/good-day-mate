var Podcast = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <h2>Podcasts</h2>
        <a href={this.props.url}>NPR Featured Podcasts</a>
      </div>
    )
  }
})
