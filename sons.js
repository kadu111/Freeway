//sons do jogo

let somDaTrilha;
let somHit;
let somScore;
let botaoMudo;
let isMudo = false;

function preloadSons(){
  somDaTrilha = loadSound("sons/trilha.mp3");
  somHit = loadSound("sons/hit.wav");
  somScore = loadSound("sons/ponto.mp3");
}

function setSoundControl(){
  somDaTrilha.loop();
  
  botaoMudo = createButton('Mute');
  botaoMudo.position(width - 50, 9);
  botaoMudo.mousePressed(toggleMudo);
}

function toggleMudo(){
  isMudo = !isMudo;
  
  if(isMudo){
    somDaTrilha.setVolume(0);
    somHit.setVolume(0);
    somScore.setVolume(0);
    botaoMudo.html('Unmute');
    botaoMudo.position(width - 70,9);
  } else {
    somDaTrilha.setVolume(1);
    somHit.setVolume(1);
    somScore.setVolume(1);
    botaoMudo.html('Mute');
    botaoMudo.position(width - 50, 9);
  }
}