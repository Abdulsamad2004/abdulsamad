let customFont;

function preload() {
  customFont = loadFont('p.ttf');
}

function setup() {
  createCanvas(800, 400);
  background(255);
  
  // Create a gradient background
  setGradient(0, 0, width, height, color(255, 200, 200), color(200, 200, 255), "Y");

  // Set text properties
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  
  // Add a style to the text
  textStyle(BOLD);
  textFont(customFont); // Use the custom TTF font
  
  // Draw the text with a shadow
  drawTextWithShadow("Baths Spa", width / 2, height / 2, color(0, 0, 0, 50), 10);
}

function draw() {
  // Drawing code goes here
}

function drawTextWithShadow(txt, x, y, shadowColor, shadowOffset) {
  fill(shadowColor);
  text(txt, x + shadowOffset, y + shadowOffset);
  fill(255);
  text(txt, x, y);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis === "Y") {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === "X") {
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
