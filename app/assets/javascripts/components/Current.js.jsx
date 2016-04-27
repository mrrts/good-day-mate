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
      case 'Podcast':
        return <Podcast {...this.props} />
      case 'PhotoCollection':
        return <Photo {...this.props} />
      case 'Return Button':
        return (<p>You need to end your day or build a stream first.
              <a className="btn valign "onClick={this.buildClick}>Build</a>
                </p>)
      case 'Good Day':
        return (<p className="valign"> <strong> Have a Good Day, Mate! </strong> </p>)
    }
  },
  buildClick: function() {
    console.log("hey hey haaaaay")
    this.props.onUpdate("build");
  },
  handleSwipedRight: function (e) {
    var $here = $(e.currentTarget);
    $here.toggle('drop', {direction: 'right'});
  },
  render: function() {
    return (
      <Swipeable key={this.props.key} onSwipedRight={this.handleSwipedRight}>
        <div className='current card flow-text'>
          {this.getCurrentComponent()}
        </div>
      </Swipeable>
    )
  }
})
