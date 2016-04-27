var MorningScreen = React.createClass({
  render: function () {
    return (
      <Stream onUpdate={this.props.onUpdate} currents={this.props.currents} />
    )
  }
});
