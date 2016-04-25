var CurrentSelector = React.createClass({
  getInitialState: function () {
    return {}
  },
  categoryList: function () {
    var list = [];
    var i = 0;
    for(prop in this.props.currentList) {
      list.push(
        <div key={i}>
          <div className="col s4 center">
            <a href={'#modal-' + prop} className="btn-floating btn-large waves-effect waves-light yellow darken-4 modal-trigger"><i className="material-icons">add</i></a>
            <p>{prop}</p>
          </div>
          <div className="modal" id={"modal-" + prop}>
            <div className="modal-content">
              <h5>Choose a {prop}:</h5>
              <ul className="collection">
                {this.currentsInCategory(this.props.currentList[prop])}
              </ul>
            </div>
          </div>
        </div>
        )
      i++;
    }
    // console.log(list);
    return list;
  },
  currentsInCategory: function (currentsArray) {
    return currentsArray.map(function(current, i) {
      return (
          <div key={i} className="card-panel">
            <a className="btn-floating blue">
              <i className="material-icons">add</i>
            </a>{current.label}
          </div>
        )
    });
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
  findModals: function() {
    setTimeout(function(){
      $('.modal-trigger').leanModal()
    }, 1000);
  },
  render: function () {
    return (
        <div id="current-selector" className="row">
          <h5>Add a Current:</h5>
          {this.categoryList()}
          {this.findModals()}
        </div>
    )
  }
});
