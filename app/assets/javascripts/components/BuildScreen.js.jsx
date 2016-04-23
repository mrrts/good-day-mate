var BuildScreen = React.createClass({
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
