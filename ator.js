//Ator
let xAtor = 100;
let yAtor = 366;
let hit = false;
let score = 0
let isCooldown = false;

function mostraAtor(){
  image(imgAtor,xAtor,yAtor,30,30);
}

function moveAtor(){
  if(!isCooldown){  
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(yAtor < 366){
        yAtor += 3;
      }
    }
    if(keyIsDown(LEFT_ARROW)){
      if(xAtor>5){
        xAtor -= 3;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      if(xAtor<465){
        xAtor += 3;
      }
    }
  }
}

function verificaColisao(){
  for(let i=0;i<imgCarros.length;i++){
    hit = collideRectRect(xCarros[i],yCarros[i],lenCarro,hgtCarro,xAtor,yAtor,25,25);
    if(hit){
      //console.log("ouch");
      colidiu();
      somHit.play();
      if(score>0){
        score--;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
  isCooldown = true;
  setTimeout(()=>{
    isCooldown = false;
  },500)
}

function addScore(){
  textAlign(CENTER);
  textSize(25);
  fill(color(127,255,212));
  text(score,width/5,27);
}

function incrementaScore(){
  if(yAtor < 15){
    score++;
    somScore.play();
    colidiu();
  }
}