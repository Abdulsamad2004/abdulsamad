let data = [45, 70, 120, 200, 90]; // Sample data values
let colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1']; // Colors for bars
let barWidth;
let maxData;
let barHeight = 300;
let padding = 40;

function setup() {
  createCanvas(800, 600);
  
  // Calculate maximum data value
  maxData = max(data);
  
  // Calculate bar width
  barWidth = (width - 2 * padding) / data.length;
  
  // Set text properties
  textSize(16);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(50);
}

function draw() {
  background(255);
  
  // Draw bars
  for (let i = 0; i < data.length; i++) {
    // Map data value to bar height
    let h = map(data[i], 0, maxData, 0, barHeight);
    
    // Calculate position of each bar
    let x = padding + i * barWidth;
    let y = height - padding - h;
    
    // Draw bar
    fill(colors[i % colors.length]);
    rect(x, y, barWidth, h);
    
    // Display data value on top of the bar
    fill(50);
    text(data[i], x + barWidth / 2, y - 10);
  }
  
  // Display title
  textSize(24);
  text("Bar Chart", width / 2, padding / 2);
}

function mousePressed() {
  // Check if mouse is over any bar
  for (let i = 0; i < data.length; i++) {
    let x = padding + i * barWidth;
    let y = height - padding - map(data[i], 0, maxData, 0, barHeight);
    if (mouseX > x && mouseX < x + barWidth && mouseY > y && mouseY < height - padding) {
      // Randomize data value of the selected bar
      data[i] = random(20, 300);
    }
  }
}
