var car ,wall
var speed,weight


function setup() {

  createCanvas(1600,400);
  car =createSprite(20, 200, 50, 50);
  wall =createSprite(1200,200,60,100);

  speed=random(55,90)
  weight=random(400,1205)

  car.velocityX=speed
}

function draw() {
  background("black");  
  if(wall.x-car.x< (car.width+wall.width)/2 ){
car.velocityX=0;
var defromation=0.5*weight*speed*speed/22509;
   if (defromation>180){
     car.shapeColor="red";
   }
    if (defromation<180 && defromation>100){
      car.shapeColor="yellow";
    }

    if (defromation<100){
      car.shapeColor="green"
    }
  }
  drawSprites();
}