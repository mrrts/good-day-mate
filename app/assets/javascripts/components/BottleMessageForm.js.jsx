var BottleMessageForm = React.createClass({
  getInitialState: function(){
    return {}
  },
  componentDidMount: function(){
    $.get('/bottle_messages/new', function(response){
      var auth_token = $(response).find('input[name="authenticity_token"]').val()
      this.setState({authenticity_token: auth_token})
    }.bind(this))
    var d = new Date();
    console.log(d.getMonth());
    var todayYear = d.getFullYear();
    var todayMonth = d.getMonth() + 1;
    var todayDate = d.getDate();
    this.setState({todayDate: todayYear + '-' + todayMonth + '-' + todayDate})
    d.setDate(d.getDate() + 1);
    var tomorrowYear = d.getFullYear();
    var tomorrowMonth = d.getMonth() + 1;
    var tomorrowDate = d.getDate();
    this.setState({tomorrowDate: tomorrowMonth + '/' + tomorrowDate + '/' + tomorrowYear})
    $('.datepicker').datepicker({minDate: new Date(d), dateFormat: 'yy-mm-dd', defaultDate: +1})
  },
  handleSubmit: function(event){
    event.preventDefault();
    $('#bottle-message-modal').closeModal()
    $.ajax({
      method: 'POST',
      url: '/bottle_messages',
      data: $('#bottle-message-modal form').serialize()
    }).done(function(resp){
    }.bind(this))
  },
  render: function(){
    return (
      <div className='modal' id='bottle-message-modal'>
        <div className="modal-content">
          <h5>Send myself a message in a bottle:</h5>
            <form onSubmit={this.handleSubmit}>
              <input type='hidden' name='authenticity_token' value={this.state.authenticity_token}/>
              <div className="input-field col s12">
                <textarea name='bottle_message[content]' className="materialize-textarea flow-text" id='bottle-message-text'></textarea>
                <label htmlFor="bottle_message[content]">Message</label>
              </div>
              <div className="input-field col s12">
                <input name='bottle_message[delivery_date]' type='date' className='datepicker' placeholder="Delivery Date" value={this.state.tomorrowDate} />
                <label className="active" htmlFor="bottle_message[delivery_date]">Deliver on</label>
              </div>
              <div className="center-align">
                <button id="bottle-message-submit" className="btn-floating waves-effect waves-light" type='submit' value="Send"><i className="material-icons">send</i></button>
              </div>
            </form>
        </div>
      </div>
    )
  }
})
