var SelectedCurrents = React.createClass({
  currentsList: function () {
    return this.props.currentList.map(function(current, i) {

      return (
          <li className="selected-current card" 
            data-key={current.includable_type + current.includable_id + current.label + i} 
            key={current.includable_type + current.includable_id + current.label + i}
            data-includable-type={current.includable_type}
            data-includable-id={current.includable_id}
            data-label={current.label}
            data-order={current.order || -1}
            data-custom={current.custom || false}
            data-data={current.data || "none"}
            >
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
    var target = $(e.currentTarget).closest("li");
    console.log('target', $(target).attr("data-key"))
    this.props.delete($(target).attr("data-key"));
  },
  handleSort: function () {
    this.props.onSort();
  },
  componentDidMount: function () {
    Sortable.create(document.getElementById('selected-currents'), {
      draggable: '.selected-current',
      onSort: this.handleSort
    })
  },
  componentDidUpdate: function () {
    
  },
  render: function() {
    return (
      <ul id="selected-currents" className="browser-default">
        {this.currentsList()}
      </ul>
    )
  }
});
