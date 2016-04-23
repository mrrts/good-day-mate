var Current = React.createClass({
  getCurrentComponent: function(){
    switch(this.props.currentType) {
      case 'News':
        return <News topic={this.props.topic}/>
      case 'Placeholder':
        return <Placeholder label={this.props.label} />
      case 'Journal':
        return <Journal />
    }
  },
  handleTouchMove: function (e) {
    console.log('onTouchMove begun');
    //e.preventDefault();
  },
  render: function() {
    return (
      <div onTouchMove={this.handleTouchMove}>
        <div className='card flow-text'>
          {this.getCurrentComponent()}
        </div>
      </div>
    )
  }
})
