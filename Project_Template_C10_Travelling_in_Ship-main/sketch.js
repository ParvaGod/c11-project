var sea_background, ship_moving, ship, sea 


function preload(){
sea_background=loadImage("sea.png")

ship_moving=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(950,300);

  sea=createSprite(5, 60, 250, 200);
  sea.addImage("ocean", sea_background)
  sea.x = sea.width /2
  sea.scale= 1
  
  
  
  ship=createSprite(200, 180, 30, 20);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.3

  


  



}

function draw() {
  background("blue");
  drawSprites();
 
}