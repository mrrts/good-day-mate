var Podcast = React.createClass({
  render: function(){
    return (
      <div className="podcast card-content">
        <ul>
          <li>
            <div>
              <img className="podcast-icon" src={this.props.icon} />
            </div>
            <div className="podcast-info">
              <p>{this.props.genre}</p>
              <p>{this.props.duration}</p>
            </div>
          </li>
          <li className="podcast-link"><a target="_blank" href={this.props.url}>{this.props.label}</a></li>
        </ul>
      </div>
    )
  }
})
