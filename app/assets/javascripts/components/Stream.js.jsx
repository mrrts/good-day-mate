var Stream = React.createClass({
  getInitialState: function(){
    return {
      currentList: []
    }
  },
  componentDidMount: function() {
    $.get('/streams/1', function(resp) {
      this.setState

        currentList: makeCurrentCards(resp)
      });
    }.bind(this));
  },
  makeCurrentCards: function(objCollection) {
    return objCollection.map(function(current, i) {
      return <Current {...current} key={i} />
    });
  },
  render: function(){
    return (
      <div className='container'>
        {this.state.currentList}
      </div>
    )
  }
})
