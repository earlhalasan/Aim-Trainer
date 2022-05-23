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
}

// (function () {
//   target = new Target(10, 20, "#F1B2DC", 20, 20);
//   const runGame = setInterval(gameLoop, 120);
// })();

let rambo = new Target(30, 30, "#F1B2DC", 25);
console.log(rambo);
rambo.render();

// function gameLoop() {
//   ctx.clearRect(0, 0, game.width, game.height);
// }

// (function () {})();

// window.addEventListener("DOMContentLoaded", function (e) {});
// sectInterval = for how long a target can appear on screen
//
