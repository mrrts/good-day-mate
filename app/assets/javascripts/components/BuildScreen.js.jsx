var BuildScreen = React.createClass({
  getInitialState: function() {
    return {}
  },
  componentDidMount: function() {
    $.get("/includables/index", function(response){

    })
  },
  handleSelectChange: function (e) {
    console.log(e);
  },
  render: function () {
    return (
      <div>
        <SelectedCurrents currentList={this.state.currentList} />
        <CurrentSelector
          onChange={this.handleSelectChange}
          availableCurrents={this.props.availableCurrents}
        />
      </div>
    )
  }
});
