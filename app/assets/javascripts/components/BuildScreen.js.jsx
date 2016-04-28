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
    var finalSelectedCurrents = []
    var currents = $('.selected-current')
    for (var i = 0; i < currents.length; i++) {
      $item = $(currents[i]);
      finalSelectedCurrents.push({
        includable_type: $item.attr('data-includable-type'),
        includable_id: $item.attr('data-includable-id'),
        order: $item.attr('data-order'),
        label: $item.attr('data-label')
      })
    }
    var stuff = {stuff: finalSelectedCurrents}
    console.log(stuff);
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
    $('#selected-currents li[data-key="'+i+'"]').remove();
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
  handleSort: function () {
    var list = $('.selected-current')
    var newList = [];
    for (var i = 0; i < list.length; i++) {
      $item = $(list[i])
      $item.attr('data-order', i);
    }
  },
  render: function () {
    // console.log(this.state.availableCurrents)
    return (
      <div id="build-screen" className="container flow-text">
        <h4>Build My Morning Stream</h4>
        <SelectedCurrents 
          currentList={this.state.selectedCurrents} 
          delete={this.handleDelete} 
          onSort={this.handleSort} />

        {this.getSaveButton()}

        <CurrentSelector
          onSelectCurrent={this.handleSelectCurrent}
          currentList={this.state.availableCurrents}
          handleCustomCurrent={this.handleCustomCurrent}
           />

      </div>
    )
  }
});
