var Tracker = React.createClass({
  render: function(){
    return (
      <div className="card-content">
        <span className="card-title">Tracker: {this.props.label}</span>
        <div className="tracker">
          <form>
            <div className="input-field">
              <input name="value" placeholder={this.props.unit} />
              <input type="submit" name="Save" />
            </div>
          </form>
        </div>
      </div>
      )
  }
});
