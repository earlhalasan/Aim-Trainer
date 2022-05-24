let game = document.querySelector("#game");
let target;
let movingTarget;
let ctx = game.getContext("2d");
let score = document.querySelector("#score");
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
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
  }
  nextTarget() {
    ctx.clearRect(0, 0, game.width, game.height);
  }

  floatingTarget() {
    ctx.clearRect;
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
      // this.nextTarget();
      gameLoop();
      //   addNewTarget();
      let gameScore = Number(score.textContent);
      let newScore = gameScore + 1;
      score.textContent = newScore;
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
  // let timeOut = setTimeout(newTarget, 100);

  // THIS NOT SO MUCH -->
  // setInterval(newTarget, 5000);
  // let myInterval = setInterval(newTarget, 5000);
  // clearInterval(myInterval);

  // if ((clickTarget = false)) {
  //   setInterval(newTarget, 5000);
  // }

  // reset setInterval
}

gameLoop();
// setInterval(newTarget, 5000);

game.addEventListener("click", function (e) {
  const circle = game.getBoundingClientRect();
  const xpos = e.clientX - circle.left;
  const ypos = e.clientY - circle.top;
  console.log(target.clickTarget(xpos, ypos));
});

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
