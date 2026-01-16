function setup() {
  createCanvas(360, 360);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    background(0, 0, 255);
    fill(255, 255, 0);
  } else {
    background(200, 250, 255)

  }
  circle(width/2,height/2,200);
}
