var wall,thickness;
var bullet,speed,weight;






function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
 bullet =createSprite(50, 100, 10, 20);
bullet.velocityX=speed;
bullet.shapeColor=color(255)

  wall=createSprite(1200,100,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)

function draw() {
  background(0);  
  
  if (hasCollided(bullet,wall))
  
  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight *speed*speed/(thickness*thickness*thickness)
   
    if (damage>10){
    bullet.shapeColor=color(255,0,0);
   }
   
    if (damage<10){
   bullet.shapeColor=color(0,255,0);
   }

  }
  
  
  
  
  
  
  
  
  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
 if (bulletRightEdge>=wallLeftEdge){
   return true;
 }
 return false;
}

