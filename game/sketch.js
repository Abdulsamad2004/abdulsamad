let player;
let aliens = [];
let lasers = [];
let powerUps = [];
let score = 0;
let level = 1;
let maxLevel = 5;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  player = new Player();
  startLevel();
}

function draw() {
  background(0);
  displayHUD();

  player.display();
  player.move();

  handleLasers();
  handleAliens();
  handlePowerUps();

  if (aliens.length === 0 && level < maxLevel) {
    level++;
    startLevel();
  } else if (aliens.length === 0 && level === maxLevel) {
    winGame();
  }
}

function displayHUD() {
  fill(255);
  noStroke();
  textSize(16);
  text(`Score: ${score}  Level: ${level}`, 10, 25);
}

function startLevel() {
  aliens = [];
  let rows = level + 2;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < rows; j++) {
      aliens.push(new Alien(80 + i * 60, 40 + j * 60));
    }
  }
}

function handleLasers() {
  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].display();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
      for (let j = aliens.length - 1; j >= 0; j--) {
        if (lasers[i].hits(aliens[j])) {
          score += 10;
          if (random(1) < 0.1) {
            powerUps.push(new PowerUp(aliens[j].x, aliens[j].y));
          }
          aliens.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }
  }
}

function handleAliens() {
  for (let i = aliens.length - 1; i >= 0; i--) {
    aliens[i].display();
    aliens[i].move();
    if (aliens[i].y >= height - 50) {
      gameOver();
    }
  }
}

function handlePowerUps() {
  for (let i = powerUps.length - 1; i >= 0; i--) {
    powerUps[i].display();
    powerUps[i].update();
    if (powerUps[i].hits(player)) {
      player.activatePowerUp(powerUps[i].type);
      powerUps.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.setDirection(1);
  } else if (keyCode === LEFT_ARROW) {
    player.setDirection(-1);
  } else if (keyCode === 32) { // Space bar to shoot
    lasers.push(new Laser(player.x + 20, height - 60));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
}

// Define the Player class
class Player {
  constructor() {
    this.x = width / 2;
    this.width = 40;
    this.height = 20;
    this.speed = 5;
    this.direction = 0;
  }

  display() {
    fill(255);
    noStroke();
    rect(this.x, height - this.height, this.width, this.height);
  }

  move() {
    this.x += this.speed * this.direction;
    this.x = constrain(this.x, 0, width - this.width);
  }

  setDirection(dir) {
    this.direction = dir;
  }

  activatePowerUp(type) {
    console.log("Power-Up activated: " + type); // Placeholder for power-up effects
  }
}

// Define the Alien class
class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.xdir = 1;
  }

  display() {
    fill(50, 205, 50);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.xdir;
    if (this.x > width - this.size / 2 || this.x < this.size / 2) {
      this.xdir *= -1;
      this.y += 20;
    }
  }
}

// Define the Laser class
class Laser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
  }

  display() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.y -= 10;
  }

  offscreen() {
    return this.y < 0;
  }

  hits(alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);
    return d < this.r + alien.size / 2;
  }
}

// Define the PowerUp class
class PowerUp {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = random(['double', 'rapid', 'shield']);
    this.size = 20;
  }

  display() {
    fill(255, 215, 0);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += 2;
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x + player.width / 2, height - player.height / 2);
    return d < this.size / 2 + player.width / 2;
  }
}

function gameOver() {
  noLoop();
  textSize(32);
  fill(255, 0, 0);
  text("Game Over", width / 2 - 100, height / 2);
}

function winGame() {
  noLoop();
  textSize(32);
  fill(0, 255, 0);
  text("Congratulations! You won!", width / 2 - 200, height / 2);
}
   