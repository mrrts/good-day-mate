var CustomForm = React.createClass({

  getInitialState: function () {
    return {
      showForm: false
    }
  },
  toggleForm: function() {
    this.setState({
      showForm: !this.state.showForm
    })
  },
  componentDidMount: function() {
    setInterval(function() {
      this.dropdownInit();
    }.bind(this), 500);
  },
  dropdownInit: function() {

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );

  },
  updatePreview: function(e) {
    var target = $(e.target)
    console.log(target.text());
    $("#icon-preview").text(target.text());
    $("#icon").val(target.text());
  },
  inputFields: function() {
    switch(this.props.type) {
      case "Placeholder":
        return ( <div className="input-field col s12">
          <i id="icon-preview" className="material-icons col s4">done</i>
          <a className='dropdown-button waves-effect waves-light blue' href='#' data-activates='dropdown1'>Icon</a>
          <ul id='dropdown1' className='dropdown-content browser-default'>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">done</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">person</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">school</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">notifications none</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">spa</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">child care</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">free breakfast</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">restaurant</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">directions walk</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">directions bike</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">flash on</i></li>
            <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">color lens</i></li>
          </ul>

          <input type="hidden" name="icon" id="icon" value="done"></input>
          <input type="hidden" name="type" id="type" value="Placeholder"></input>
          </div>)
        break;
      case "Timer":
        return (<div className="input-field col s12"><input type="number" name="duration" min="1" id="duration"></input>
          <label htmlFor="duration">Duration in Minutes:</label>
          <input type="hidden" name="type" id="type" value="Timer"></input></div>)
        break;
      case "Tracker":
        return (<div className="input-field col s12"><input type="text" placeholder="e.g. Miles Ran" name="unit" min="1" id="unit"></input>
          <label htmlFor="unit">Unit you want to Track:</label>
          <input type="hidden" name="type" id="type" value="Tracker" ></input></div>)
        break;
      default:
        return (<p>Sorry there was a problem with this form.</p>)
    }
  },
  addCurrent: function(e) {

    var inputs = $(e.currentTarget).closest("form").find("input");

    var data = {}
    for (var i in inputs) {

      data[inputs[i].name] = inputs[i].value;
    }

    stuff = {
      type: data.type,
      label: data.label,
      data: data
    }
    this.props.handleCustomCurrent(stuff);

    console.log(data);
    this.toggleForm();
    $itsModal = $($(e.currentTarget).closest('.modal'));
    $itsModal.closeModal();
  },
  formOrButton: function() {
    if (this.state.showForm) {
      return (<form>
          {this.inputFields()}
          <div className="input-field col s12">
            <input type="text" name="label" id="label"></input>
            <label htmlFor="label">Name:</label>
          </div>

          <a onClick={this.addCurrent} className="btn-floating btn waves-effect waves-light yellow darken-4"><i className="material-icons">add</i></a>
          Create
        </form>)

    } else {
      return (<div><a onClick={this.toggleForm} className="valign btn-floating btn waves-effect waves-light yellow darken-4"><i className="material-icons">mode_edit</i></a><span className="valign"> Create your own. </span></div>)
    }
  },
  render: function() {
    return (
        <div key="0" className="card-panel valign-wrapper">
          {this.formOrButton()}   </div>
      )

  }




});
