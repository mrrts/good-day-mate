var Stream = React.createClass({
  getInitialCurrentList: function(){
    return this.props.currents.map(function (current, i){
      return <Current {...current} key={i}/>
    })
  },
  getInitialState: function(){
    console.log(this.getInitialCurrentList())
    return {
      currentList: this.getInitialCurrentList()
    }
  },
  render: function(){
    return (
      <div className='container'>
        <div id="slider" className="swipe"> 
          <div className="swipe-wrap">
            {this.state.currentList}
          </div>
        </div>
      </div>
    )
  }
})
