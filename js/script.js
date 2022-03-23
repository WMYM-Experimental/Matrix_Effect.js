const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.width;
canvas.height = window.height;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Char {
  constructor(x, y, size, canvasHeight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.canvasHeight = canvasHeight;
    this.symbols =
      "WashingtonYandunWMYM华盛顿wmym烟墩1234567890ヤンドゥン@#$€!?ワシントンWY";
    this.current = "";
    console.log(this.symbols[getRandomInt(0, this.symbols.length)]);
  }
  draw() {
    this.current = this.symbols[getRandomInt(0, this.symbols.length)];
    ctx.fillStyle = "#00ff41";
    ctx.fillText(this.current, this.x * this.size, this.y * this.size);

    if (this.y * this.size > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y = this.y + 1;
    }
  }
}

class Matrix {
  constructor(canvasWidth, canvasHeight, size) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = size;
    this.cols = parseInt(this.canvasWidth / this.size);
    this.chars = [];
    this.#init();
    console.log(this.chars);
  }
  #init() {
    for (let i = 0; i < this.cols; i++) {
      this.chars.push(new Char(i, 0, this.size, this.canvasHeight));
    }
  }
}

const m = new Matrix(canvas.width, canvas.height, 25);

function animate() {
  ctx.font = 25 + "px monospace";
  ctx.fillStyle = "#00ff41";
  m.chars.forEach((c) => {
    c.draw();
  });
  requestAnimationFrame(animate);
}

animate();
