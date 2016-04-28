 var Logo = React.createClass({
  getIcon: function () {
    var s = this.props.screen;
    if (s==="goodnight" || s==="evening" || s==="build") {
        return <MoonIcon />
    } else {
        return <SunIcon />
    }
  },
  render: function () {
    return (
        <div className="brand-logo">
            {this.getIcon()}
        </div>
    )
  }
})
