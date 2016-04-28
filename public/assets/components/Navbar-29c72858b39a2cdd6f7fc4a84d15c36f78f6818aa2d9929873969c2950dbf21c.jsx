var Navbar = React.createClass({
  getInitialState: function() {
    return {
      music: false
    }
  },
	handleHomeClick: function() {
		this.props.onUpdate('home')
	},
  handleLogoutClick: function() {
   	$.get('/logout', function(resp) {
   		this.props.onUpdate('login', {loggedIn: false, userId: undefined})
   	}.bind(this));
  },
  componentDidMount: function() {
  	$(".button-collapse").sideNav({
	    edge: 'right',
      menuWidth: 150,
	    closeOnClick: true
	  });
    this.bindModalTriggers();
  },
  componentWillUpdate: function () {
    this.bindModalTriggers();
  },
  bindModalTriggers: function () {
    setTimeout(function(){
      $('.modal-trigger').leanModal();
    }, 800)
  },
  getLinksForLoggedInUser: function () {
    if (this.props.loggedIn === true) {
      return (
        <div>
          <li><a onClick={this.handleLogoutClick} ><i id='logout-icon' className="fa fa-sign-out" aria-hidden="true"></i></a></li>
          <li><a className='modal-trigger' href='#bottle-message-modal'><i className="material-icons">create</i></a></li>
          <li  ><a><i onClick={this.toggleMusic}  className="material-icons music-button">volume_mute</i></a></li>
        </div>
        )
    } else {
      return ""
    }
  },
  toggleMusic: function () {
    console.log("Music!")
    if (this.state.music)
    {
      document.getElementById("ambient-sounds").pause()
      $(".music-button").text("volume_mute");

    } else {
      document.getElementById("ambient-sounds").play()
      document.getElementById("ambient-sounds").loop = true;
      $(".music-button").text("volume_up");
    }

    this.setState({
      music: !this.state.music
    })

  },
	render: function () {
		return (
			<div className="navbar-fixed">
				<nav id="main-nav">
			    <div className="nav-wrapper">
			      <Logo screen={this.props.screen} />
			      <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        <li><a onClick={this.handleHomeClick} ><i id='home-icon' className="material-icons">home</i></a></li>
			        {this.getLinksForLoggedInUser()}

			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			        <li><a onClick={this.handleHomeClick} ><i id='home-icon' className="material-icons">home</i></a></li>
			        {this.getLinksForLoggedInUser()}
			      </ul>
			    </div>
			  </nav>
        <audio id="ambient-sounds" preload="auto">
          <source src="/assets/Heaven_Be_Here-499655e6ccb76b17e9eb7cbb6e820cb389a0ff82faccfbc4b0c707e8f7b801d6.mp3" type="audio/mpeg" />
        </audio>
			</div>
		)
	}
});
