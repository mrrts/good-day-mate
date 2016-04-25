var BuildScreen = React.createClass({
  getInitialState: function() {
    return {
      availableCurrents: [],
      selectedCurrents: []
    }
  },
  componentDidMount: function() {
    $.get("/includables/index", function(response){
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
  render: function () {
    // console.log(this.state.availableCurrents)
    return (
      <div className="container flow-text">
        <SelectedCurrents currentList={this.state.selectedCurrents} delete={this.handleDelete} />
        <div className="divider"></div>
        
        <CurrentMenu />

        <CurrentSelector
          onChange={this.handleSelectChange}
          currentList={this.state.availableCurrents} />
        <div id="currents-save-button" className='container valign-wrapper'>
          <div className="valign center-align">
            <a className="save-button btn-large waves-effect waves-light" onClick={this.handleSaveClick} >Save</a>
          </div>
        </div>
      </div>
    )
  }
});
