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
        <div className='row'>
         <p className='col s10'>News</p><i id='stream-icon' className="col s2 fa fa-newspaper-o" aria-hidden="true"></i>
        </div>
        <ul className="browser-default collection">
          {this.headlines()}
        </ul>
      </div>
    )
  }
})
