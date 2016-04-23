var MorningScreen = React.createClass({
  render: function () {
    return (
      <Stream currents={this.props.currents} />
    )
  }
});