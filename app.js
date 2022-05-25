let game = document.querySelector("#game");
let target;
let distraction;
let ctx = game.getContext("2d");
let score = document.querySelector("#score");
let gameScore = Number(score.textContent);
let missed = document.querySelector("#missed");
let missedCount = Number(missed.textContent);
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

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
  nextTarget() {
    ctx.clearRect(0, 0, game.width, game.height);
  }

  // FOR ANIMATED TARGET. Wasn't able to get the moving target to click
  floatingTarget() {
    ctx.clearRect(0, 0, game.width, game.height);

    if (this.x + this.radius > game.width) {
      this.dx = -this.dx;
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

  clickTarget(xpos, ypos) {
    console.log("x: " + xpos + " y: " + ypos);
    const distance = Math.sqrt(
      (xpos - this.x) * (xpos - this.x) + (ypos - this.y) * (ypos - this.y)
    );
    console.log(distance);
    if (distance < this.radius) {
      gameLoop();
      // let gameScore = Number(score.textContent);
      let newScore = gameScore + 1;
      score.textContent = newScore;
      if (score === 15) {
        alert("You won!");
      }
      // let myInterval = setInterval(newTarget, 5000);
      // clearInterval(myInterval);
      //
      return true;
    } else {
      return false;
    }
  }
}

function gameLoop() {
  function newTarget() {
    let x = Math.floor(Math.random() * game.width);
    let y = Math.floor(Math.random() * game.height);
    target = new Target(x, y, "#F1B2DC", "#466362", 15, 0);
    ctx.clearRect(0, 0, game.width, game.height);
    target.render(ctx);
    target.clickTarget();
  }

  // THIS WORKS -->
  setTimeout(newTarget, 100);
  // setTimeout(animated, 4000);
  // let timeOut = setTimeout(newTarget, 100);

  // THIS NOT SO MUCH -->
  // let newTargetInterval = setInterval(newTarget, 5000);
  // let myInterval
  // console.log(myInterval);
  // clearInterval(myInterval);

  // if ((clickTarget = false)) {
  //   setInterval(newTarget, 5000);
  // }

  // reset setInterval
}

let targetList = [];
function animated() {
  let x = Math.floor(Math.random() * (game.width - 30)) + 30;
  let y = Math.floor(Math.random() * (game.height - 30)) + 30;
  movingTarget = new Target(x, y, "#F1B2DC", "#466362", 35, 0.15);
  // ctx.clearRect(0, 0, game.width, game.height);
  targetList.push(movingTarget);
  movingTarget.render(ctx);

  let updateTarget = function () {
    requestAnimationFrame(updateTarget);
    movingTarget.floatingTarget();
  };

  updateTarget();
}
animated();
console.log(targetList, "this is List");

let counter = document.querySelector("#countdown");
console.log(counter);

gameLoop();
// setInterval(newTarget, 5000);

game.addEventListener("click", function (e) {
  // const circle = game.getBoundingClientRect();
  // const xpos = e.clientX - circle.left;
  // const ypos = e.clientY - circle.top;
  // console.log(target.clickTarget(xpos, ypos));
  let myTarget = targetList[0];
  console.log(myTarget.x, myTarget.y);
  let clickTargetDifference = Math.sqrt(
    (myTarget.x - e.offsetX) ** 2 + (myTarget.y - e.offsetY) ** 2
  );
  let clickHappened;
  clickTargetDifference < myTarget.radius
    ? (clickHappened = true)
    : (clickHappened = false);
  console.log(clickHappened);
  // console.log(e.offsetX, e.offsetY);
  if (clickHappened === true) {
    targetList.pop();
    animated();
    gameScore++;
    score.textContent = `${gameScore}`;
  }
  if (clickHappened === false) {
    missedCount++;
    missed.textContent = `${missedCount}`;
  }
  if (missedCount >= 5) {
    // alert("Game Over");
    ctx.clearRect(0, 0, game.width, game.height);
  }
});

// CODE GRAVEYARD BELOW
// function addNewTarget() {
//   targ.alive = false;
//   setTimeout(function () {
//     let x = Math.floor(Math.random() * game.width - 100) + 50;
//     let y = Math.floor(Math.random() * game.height - 100) + 50;
//     newestTarg = new Target(x, y, "#F1B2DC", 40);
//   }, 100);
//   return true;
// // }

// window.addEventListener("DOMContentLoaded", function (e) {});
// sectInterval = for how long a target can appear on screen
//

// function animated() {
//   let x = Math.floor(Math.random() * game.width);
//   let y = Math.floor(Math.random() * game.height);
//   movingTarget = new Target(x, y, "#F1B2DC", "#466362", 15, 1);
//   ctx.clearRect(0, 0, game.width, game.height);
//   movingTarget.render(ctx);

//   let updateTarget = function () {
//     requestAnimationFrame(updateTarget);
//     movingTarget.floatingTarget();
//   };

//   updateTarget();

//   movingTarget.clickTarget();
// }

// GROUP EFFORT CODE
// let count = 15;
// let timer = setInterval(function () {
//   document.querySelector("#countdown").innerHTML = count;
//   count--;
//   gameLoop();
//   let myInterval = setInterval(newTarget, 5000);
//   if (count === 0 || target.clickTarget() === true) {
//     clearInterval(timer);
//     clearInterval(myInterval);
//     document.querySelector("#countdown").innerHTML = "Game Over";
//   }
// }, 1000);

// ORIGINAL CODE
// let count = 15;
// let timer = setInterval(function () {
//   document.querySelector("#countdown").innerHTML = count;
//   count--;
//   if (count === 0) {
//     clearInterval(timer);
//     document.querySelector("#countdown").innerHTML = "Game Over";
//   }
// }, 1000);
