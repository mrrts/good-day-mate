var LoginScreen = React.createClass({
  getInitialState: function(){
    return {value: ''}
  },
  componentDidMount: function(){
    $.get('/login', function(response){
     var auth_token = $(response).find('input[name="authenticity_token"]').val()
      this.setState({authenticity_token: auth_token})
    }.bind(this))
  },
  handleFormSubmit: function(event){
    event.preventDefault();
    $.post('/sessions', function(){

    })
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
      </div>
    )
  }
})
