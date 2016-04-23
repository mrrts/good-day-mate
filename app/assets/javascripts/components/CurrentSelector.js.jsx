var CurrentSelector = React.createClass({
  getAvailableCurrents: function () {
    // return this.props.availableCurrents.map(function(availableCurrent) {
    //   return (
    //     <option label={this.props.name}></option>
    //   )
    // })
  },
  render: function () {
    return (
      <select>
        {this.getAvailableCurrents()}
      </select>
    )
  }
});
