const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Char {
  constructor(x, y, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasHeight = canvasHeight;
    this.symbols =
      "WashingtonYandunWMYM华盛顿wmym烟墩1234567890ヤンドゥン@#$€!?ワシントンWY";
    this.current = "";
    console.log(this.symbols[getRandomInt(0, this.symbols.length)]);
  }
  draw() {
    this.current = this.symbols[getRandomInt(0, this.symbols.length)];
    ctx.fillStyle = "#00ff41";
    context.fillStyle = "#0aff0a";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Matrix {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.cols = parseInt(this.canvasWidth / this.fontSize);
    this.symbols = [];
    this.#init();
  }
  #init() {
    for (let i = 0; i < this.cols; i++) {
      this.chars[i] = new Char(i, 0, this.fontSize, this.canvasHeight);
    }
  }
}

const matrix = new Matrix(canvas.width, canvas.height);

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = thisfontSize + "px monospace";
  ctx.fillStyle = "#0aff0a";

  m.chars.forEach((c) => {
    c.draw();
  });
  requestAnimationFrame(animate);
}

animate();
