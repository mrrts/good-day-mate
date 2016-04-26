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
  inputFields: function() {
    switch(this.props.type) {
      case "Placeholder":
        return ( <div className="input-field col s12">
          <i className="material-icons col s4">done</i>

          <nav id="nav" className="col s8">
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
         </nav>
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
        return (<div className="input-field col s12"><input type="text" name="unit" min="1" id="unit"></input>
          <label htmlFor="unit">Unit you want to Track:</label>
          <input type="hidden" name="type" id="type" value="Tracker"></input></div>)
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
