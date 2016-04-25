var SelectedCurrents = React.createClass({
  currentsList: function () {
    return this.props.currentList.map(function(current, i) {

      return (
          <li className="card" data-key={i} key={i}>
            {current.label} <a className="" onClick={this.closeButton}> <i className=" tiny material-icons">close</i></a>
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
      <ul className="browser-default">
        {this.currentsList()}
      </ul>
    )
  }

})
