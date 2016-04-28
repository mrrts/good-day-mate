var JournalReview = React.createClass({

  getInitialState: function() {
    return {
      entries: []
    }
  },
  componentDidMount: function() {
    $.get("/journals/review", function(resp) {
      console.log(resp);
      this.setState({
        entries: resp
      })
    }.bind(this))
  },
  renderList: function() {
    return this.state.entries.map(function(entry,i ) {
      return <li key={i} className="collection-item"> {entry.content}</li>
    })
  },
  render: function () {
    return (<div>
              Here{"'"}s some things you wrote before...
              <ul className="browser-default collection">{this.renderList()}</ul>
            </div>
            )
  }
});
