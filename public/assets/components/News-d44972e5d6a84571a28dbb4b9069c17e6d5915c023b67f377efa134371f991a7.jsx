var News = React.createClass({

  headlines: function() {
    var stories = this.props.headlines.map(function(story, i) {
      return (
        <li className="collection-item" key={i}> <a target="_blank" href={story.url}>{story.headline_text}</a> </li>
        )
    });
    return stories.splice(0,3);
  },
  render: function(){
    return (
      <div className="card-content">
        <h5>{this.props.label}</h5>
        <ul className="browser-default collection">
          {this.headlines()}
        </ul>
      </div>
    )
  }
})
