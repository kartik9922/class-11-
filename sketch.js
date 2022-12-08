
var trex ,trex_running;
function preload(){

  //loading animataion

  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");


}

function setup(){

  //creating canvas

  createCanvas(600,200)
  
  //creating trex sprite

  trex = createSprite(50,160,20,50);

//adding animation to trex

trex.addAnimation("running",trex_running);

//scale of trex

trex.scale = 0.5;
trex.x = 50;

// creating ground sprite

  ground = createSprite(200,180,400,20);
 
}

function draw(){

  //adding background color

  background("lightgray")

  // to make trex jump

  if(keyDown("space")){
    trex.velocityY = -10;
  }

//to add gravity

trex.velocityY = trex.velocityY + 0.5;

//to stop trex falling down   

trex.collide(ground);
  
drawSprites();
}
