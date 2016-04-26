var CustomCurrentBuilder = React.createClass({

  getInitialState: function() {
    return {
      button: true,
      form: "None"
    }
  },

  addCustomCurrent: function() {

    this.props.onChange({
      includable_type: "Placeholder",
      includable_id: 5,
      custom: true,
      label: "Custom Test",
      data: "coffee"
    })
  },

  toggleButton: function() {
    console.log(this.state.button)
    this.setState({
      button: !this.state.button
    })
  },

  formSelect: function(e) {
    console.log(e.target);
    var type = e.target.getAttribute("id")
    this.setState({
      form: type,
      button: false
    })
  },

  findForm: function() {
    switch (this.state.form) {
      case "Placeholder":
        return (<form>
          THIS IS A FORM MOTHA FUCKA
         </form>)
      break;
      case "Timer":
          return(<form>Timer Form</form>)
      break;
      case "Tracker":
          return(<form>Tracker Form</form>)
      break;
      case "Other":
      break;

      default:

    }
  },

  formOrButton: function() {
    if (this.state.button) {
      return (<div className="fixed-action-btn horizontal click-to-toggle" >
              <a className="btn-floating btn-large red">
                <i className="large material-icons">mode_edit</i>
              </a>
              <ul>
                <li><a onClick={this.formSelect} className="btn-floating red"><i id="Placeholder" className="material-icons">insert_chart</i></a></li>
                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                <li>
                  <a className="btn-floating blue"><i className="material-icons">attach_file</i></a>
                </li>
              </ul>
      </div>)
    } else {
      return (<div className="card">
        {this.findForm()}
        </div>)
    }

  },
  render: function(){

    return (<div >{this.formOrButton()}</div>)
  }




})
