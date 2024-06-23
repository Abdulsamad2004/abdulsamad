let img1, img2;

function preload() {
  // Load your JPEG images
  img1 = loadImage('d.jpeg');
  img2 = loadImage('h.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas the size of the window
  background(0); // Set the background to black
}

function draw() {
  background(0); // Redraw the background to keep it black
  
  let circleDiameter = 200; // Diameter of the circles
  let circleRadius = circleDiameter / 2;

  // Calculate positions
  let centerX1 = width / 2 - circleRadius - 10; // Left circle's center x position
  let centerX2 = width / 2 + circleRadius + 10; // Right circle's center x position
  let centerY = height / 2; // Both circles' center y position

  // Draw circles
  noFill(); // No fill for the circles, only outline
  stroke(255); // White outline
  strokeWeight(3); // Outline thickness
  ellipse(centerX1, centerY, circleDiameter, circleDiameter); // Left circle
  ellipse(centerX2, centerY, circleDiameter, circleDiameter); // Right circle

  // Draw images inside the circles
  imageMode(CENTER); // Center the image on the coordinates
  image(img1, centerX1, centerY, circleDiameter - 10, circleDiameter - 10); // Left image
  image(img2, centerX2, centerY, circleDiameter - 10, circleDiameter - 10); // Right image
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size when window is resized
}
