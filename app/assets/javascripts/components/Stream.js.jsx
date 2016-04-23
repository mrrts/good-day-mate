var Stream = React.createClass({
  getInitialState: function(){
    return {
      currentList: []
    }
  },
  componentDidMount: function() {
    $.get('/streams/1', function(resp) {
      console.log(resp);
      this.setState({
        currentList: this.makeCurrentCards(resp)
      });
    }.bind(this));
  },
  makeCurrentCards: function(objCollection) {
    return objCollection.map(function(current, i) {
      return <Current {...current} key={i} />
    });
  },
  render: function(){
    console.log("Hi");
    console.log(this.state.currentList);
    return (
      <div className='container'>
        {this.state.currentList}
      </div>
    )
  }
})
