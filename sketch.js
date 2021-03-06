var bullet,wall ,speed,weight,thickness,bulletRightEdge,wallLeftEdge;
var damage
function setup() {
  createCanvas(1000,400);
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))
  thickness=Math.round(random(22,83))
  damage=0.5*weight*speed*speed/thickness*thickness*thickness
  wall=createSprite(700, 200, 25, 250);
  wall.width=thickness;
wall.shapeColor="grey"
  bullet=createSprite(100,200,50,5);
  bullet.shapeColor="grey"

  bullet.velocityX=speed;
}

function draw() {
  background("white");  
  collided(wall,bullet);
  if(wall.x-bullet.x<=bullet.width/2+wall.width/2){
  bullet.velocityX=0;
  }
  if(damage>=10){
  wall.shapeColor="red"
  }
  if(damage<10){
  wall.shapeColor="green"
     }
       console.log(damage);
  drawSprites();
}
function collided(b,a){
bulletRightEdge=a.x+a.width;
wallLeftEdge=b.x
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}