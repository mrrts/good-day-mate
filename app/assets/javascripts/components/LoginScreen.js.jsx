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
      <div className='container'>
        <div className='row'>
          <div>
            <form onSubmit={this.handleFormSubmit} className='col s12' acceptCharset="UTF-8">
              <input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value={this.state.authenticity_token} />
              <div className='input-field col s12'>
                <input type="email" name="user[email]" id="user_email" />
                <label htmlFor="user_email">Email</label>
              </div>
              <div className='input-field col s12'>
                <input type="password" name="user[password]" id="user_password" />
                <label htmlFor="user_password">Password</label>
              </div>
              <input type="submit" name="commit" className="btn-large waves-effect waves-light" value="Log In" />
            </form>
          </div>
        </div>
        <div className="errors">
          <p>{this.state.errorMessage}</p>
        </div>
        <div className='container row'>
          <p>Don't have an account? <a onClick={this.handleRegisterClick} >Register</a></p>
        </div>
      </div>
    )
  }
})
