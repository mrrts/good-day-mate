var SelectedCurrents = React.createClass({
  currentsList: function () {
    return this.props.currentList.map(function(current, i) {
      return (
          <li className="card" key={i}>
            {current.label}
          </li>
      )
    });
  },
  render: function() {
    return (
      <ul className="browser-default">
        {this.currentsList()}
      </ul>
    )
  }

})
