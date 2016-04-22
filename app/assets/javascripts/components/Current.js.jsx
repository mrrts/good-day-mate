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
  render: function() {
    return (
      <div className='collection-item dismissable card flow-text'>
        {this.getCurrentComponent()}
      </div>
    )
  }
})
