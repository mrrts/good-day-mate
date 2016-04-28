var Podcast = React.createClass({
  render: function(){
    return (
      <div className="podcast card-content">
        <div className='row'>
          <p className='col s10'>Podcast</p><a target="_blank" href={this.props.url}><i id='stream-icon' className="col s2 material-icons">hearing</i></a>
        </div>
        <ul>
          <li>
            <div className='row'>
              <img className="podcast-icon" src={this.props.icon} />

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
