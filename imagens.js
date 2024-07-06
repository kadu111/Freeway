//imagens do jogo

let imgEstrada;
let imgAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;
let imgCarros;

//sons do jogo

let somDaTrilha;
let somHit;
let somScore;

function preload(){
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator-1.png");
  imgCarro = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarros = [imgCarro,imgCarro2,imgCarro3,imgCarro,imgCarro2,imgCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somHit = loadSound("sons/hit.wav");
  somScore = loadSound("sons/ponto.mp3");
}
