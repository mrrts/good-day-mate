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
  handleSelectChange: function (newCurrent) {
    this.setState({
      selectedCurrents: this.state.selectedCurrents.concat([newCurrent])
    });
    console.log(this.state.selectedCurrents);
  },
  render: function () {
    // console.log(this.state.availableCurrents)
    return (
      <div className="container">
        <SelectedCurrents currentList={this.state.selectedCurrents} />
        <CurrentSelector
          onChange={this.handleSelectChange}
          currentList={this.state.availableCurrents}
        />
      </div>
    )
  }
});
