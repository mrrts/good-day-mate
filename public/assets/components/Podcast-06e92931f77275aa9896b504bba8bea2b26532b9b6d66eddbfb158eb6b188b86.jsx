var Podcast = React.createClass({
  render: function(){
    return (
      <div className="podcast card-content">
        <div className='row'>
          <p className='col s10'>Podcast</p><i id='stream-icon' className="col s2 material-icons">hearing</i>
        </div>
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
