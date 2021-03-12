var gameState = 0;
var playerCount;
var database;
var form,player,game;
var allPlayers;
var car1, car2
var cars;
var c1, c2;
var track, ground;
var xVel = 0;
var yVel = 0;
var passedFinish
var finishedPlayers = 0


function preload(){
  track = loadImage("images/track3.jpg");
  ground = loadImage("images/ground.png");
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database()
  
  game=new Game()
      game.getState()
      game.start()
  
}

function draw () {


if (playerCount===2 && finishedPlayers===0) {
  game.update(1);
}

if (gameState===1){
  clear()
  game.play()
  spawnObstacles()
}
if(finishedPlayers===2){
  game.update(2)
}

if (gameState===2 && finishedPlayers ===2){
  game.end();
}



}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(random(displayWidth/4,displayWidth),-displayHeight*2,50,50);
    obstacle.shapeColor="pink";
    obstacle.velocityY = 4;
    
    //var rand = randomNumber(1,2);
    

    /*obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    
    ObstaclesGroup.add(obstacle);*/
  }
}
