var Stream = React.createClass({
  //getInitialCurrentList: this.props.currents.map(function (current, i){
  //  return <Current {...current} key={i}/>
  // }),
  getInitialState: function(){
    return {
      currentList: 'hello' // this.getInitialCurrentList
    }
  },
  render: function(){
    return (
      <div className='container'>
        {this.state.currentList}
      </div>
    )
  }
})
