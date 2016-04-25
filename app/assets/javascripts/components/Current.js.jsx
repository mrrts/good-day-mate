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
  handleSwipeRight: function (e) {
    var $here = $(e.initialTouch.target).closest('div.card');
    $here.toggle('drop', {direction: 'right'});
  },
  render: function() {
    return (
      <Swiper onSwipeRight={this.handleSwipeRight}>
        <div className='card flow-text'>
          {this.getCurrentComponent()}
        </div>
      </Swiper>
    )
  }
})
