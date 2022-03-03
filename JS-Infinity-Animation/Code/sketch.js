function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES)
}

function windowResized() {
  setup();
}
function draw() {
  background(30);
  noFill()
  rotateX(60)

  stroke(255)
  for (var i = 0; i < 80; i++) {


    var r = map(sin(frameCount / 2), -1, 1, 500, 100)
    var g = map(1, 0, 255, 100, 200)
    var b = map(cos(frameCount), -1, 1, 300, 100)

    stroke(r, g, b)

    beginShape()
    for (var j = 0; j <= 360; j += 5) {

      var rad = i * 2;
      var x = rad * cos(j) * 1.5
      var y = rad * sin(j * 2)
      var z = cos(cos(frameCount * 20 + i * 10) * 100) * 30

      vertex(x, y, z)
    }
    endShape(CLOSE)

  }

}