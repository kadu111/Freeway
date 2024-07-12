function preload(){
  preloadImagens();
  preloadSons();
}

function setup() {
  createCanvas(500, 400);
  setSoundControl();
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

