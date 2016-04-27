var CanvasClass = React.createClass({

  getInitialState: function() {
    return {

    }
  },

  componentDidMount: function() {
    setInterval(this.drawCanvas, 300)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  drawCanvas: function() {
    var canvas = document.getElementById("MyCanvas");
    var image = document.getElementById("waves-pic");
    if (canvas) {
      var ctx = canvas.getContext("2d");
      console.log(canvas.width);
      ctx.fillStyle = "#FF0000";

      ctx.drawImage(image, 0, 0, image.width, image.height);
    }
  },
  render: function() {

    return (
      <div>
      <canvas id="MyCanvas" />
      </div>
      )

  }

});
