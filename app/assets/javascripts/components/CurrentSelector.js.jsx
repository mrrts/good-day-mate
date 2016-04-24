var CurrentSelector = React.createClass({
  getInitialState: function () {
    return {}
  },
  optionsList: function () {
    var list = this.props.currentList.map(function(current, i) {
      console.log(current)
      return (
        <option key={i}>
            {current.label}
        </option>
        )
    });
    console.log(list);
    return list;
  },
  render: function () {
    return (
      <select className="browser-default">
        {this.optionsList()}
      </select>
    )
  }
});
