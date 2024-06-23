let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255); // Clear background
  
  // Move every point in the trail array
  for (let i = 0; i < trail.length; i++) {
    trail[i].update();
    trail[i].display();
  }
  
  // Add new point to the trail array
  trail.push(new TrailPoint(mouseX, mouseY));
  
  // Limit the number of points in the trail array
  if (trail.length > 50) {
    trail.splice(0, 1);
  }
}

// TrailPoint class definition
class TrailPoint {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3)); // Random velocity
    this.alpha = 255; // Initial alpha value for fading effect
    this.size = random(20, 40); // Random size of the shape
    this.color = color(random(100, 255), random(100, 255), random(100, 255), 200); // Random color with alpha
    this.lifeSpan = 255; // Lifespan of the shape
  }
  
  // Update method to update position and properties
  update() {
    this.pos.add(this.vel); // Update position based on velocity
    this.alpha -= 1.5; // Fade out effect
    this.size -= 0.5; // Decrease size over time
    this.lifeSpan -= 2; // Decrease lifespan
  }
  
  // Display method to draw the shape
  display() {
    let r = red(this.color);
    let g = green(this.color);
    let b = blue(this.color);
    let a = this.alpha;
    
    // Apply gradient fill
    for (let i = 0; i < this.size; i++) {
      let inter = map(i, 0, this.size, 0, 1);
      let col = color(r, g, b, a * inter);
      fill(col);
      ellipse(this.pos.x, this.pos.y, this.size - i);
    }
  }
}
