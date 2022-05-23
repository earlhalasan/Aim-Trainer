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
    // this.width = width;
    this.alive = true;
  }
  render() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.linewidth = 5;
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }
  clickTarget(xpos, ypos) {
    console.log(xpos, ypos);
  }
}

// (function () {
//   target = new Target(30, 30, "#F1B2DC", 25);
//   const runGame = setInterval(gameLoop, 120);
// })();

let targ = new Target(30, 30, "#F1B2DC", 25);
console.log(targ);
targ.render();

game.addEventListener("click", function (e) {
  const circle = game.getBoundingClientRect();
  const xpos = e.clientX - circle.left;
  const ypos = e.clientY - circle.top;
  //   console.log("x: " + xpos + " y: " + ypos);
  targ.clickTarget(xpos, ypos);
});

// (function () {})();

// window.addEventListener("DOMContentLoaded", function (e) {});
// sectInterval = for how long a target can appear on screen
//
