var CurrentSelector = React.createClass({
  getInitialState: function () {
    return {}
  },
  optionsList: function () {
    var list = this.props.currentList.map(function(current, i) {
      // console.log(current)
      return (
        <option
          data-includable-id={current.id}
          data-includable-type={current.includable_type}
          key={i}>
            {current.label}
        </option>
        )
    });
    // console.log(list);
    return list;
  },
  handleChange: function (e) {
    var $selectBox = $(e.target)
    var includable_id = $selectBox.find('option:selected').attr('data-includable-id');
    var includable_type = $selectBox.find('option:selected').attr('data-includable-type');
    var label = $selectBox.find('option:selected').val();
    this.props.onChange({
      includable_type: includable_type,
      includable_id: includable_id,
      label: label
    });
    $selectBox.val('null');
  },
  render: function () {
    return (
      <select defaultValue="null" onChange={this.handleChange} className="browser-default">
        {this.optionsList()}
        <option value="null" disabled>Add a Current:</option>
      </select>
    )
  }
});
