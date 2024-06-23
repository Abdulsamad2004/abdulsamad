let carX = 0;

function setup() {
  createCanvas(400, 400); // Set the canvas size to 400x400 pixels
}

function draw() {
  // Background elements
  backgroundNightSky();
  drawMoon();
  drawMountains();

  // Foreground elements
  drawRoad();
  drawCar(carX, height - 50); // Adjust the car's y-position

  // Update car position
  carX += 3; // Adjust the car's speed for better visibility on a smaller canvas
  if (carX > width) {
    carX = -100; // Reset car position
  }
}

// Function to draw gradient night sky with stars
function backgroundNightSky() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 10, 50), color(0, 0, 30), inter);
    stroke(c);
    line(0, y, width, y);
  }
  
  // Draw stars
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height / 2);
    stroke(255);
    point(x, y);
  }
}

// Function to draw the moon
function drawMoon() {
  noStroke();
  fill(255, 255, 204);
  ellipse(80, 80, 50, 50);
}

// Function to draw mountains touching the road boundary
function drawMountains() {
  fill(34, 139, 34);
  triangle(50, height - 50, 150, height - 200, 250, height - 50);
  triangle(150, height - 50, 300, height - 300, 450, height - 50);
  triangle(250, height - 50, 400, height - 200, 550, height - 50);
}

// Function to draw the road
function drawRoad() {
  fill(50);
  rect(0, height - 50, width, 50);

  // Draw road lines
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < width; i += 30) {
    line(i, height - 25, i + 15, height - 25);
  }
}

// Function to draw the car
function drawCar(x, y) {
  // Draw car body
  fill(255, 0, 0);
  beginShape();
  vertex(x, y - 20);
  vertex(x + 20, y - 30);
  vertex(x + 50, y - 30);
  vertex(x + 70, y - 20);
  vertex(x + 70, y - 10);
  vertex(x, y - 10);
  endShape(CLOSE);

  // Draw windows
  fill(0);
  rect(x + 10, y - 28, 15, 10);
  rect(x + 45, y - 28, 15, 10);

  // Draw wheels
  fill(0);
  ellipse(x + 15, y - 5, 14, 14);
  ellipse(x + 55, y - 5, 14, 14);
}
