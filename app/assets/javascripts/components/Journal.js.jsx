var Journal = React.createClass({
  getInitialState: function() {
    return {
      currentText: "",
      saved: false
    }
  },
  updateText: function(e) {
    this.setState({
      currentText: e
    })
  },
  componentDidMount: function() {
    $(".journal-box").trigger('autoresize');
    $("#journal-box").change(function() {
      var text = $("#journal-box").val();
      this.updateText(text);
    }.bind(this));
  },
  saveJournal: function() {
    var journal_entry = { text: this.state.currentText }
    $.ajax({
      method: 'POST',
      url: '/journals',
      data: journal_entry,
      dataType: "json"
    }).done( function(data) {
      if (data.saved) {
        this.setState({saved: true})
      }
    }.bind(this))
  },
  savedOrNot: function() {
    if (this.state.saved) {
      return (
        <p>Thanks! Review Your Entries Later. </p>
        )
    }
    else {
      return (
        <div>
          <p>{this.props.label} <button className="btn-floating waves-effect waves-light right" type="submit" onClick={this.saveJournal} name="action">
          <i className="material-icons right">save</i>
          </button> </p>
        <div className="input-field col s12">
        <textarea id="journal-box" className="journal-box materialize-textarea"></textarea>
        <label for="journal-box">Type Here</label>
        </div>
        </div>
        )
    }
  },
  render: function(){
    return (
      <div className="card-content">
        {this.savedOrNot()}
      </div>
    )
  }
})
