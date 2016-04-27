var Tracker = React.createClass({
  getInitialState: function() {
    return {
      form: true
    }
  },
  submitData: function() {
    if ($("#input-number").val()) {
      var submission = {
          label: this.props.label,
          number: $("#input-number").val()
        }
      $.ajax({
        method: 'POST',
        url: '/includables/tracker',
        data: submission,
        dataType: "json"
      }).done(function(response){

      }.bind(this));
        console.log("HELLO RYAN");
              this.setState({
                form: false
              })
    }
  },

  render: function(){
    if (this.state.form) {
    return (
      <div className="card-content">
        <p>Tracker: {this.props.label}</p>
        <div className="tracker">
          <form>
            <div className="input-field">
              <input id="input-number" type="number" name="value" placeholder={this.props.unit} />
              <a id='tracker-button' className="btn-large waves-effect waves-light" onClick={this.submitData}>Save</a>
            </div>
          </form>
        </div>
      </div>
      )
    }
    else {
      return (
          <div className="card-content">We will keep track of that for you. </div>
        )
    }
  }
});
