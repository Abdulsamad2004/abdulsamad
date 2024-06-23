function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(200);

  // Draw the alien's body
  fill(100, 255, 100);
  ellipse(width / 2, height / 2 + 50, 100, 150);

  // Draw the alien's head
  fill(100, 255, 100);
  ellipse(width / 2, height / 2 - 50, 80, 100);

  // Draw the alien's eyes
  fill(255);
  ellipse(width / 2 - 20, height / 2 - 60, 20, 30);
  ellipse(width / 2 + 20, height / 2 - 60, 20, 30);

  // Draw the alien's pupils
  fill(0);
  ellipse(width / 2 - 20, height / 2 - 60, 10, 15);
  ellipse(width / 2 + 20, height / 2 - 60, 10, 15);

  // Draw the alien's antennas
  stroke(100, 255, 100);
  strokeWeight(5);
  line(width / 2 - 20, height / 2 - 100, width / 2 - 40, height / 2 - 150);
  line(width / 2 + 20, height / 2 - 100, width / 2 + 40, height / 2 - 150);
  
  // Draw the alien's antenna tips
  fill(255, 0, 0);
  ellipse(width / 2 - 40, height / 2 - 150, 10, 10);
  ellipse(width / 2 + 40, height / 2 - 150, 10, 10);

  // Draw the alien's mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(width / 2, height / 2 - 30, 40, 20, 0, PI);
}
