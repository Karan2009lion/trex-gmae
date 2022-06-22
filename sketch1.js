var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadAnimation("ground2.png")
}

function setup() {
  createCanvas(600, 300);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,800,20);
  ground.addAnimation("ground",groundImage);
 
}

function draw() {
  background(220);
 
  //jumping the trex on space key press
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5
  
 
 //stop trex from falling down 
  trex.collide(ground);
  drawSprites();
}