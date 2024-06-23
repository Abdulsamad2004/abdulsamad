function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let cols = 10;
  let rows = 10;
  let diameter = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * diameter + diameter / 2;
      let y = j * diameter + diameter / 2;
      
      let size = random(diameter * 0.4, diameter * 0.8);
      let angle = random(TWO_PI);
      
      push();
      translate(x, y);
      rotate(angle);
      
      if ((i + j) % 2 == 0) {
        fill(random(100, 255), random(100, 255), random(100, 255)); // Random bright colors
      } else {
        fill(random(50, 150), random(50, 150), random(50, 150)); // Random darker colors
      }
      
      ellipse(0, 0, size, size);
      pop();
    }
  }
}
