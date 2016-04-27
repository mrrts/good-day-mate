var Photo = React.createClass({
  getFilePath: function(){
    return "/assets/images/cute_animals/babushka_dog.jpg";
  },

  render: function(){
    return (
      <div className="photo card-content">
        <img src={this.getFilePath()} />
      </div>
    )
  }
})
