var BuildScreen = React.createClass({
  getInitialState: function() {
    return {
      availableCurrents: []
    }
  },
  componentDidMount: function() {
    $.get("/includables/index", function(response){
      this.setState({
        availableCurrents: response
      });
    }.bind(this))
  },
  handleSelectChange: function (e) {
    console.log(e);
  },
  render: function () {
    console.log(this.state.availableCurrents)
    return (
      <div className="container">
        <SelectedCurrents currentList={this.state.currentList} />
        <CurrentSelector
          onChange={this.handleSelectChange}
          currentList={this.state.availableCurrents}
        />
      </div>
    )
  }
});
