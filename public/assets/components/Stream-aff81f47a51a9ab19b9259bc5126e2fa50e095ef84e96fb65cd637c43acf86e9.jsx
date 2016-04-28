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
        currentList: resp
      });
      testVariable = this.state.currentList;
      $('#main-loader').fadeOut();
    }.bind(this));

  },
  makeCurrentCards: function(objCollection) {
    return objCollection.map(function(current, i) {
      return <Current data-key={i}  onUpdate={this.props.onUpdate} {...current} key={i} />
    }.bind(this));
  },

  render: function(){
    return (
      <div id="stream" className='container'>
        {this.makeCurrentCards(this.state.currentList)}
      </div>
    )
  }
})
