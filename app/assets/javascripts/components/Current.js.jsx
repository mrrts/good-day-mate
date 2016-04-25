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
  handleSwipedRight: function (e) {
    var $here = $(e.currentTarget);
    $here.toggle('drop', {direction: 'right'});
  },
  render: function() {
    return (
      <Swipeable onSwipedRight={this.handleSwipedRight}>
        <div className='current card flow-text'>
          {this.getCurrentComponent()}
        </div>
      </Swipeable>
    )
  }
})
