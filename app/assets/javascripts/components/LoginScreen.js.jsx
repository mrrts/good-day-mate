var LoginScreen = React.createClass({
  getInitialState: function(){
    return {errorMessage: ""};
  },
  handleRegisterClick: function(){
    this.props.onUpdate('registration')
  },
  componentDidMount: function(){
    $.get('/login', function(response){
     var auth_token = $(response).find('input[name="authenticity_token"]').val()
      this.setState({authenticity_token: auth_token})
    }.bind(this))
  },
  handleFormSubmit: function(event){
    event.preventDefault();
    var here = $(event.target);
    $.ajax({
      type: "POST",
      url: '/sessions',
      data: here.serialize()
    }).done(function(resp){
      if (resp.errors) {
        this.setState({errorMessage: resp.errors[0]})
      }
    }.bind(this))
  },
  render: function(){
    return (
      <div onSubmit={this.handleFormSubmit}>
        <form action="/sessions" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value={this.state.authenticity_token} />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user[email]" id="user_email" />
          <label htmlFor="user_password">Password</label>
          <input type="password" name="user[password]" id="user_password" />
          <input type="submit" name="commit" value="Log In" />
        </form>

        <div className="errors">
          <p>{this.state.errorMessage}</p>
        </div>

        <div>
          <a onClick={this.handleRegisterClick} >Register</a>
        </div>
      </div>
    )
  }
})
