
var canvas = document.getElementById('myCanvas');

var rectangle = canvas.getContext('2d');
var x = canvas.x;
var y = canvas.y;
x = 0;
y = 10;
var r = 199;
  var g = 79;
  var b = 120;
 
var rectangleColor = 'rgb(199,79,120)'; 

function draw() {
rectangle.fillStyle= rectangleColor;
rectangle.fillRect(x,y,30, 22);
}


for (var i = 0; i < 26; i++) {
  x += 35;
  r -= 7;
  draw();
  if (i==5) {
    y += 25;
    x = 35;
    draw();
  }
  if (i==10) {
    y += 25;
    x = 35;
    draw();
  }
  if (i==15) {
    y += 25;
    x = 35;
    draw();
  }
  if (i==20) {
    y += 25;
    x = 35;
    draw();
  }
  if (i==26) {
    y += 25;
    x = 35;
    draw();
  }
   var rectangleColor = 'rgb(' + r + ',' + g + ',' + b + ')';
   
}