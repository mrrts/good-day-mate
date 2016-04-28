var CanvasClass = React.createClass({

  getInitialState: function() {
    return {
      ready: false
    }
  },

  componentDidMount: function() {
    setInterval(this.drawCanvas, 100)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  drawCanvas: function() {
    var canvas = document.getElementById("MyCanvas");

    if (canvas && !this.state.ready) {


      this.setState({ ready: true});
    } else if (this.state.ready) {


      if (!this.state.waves) {
        var waves = new OurWaves(canvas, canvas.width, canvas.height)
        this.setState({
          waves: waves
        })
      }

      this.state.waves.update();
      this.state.waves.draw();

    }

  },
  render: function() {

    return (
      <div>
      <canvas id="MyCanvas" width="660" height="417" />
      < /div >
      )

  }

});
