var SelectedCurrents = React.createClass({
  currentsList: function () {
    return this.props.currentList.map(function(current, i) {

      return (
          <li className="selected-current card" 
            data-key={i} 
            key={i}
            data-includable-type={current.includable_type}
            data-includable-id={current.includable_id}
            data-label={current.label}
            data-order={current.order || -1}
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
    target = $(e.target).closest("li");
    console.log(target)
    this.props.delete(target[0].getAttribute("data-key"));
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
