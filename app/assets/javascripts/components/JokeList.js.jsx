var JokeList = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <div className='row'>
          <p className='col s10'>Joke</p><i className="smiley col s2 material-icons right">tag_faces</i>
        </div>

        <div className='row'>
          <p className='col s12'>{this.props.joke}</p>
        </div>
      </div>
    )
  }
})
