function preload() {
  img = loadImage('g.jpeg'); // Load the image
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  loadPixels(); // Load the pixels into the array

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // Increase the blue component
      pixels[index + 2] = min(pixels[index + 2] + 100, 255);
    }
  }

  updatePixels(); // Apply the changes to the canvas
}
