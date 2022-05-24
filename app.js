let game = document.querySelector("#game");
let target;
let ctx = game.getContext("2d");
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

class Target {
  constructor(x, y, color, radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.alive = true;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.linewidth = 5;
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }
  nextTarget() {
    ctx.clearRect(0, 0, game.width, game.height);
  }

  clickTarget(xpos, ypos) {
    console.log("x: " + xpos + " y: " + ypos);
    const distance = Math.sqrt(
      (xpos - this.x) * (xpos - this.x) + (ypos - this.y) * (ypos - this.y)
    );
    console.log(distance);
    if (distance < this.radius) {
      this.nextTarget();
      gameLoop();
      //   addNewTarget();
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
    target = new Target(x, y, "#F1B2DC", 30);
    ctx.clearRect(0, 0, game.width, game.height);
    target.render(ctx);
    target.clickTarget();
  }
  //   newTarget();
  setTimeout(newTarget, 1000);
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
