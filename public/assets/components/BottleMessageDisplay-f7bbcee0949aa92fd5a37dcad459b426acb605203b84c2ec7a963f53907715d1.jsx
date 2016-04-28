var BottleMessageDisplay = React.createClass({
  handleDismissClick: function(e) {
    var $clicked = $(e.currentTarget)
    var dismissedMessage = $(e.currentTarget).attr('data-bottle-message-id')
    $.ajax({
      method: "PUT",
      url: "/bottle_messages/" + dismissedMessage,
      data: {bottle_message: {seen: true}}
    }).done(function(resp){
      $clicked.html('<i class="material-icons">check</i>')
    })
  },
  getMessages: function(){
    return this.props.messages.map(function (message, i) {
      return (
          <div key={i} className="card flow-text">
            <div className="card-content">
              <p>{message.content}</p>
            </div>
            <div className="card-action">
              <a onClick={this.handleDismissClick}
              className="bottle-message-dismiss-link right" data-bottle-message-id={message.id}>Dismiss</a>
            </div>
          </div>
        );
    }.bind(this))
  },
  componentDidMount: function() {
    setTimeout(function () {
      if (this.props.messages.length > 0) {
        $('#bottle-messages-display-modal').openModal();
      }
    }.bind(this), 800);
  },
  render: function(){
    return (
      <div id="bottle-messages-display-modal" className='modal left-align'>
        <div className="modal-content">
          <h4><i className="material-icons">mail_outline</i></h4>
          {this.getMessages()}
        </div>
      </div>
    )
  }
})
