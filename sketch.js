function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  moveCarro();
  moveAtor();
  resetPosCarro();
  verificaColisao();
  addScore();
  incrementaScore();
  rdmSpeed();
}

