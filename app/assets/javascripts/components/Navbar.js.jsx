var Navbar = React.createClass({
	handleHomeClick: function() {
		this.props.onUpdate('home')
	},
  handleLoginClick: function(){
  	this.props.onUpdate('login')
  },
	render: function () {
		return (
			<div className="navbar-fixed">
				<nav id="main-nav">
			    <div className="nav-wrapper">
			      <Logo />
			      <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        <li><a onClick={this.handleHomeClick} >Home</a></li>
			        <li><a onClick={this.handleLoginClick} >Login</a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			        <li><a onClick={this.handleHomeClick} >Home</a></li>
			        <li><a onClick={this.handleLoginClick} >Login</a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
});
