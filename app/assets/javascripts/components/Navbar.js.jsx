var Navbar = React.createClass({
	handleHomeClick: function() {
		this.props.onUpdate('home')
	},
  handleLogoutClick: function() {
   	$.get('/logout', function(resp) {
   		this.props.onUpdate('home', {loggedIn: false, userId: undefined})
   	}.bind(this));
  },
  componentDidMount: function() {
  	$(".button-collapse").sideNav({
	    edge: 'right',
	    closeOnClick: true
	  });
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
			        <li><a onClick={this.handleLogoutClick} >Logout</a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			        <li><a onClick={this.handleHomeClick} >Home</a></li>
			        <li><a onClick={this.handleLogoutClick} >Logout</a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
});
