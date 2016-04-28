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
            <a href={'#modal-' + prop} className="category-add-button btn-floating btn-large waves-effect waves-light modal-trigger"><i className="material-icons">add</i></a>
            <p className="category-add-label">{prop}</p>
          </div>
          <div className="modal" id={"modal-" + prop}>
            <div className="modal-content">
              <h5>Choose a {prop}:</h5>
              <ul className="collection">
                {this.newCurrentForm(prop)}
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
  handleAddButtonClick: function (e) {
    this.props.onSelectCurrent(e);
    $clicked = $(e.currentTarget);
    $itsModal = $($clicked.closest('.modal'));
    $itsModal.closeModal();
  },
  newCurrentForm: function(prop) {
    switch(prop) {
      case "Placeholder":
        return (<CustomForm type={prop}  handleCustomCurrent={this.props.handleCustomCurrent} />)
        break;
      case "Timer":
        return (<CustomForm type={prop}  handleCustomCurrent={this.props.handleCustomCurrent} />)
        break;
      case "Tracker":
        return (<CustomForm type={prop}  handleCustomCurrent={this.props.handleCustomCurrent} />)
        break;
      default:
        return (<p></p>)
    }

  },
  currentsInCategory: function (currentsArray) {
    return currentsArray.map(function(current, i) {
      return (
          <div key={i + 1} className="card-panel valign-wrapper">
            <a
              data-includable-id={current.id}
              data-includable-type={current.includable_type}
              data-includable-label={current.label}
              onClick={this.handleAddButtonClick}
              className="valign current-add-button btn-floating"
              >
                <i className="material-icons">add</i>
            </a>
            <p className="valign current-add-label">
              {current.label}
            </p>
          </div>
        )
    }.bind(this));
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
    $('.modal-trigger').leanModal();
  },
  componentDidMount: function () {
    setTimeout(function() {
      this.findModals();
    }.bind(this), 800);
  },
  render: function () {
    return (
        <div id="current-selector">
          <div className="card">
            <div className="card-content row">
              <h5>Add Some Currents:</h5>
              {this.categoryList()}
            </div>
          </div>
        </div>
    )
  }
});
