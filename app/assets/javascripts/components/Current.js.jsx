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
      <div>
      <div className='collection-item dismissable card flow-text'>
        {this.getCurrentComponent()}
      </div>
      <ul className="collection">
        <li className="collection-item dismissable"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item dismissable"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item dismissable"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item dismissable"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      </ul>
    </div>
    )
  }
})
