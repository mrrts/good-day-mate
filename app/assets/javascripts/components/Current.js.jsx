var Current = React.createClass({
  getCurrentComponent: function(){
    switch(this.props.current_type) {
      case 'News':
        return <News {...this.props} />
      case 'Placeholder':
        return <Placeholder {...this.props} />
      case 'Journal':
        return <Journal {...this.props} />
      case 'Timer':
        return <Timer {...this.props} />
      case 'Tracker':
        return <Tracker {...this.props} />
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
