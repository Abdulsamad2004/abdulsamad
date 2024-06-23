let img;

function preload() {
  img = loadImage('d.jpeg'); // Make sure to use a valid path to your image
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  filter(POSTERIZE, 5); // Apply the posterize filter with 5 color levels
}
