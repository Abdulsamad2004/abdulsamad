let textX, textY; // Text position variables
let fontSize = 60; // Font size
let textColor; // Text color
let bgColor; // Background color
let directionX = 1; // Direction of movement on X-axis
let directionY = 1; // Direction of movement on Y-axis

function setup() {
  createCanvas(600, 400);
  textX = width / 2; // Initial x position
  textY = height / 2; // Initial y position
  textColor = color(255); // Initial text color (white)
  bgColor = color(0, 150, 200); // Background color (blue)
  textAlign(CENTER, CENTER); // Center align text
  textSize(fontSize); // Set text size
}

function draw() {
  background(bgColor); // Draw background

  // Update text position
  textX += 2 * directionX; // Move text horizontally
  textY += 2 * directionY; // Move text vertically

  // Change text color randomly
  let r = random(100, 255);
  let g = random(100, 255);
  let b = random(100, 255);
  textColor = color(r, g, b);

  // Boundary check for text position
  if (textX <= 0 || textX >= width) {
    directionX *= -1; // Reverse direction on X-axis
  }
  if (textY <= 0 || textY >= height) {
    directionY *= -1; // Reverse direction on Y-axis
  }

  fill(textColor); // Set text fill color
  text("Bath Spa", textX, textY); // Draw text
}

function mousePressed() {
  // Change background color on mouse click
  let newBgColor = color(random(50, 150), random(100, 200), random(150, 255));
  bgColor = newBgColor;
}
