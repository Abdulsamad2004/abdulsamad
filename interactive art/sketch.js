let player;
let fallingObjects = [];
let score = 0;
let gameOver = false;
let bgColor;
let catchSound, gameOverSound;

function preload() {
  // Load sound files
  catchSound = loadSound('catch.wav'); // Add your sound file path
  gameOverSound = loadSound('gameover.wav'); // Add your sound file path
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
  bgColor = color(255);
}

function draw() {
  background(bgColor);
  updateBackground();

  if (!gameOver) {
    player.update();
    player.display();

    if (frameCount % 30 === 0) {
      fallingObjects.push(new FallingObject());
    }

    for (let i = fallingObjects.length - 1; i >= 0; i--) {
      fallingObjects[i].update();
      fallingObjects[i].display();

      if (fallingObjects[i].hits(player)) {
        score++;
        catchSound.play();
        fallingObjects.splice(i, 1);
      } else if (fallingObjects[i].offScreen()) {
        gameOver = true;
        gameOverSound.play();
      }
    }

    fill(0);
    textSize(32);
    text("Score: " + score, 10, 30);
  } else {
    fill(0);
    textSize(32);
    text("Game Over", width / 2 - 80, height / 2);
    text("Final Score: " + score, width / 2 - 100, height / 2 + 40);
    text("Press 'R' to Restart", width / 2 - 120, height / 2 + 80);
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    resetGame();
  }
}

function resetGame() {
  score = 0;
  gameOver = false;
  fallingObjects = [];
  player = new Player();
  bgColor = color(255);
}

function updateBackground() {
  if (score >= 50) {
    bgColor = color(100, 100, 250);
  } else if (score >= 30) {
    bgColor = color(150, 200, 250);
  } else if (score >= 10) {
    bgColor = color(200, 250, 200);
  } else {
    bgColor = color(255);
  }
}

class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width / 2 - this.width / 2;
    this.y = height - this.height - 10;
    this.speed = 7;
  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width) {
      this.x += this.speed;
    }
  }

  display() {
    fill(50, 100, 200);
    rect(this.x, this.y, this.width, this.height);
  }
}

class FallingObject {
  constructor() {
    this.size = 20;
    this.x = random(width - this.size);
    this.y = 0;
    this.speed = random(2, 5);
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(200, 50, 50);
    ellipse(this.x, this.y, this.size);
  }

  hits(player) {
    return (this.x > player.x && this.x < player.x + player.width) &&
           (this.y + this.size / 2 > player.y && this.y < player.y + player.height);
  }

  offScreen() {
    return this.y > height;
  }
}
