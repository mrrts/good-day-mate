var SelectedCurrents = React.createClass({
  currentsList: function () {
    return this.props.currentList.map(function(current, i) {

      return (
          <li className="card" data-key={i} key={i}>
            <div className="card-content valign-wrapper">
              <div className="valign left-align">
                {current.label}
              </div>
              <div className="valign right-align">
                <a className="btn-floating" onClick={this.closeButton}> <i className=" tiny material-icons">close</i></a>
              </div>
            </div>
          </li>
      )
    }.bind(this));
  },
  closeButton: function(e) {
   target = $(e.target).closest("li")

    console.log(target)
    this.props.delete(target[0].getAttribute("data-key"));
  },
  render: function() {
    return (
      <ul id="selected-currents" className="browser-default">
        {this.currentsList()}
      </ul>
    )
  }
});