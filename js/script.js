const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class Char {
  constructor(x, y, size, canvasHeight) {
    this.symbols =
      "W.;WashingtonYandunWMYM华盛顿wmym烟墩1234567890ヤンドゥン@#$€!?ワシントンWY";
    this.x = x;
    this.y = y;
    this.size = size;
    this.current = "";
    this.canvasHeight = canvasHeight;
  }
  draw(ctx) {
    this.current = this.symbols[getRandomInt(0, this.symbols.length - 1)];
    ctx.fillStyle = "#22b455";

    ctx.fillText(this.current, this.x * this.size, this.y * this.size);
    if (this.y * (this.size + 1) > this.canvasHeight && Math.random() > 0.95) {
      this.y = -1;
    } else {
      this.y += 1;
    }
  }
}

class Matrix {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = 15;
    this.cols = parseInt(this.canvasWidth / this.size) + 1;
    this.chars = [];
    this.#initialize();
  }
  #initialize() {
    for (let i = 0; i < this.cols; i++) {
      this.chars[i] = new Char(i, -1, this.size, this.canvasHeight);
    }
  }
}

const mx = new Matrix(canvas.width, canvas.height);

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = mx.size + "px 'Ubuntu Mono', monospace";
  ctx.fillStyle = "#0aff0a";
  mx.chars.forEach((c) => c.draw(ctx));
  requestAnimationFrame(animate);
}
animate();
