var BuildScreen = React.createClass({
  getInitialState: function() {
    return {
      availableCurrents: {},
      selectedCurrents: []
    }
  },
  componentDidMount: function() {
    $.get("/includables/index", function(response){
      console.log(response)
      this.setState({
        availableCurrents: response
      });

    }.bind(this))
  },
  handleSaveClick: function() {
    var stuff = {stuff: this.state.selectedCurrents}

    $.ajax({
      method: 'POST',
      url: '/includables',
      data: stuff,
      dataType: "json"
    }).done(function(){

    }.bind(this))
    this.props.onUpdate('goodnight')
  },
  handleSelectChange: function (newCurrent) {
    this.setState({
      selectedCurrents: this.state.selectedCurrents.concat([newCurrent])
    });
  },
  handleDelete: function(i) {
    this.state.selectedCurrents.splice(i, 1)
    this.setState({
      selectedCurrents: this.state.selectedCurrents
    });
  },
  handleSelectCurrent: function (e) {
    var $clicked = $(e.currentTarget);
    console.log($clicked);
    var includableType = $clicked.attr('data-includable-type');
    var includableId = $clicked.attr('data-includable-id');
    var includableLabel = $clicked.attr('data-includable-label');
    var newCurrent = {
      includable_type: includableType,
      includable_id: includableId,
      label: includableLabel
    }
    this.setState({
      selectedCurrents: this.state.selectedCurrents.concat([newCurrent])
    });
    console.log(this.state.selectedCurrents);
  },
  getSaveButton: function () {
    if (this.state.selectedCurrents.length > 0) {
      return (
        <div id="currents-save-button" className='container valign-wrapper'>
          <div className="valign center-align">
            <a className="save-button btn-large waves-effect waves-light" onClick={this.handleSaveClick} >Save</a>
          </div>
        </div>
        );
    } else {
      return (<div></div>);
    }
  },
  handleCustomCurrent: function(stuff) {
    var newCurrent = {
      includable_type: stuff.type,
      label: stuff.label,
      custom: true,
      data: stuff.data
    }
    this.setState({
      selectedCurrents: this.state.selectedCurrents.concat([newCurrent])
    });
    console.log(this.state.selectedCurrents)
  },
  render: function () {
    // console.log(this.state.availableCurrents)
    return (
      <div id="build-screen" className="container flow-text">
        <h4>Build My Morning Stream</h4>
        <SelectedCurrents currentList={this.state.selectedCurrents} delete={this.handleDelete} />

        {this.getSaveButton()}

        <CurrentSelector
          onSelectCurrent={this.handleSelectCurrent}
          currentList={this.state.availableCurrents}
          handleCustomCurrent={this.handleCustomCurrent} />

      </div>
    )
  }
});
