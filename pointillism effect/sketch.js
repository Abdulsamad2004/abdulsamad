let img;

function preload() {
  // Load the image
  img = loadImage('f.jpeg'); // Replace with your image path
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop(); // Ensures draw() is called only once
}

function draw() {
  background(255); // White background
  img.loadPixels(); // Load image pixels for manipulation
  
  // Parameters for dot size and density
  let dotSize = 5; // Size of the dots
  let density = 50000; // Number of dots, adjust for effect
  
  for (let i = 0; i < density; i++) {
    // Randomly pick a position in the image
    let x = int(random(img.width));
    let y = int(random(img.height));
    
    // Get the color of the pixel at the random position
    let c = img.get(x, y);
    
    // Set the fill color to the color of the pixel
    fill(c);
    
    // Draw a circle at the random position
    noStroke();
    ellipse(x, y, dotSize, dotSize);
  }
}
