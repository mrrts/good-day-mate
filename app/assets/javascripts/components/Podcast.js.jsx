var Podcast = React.createClass({
  render: function(){
    return (
      <div className="podcast card-content">
        <div className='row'>
          <p className='col s10'>Podcast</p><i id='stream-icon' className="col s2 material-icons">hearing</i>
        </div>
        <ul>
          <li>
            <div className='row'>
              <a target="_blank" href={this.props.url}><img className="podcast-icon" src={this.props.icon} /></a>

              <div className="podcast-info">
                <p>{this.props.genre}</p>
                <p id='pod-duration'>{this.props.duration}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
})
