var car,wall;
var speed,weight;


function setup() {
  createCanvas ( 1600, 400);
  car = createSprite ( 10, 200, 20, 10);
  car. shapeColor= "blue"

  car = createSprite ( 10, 250, 20, 10);
  car. shapeColor= "red"
  
  car = createSprite ( 10, 300, 20, 10);
  car. shapeColor= "yellow"

  car = createSprite ( 10, 350, 20, 10);
  car. shapeColor= "green"

  

 

  wall = createSprite( 1500, 200, 30, 40);
  wall. shapeColor= ( 80, 80, 80);

  wall = createSprite( 1500, 250, 30, 40);
  wall. shapeColor= ( 80, 80, 80);
  
  wall = createSprite( 1500, 300, 30, 40);
  wall. shapeColor= ( 80, 80, 80); 

  wall = createSprite( 1500, 350, 30, 40);
  wall. shapeColor= ( 80, 80, 80)

  speed = random( 55, 90);
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
}