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
    $("#data").val(target.text());
  },
  inputFields: function() {
    switch(this.props.type) {
      case "Placeholder":
        return (
          <div>
            <div id="icon-select" className="input-field col s12">
              <i id='icon-preview' className="right col s7 material-icons">format_list_numbered</i>
              <a id='dropdown-button' className='col s5 left valign dropdown-button waves-effect waves-light' href='#' data-activates='dropdown1'>Icon: </a>
              <ul id='dropdown1' className='dropdown-content'>

                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">person</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">school</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">notifications none</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">spa</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">restaurant</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview" className="material-icons col s4">local_gas_station</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">add_shopping_cart</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">build</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">flight_takeoff</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">pets</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">email</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">message</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">directions_car</i></li>
                <li><i onClick={this.updatePreview} id="icon-preview"className="material-icons col s4">cake</i></li>
              </ul>
            </div>
            <input type="hidden" name="data" id="data" value="done"></input>
            <input type="hidden" name="type" id="type" value="Placeholder"></input>
          </div>)
        break;
      case "Timer":
        return (<div className="input-field col s12"><input type="number" name="data" min="1" id="data"></input>
          <label htmlFor="duration">Duration in Minutes:</label>
          <input type="hidden" name="type" id="type" value="Timer"></input></div>)
        break;
      case "Tracker":
        return (<div className="input-field col s12"><input type="text" placeholder="e.g. Miles Ran" name="data" min="1" id="data"></input>
          <label htmlFor="unit">Unit you want to Track:</label>
          <input type="hidden" name="type" id="type" value="Tracker" ></input></div>)
        break;
      default:
        return (<p>Sorry there was a problem with this form.</p>)
    }
  },
  addCurrent: function(e) {

    var inputs = $(e.currentTarget).closest("form").find("input");
    var data_value = $('#data').val();
    console.log('data', data_value)

    var data = {}
    for (var i in inputs) {

      data[inputs[i].name] = inputs[i].value;
    }

    stuff = {
      type: data.type,
      label: data.label,
      data: data_value,
      custom: true
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

          <a id='add-new-current' onClick={this.addCurrent} className="valign btn-floating"><i className="material-icons">add</i></a>

        </form>)

    } else {
      return (
        <div className='valign-wrapper'>
          <div className='row'>
            <div className='col s12'>
              <div className='col s5 valign left'>
                <a id='create-new-button' onClick={this.toggleForm} className="valign btn-floating"><i className="material-icons">mode_edit</i>
                </a>
              </div>
              <p  className="valign col s7">Create one</p>
            </div>
          </div>
        </div>
      )
    }
  },
  render: function() {
    return (
        <div key="0" className="card-panel valign-wrapper">
          {this.formOrButton()}   </div>
      )

  }




});
