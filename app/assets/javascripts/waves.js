
function Wave($canvas, $y, $colour) {
  this.ctx = $canvas.getContext("2d");
  this.force = 0;
  this.wavePower = 40;
  this.count = $y;
  this.y = $y + Waves.globalY;
  this.alpha = 0.1;
  this.update = function() {
    this.y = $y + Waves.globalY;
    this.force = Math.sin(this.count);
    this.count += 0.05;

  }
  this.draw = function() {
    this.ctx.clearRect(0, 0, Waves.width,Waves.height);
    this.ctx.fillStyle = "rgba(49, 150, 207, 0.81)";
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.y);
    this.ctx.quadraticCurveTo(Waves.width / 4, this.y + ( this.wavePower * this.force ), Waves.width / 2, this.y);
    this.ctx.quadraticCurveTo(Waves.width * 0.75, this.y - ( this.wavePower * this.force ), Waves.width, this.y);
    this.ctx.lineTo(Waves.width, Waves.height);
    this.ctx.lineTo(0, Waves.height);
    this.ctx.lineTo(0, this.y);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

function Waves($canvas, $width, $height) {
  this.numberOfWaves = 10;
  this.waveGap = 20;
  this.width = Waves.width = $width;
  this.height = Waves.height = $height;
  Waves.globalY = 175;
  this.move = .01;
  this.ctx = $canvas.getContext( '2d' );
  this.colour = 0+", "+45+", "+179;
  this.wavesArray = new Array();
  this.beginingY = Waves.height / 4;
  while(this.numberOfWaves--){
    this.wavesArray.push(new Wave($canvas, this.beginingY, this.colour));
    this.beginingY += this.waveGap;
  }

  this.update = function(){
    var bL = this.wavesArray.length;

    while( bL-- ){ this.wavesArray[ bL ].update( );

       }

  }
  this.draw = function(){
    this.ctx.save();
    var bL = this.wavesArray.length;
    while( bL-- ){

    this.wavesArray[ bL ].draw( );     }
    this.ctx.restore(); }

}

