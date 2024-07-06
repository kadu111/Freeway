let xCarros = [600,600,600,600,600,600];
let yCarros = [40,95,150,210,270,316];
let sCarros = [2, 3, 2.5, 5, 3.3, 2.3];
let lenCarro = 50;
let hgtCarro = 40;
let lock = 0;

function mostraCarro(){
  for(let i=0;i<imgCarros.length;i++){
    image(imgCarros[i],xCarros[i],yCarros[i],lenCarro,hgtCarro);  
  }
}


function moveCarro(){
  for(let i=0;i<imgCarros.length;i++){
    xCarros[i] -= sCarros[i]; 
  }
}

function resetPosCarro(){
  for(let i = 0;i<imgCarros.length;i++){
    if(xCarros[i] < -50){
    xCarros[i] = 600;
    }
  }
}

//randomiza a velocidade dos carros a cada 5 pontos

function rdmSpeed(){
  if(rndLock()){
    for(let i = 0; i < sCarros.length;i++){
      sCarros[i] = (Math.random() * 5) + 1;
    }
  }
}

function rndLock(){
  if(score > 0 && score % 5 == 0 && lock == 0){
    lock = 1;
    return true;    
  }else if(score % 5 != 0){
    lock = 0;
    return false;
  }
}