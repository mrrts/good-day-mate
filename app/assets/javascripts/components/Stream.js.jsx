var Stream = React.createClass({
  getInitialState: function(){
    return {
      currentList: []
    }
  },
  componentDidMount: function() {
    $('#main-loader').show();
    $.get('/streams/show', function(resp) {
      this.setState({
        currentList: this.makeCurrentCards(resp)
      });
      $('#main-loader').fadeOut();
    }.bind(this));
  },
  makeCurrentCards: function(objCollection) {
    return objCollection.map(function(current, i) {
      return <Current {...current} key={i} />
    }.bind(this));
  },
  render: function(){
    return (
      <div id="stream" className='container'>
        {this.state.currentList}
      </div>
    )
  }
})
