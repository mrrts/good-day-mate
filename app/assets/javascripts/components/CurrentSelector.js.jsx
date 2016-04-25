var CurrentSelector = React.createClass({
  getInitialState: function () {
    return {}
  },
  optionsList: function () {
    var list = [];
    var i = 0;
    for(prop in this.props.currentList) {
      list.push(
        <div className="col s4 center" key={i}>
          <a className="btn-floating btn-large waves-effect waves-light yellow darken-2"><i className="material-icons">add</i></a>

        </div>
        )
      i++;
    }
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
        <div className="row">
          {this.optionsList()}
        </div>
    )
  }
});
