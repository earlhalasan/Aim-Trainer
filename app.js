let game = document.querySelector("#game");
let movingTarget;
let ctx = game.getContext("2d");
let score = document.querySelector("#score");
let gameScore = Number(score.textContent);
let missed = document.querySelector("#missed");
let missedCount = Number(missed.textContent);
let gameOn;
let targetBreak = new Audio("Target Break.mp3");
let gamePlayMusic = document.getElementById("gamePlayMusic");
let menuMusic = document.getElementById("menuMusic");
let gameOver = new Audio("Game Over.mp3");
let gameOverTwo = new Audio("Game Over 2.mp3");
gameOver.volume = 0.6;
gameOverTwo.volume = 0.6;
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
window.onload = function () {
  document.getElementById("menuMusic").play();
};

class Target {
  constructor(x, y, color, colorTwo, radius, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.colorTwo = colorTwo;
    this.radius = radius;
    this.alive = true;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.colorTwo;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
  }

  // FOR ANIMATED TARGET
  floatingTarget() {
    ctx.clearRect(0, 0, game.width, game.height);

    if (this.x + this.radius > game.width) {
      this.dx = -this.dx;
      console.log();
    }
    if (this.x + this.radius < 70) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius < 70) {
      this.dy = -this.dy;
    }
    if (this.y + this.radius > game.height) {
      this.dy = -this.dy;
    }

    this.render(ctx);
    this.x += this.dx;
    this.y += this.dy;
  }
}

let targetList = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function animated() {
  let x = getRandomInt(71, 850);
  let y = getRandomInt(71, 390);
  console.log(game.width);
  console.log(game.height);
  movingTarget = new Target(x, y, "#F1B2DC", "#466362", 35, 0.15);
  targetList.push(movingTarget);
  movingTarget.render(ctx);

  // Used requestAnimationFrame and continuously calls upon itself making the circle
  // go faster on each click
  let updateTarget = function () {
    ctx.beginPath();
    gameOn = window.requestAnimationFrame(updateTarget);
    movingTarget.floatingTarget();
  };

  updateTarget();
}

// Console logs the empty array above and let's you know there's one drawn circle in array
console.log(targetList, "this is List");

// Main function of the game here.
game.addEventListener("click", function (e) {
  let myTarget = targetList[0];
  // Determines the radius of the circle for hit area
  let clickTargetDifference = Math.sqrt(
    (myTarget.x - e.offsetX) ** 2 + (myTarget.y - e.offsetY) ** 2
  );
  console.log(clickTargetDifference);
  let clickHappened;
  clickTargetDifference < myTarget.radius
    ? (clickHappened = true)
    : (clickHappened = false);
  console.log(clickHappened);
  // Game logic here
  if (clickHappened === true && missedCount < 5) {
    targetList.pop();
    animated();
    gameScore++;
    score.textContent = `${gameScore}`;
    targetBreak.play();
  } else if (clickHappened === false) {
    missedCount++;
    missed.textContent = `${missedCount}`;
    gameOver.play();
  }
  if (missedCount >= 5) {
    missed.textContent = "5 GAME OVER! GG!";
    gameOver.play();
    gameOverTwo.play();
  }
});

// START GAME AND RESET BUTTON
document.querySelector("#start").addEventListener("click", function () {
  if (document.querySelector("#start").textContent === "Start Game") {
    animated();

    document.querySelector("#start").textContent = "Reset Game";
    menuMusic.pause();
    gamePlayMusic.play();
  } else if (document.querySelector("#start").textContent === "Reset Game") {
    document.querySelector("#start").textContent = "Start Game";
    location.reload();

    score.textContent = "0";
    missed.textContent = "0";
  }
});

window.addEventListener("DOMContentLoaded", function (e) {});
