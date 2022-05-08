
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Player1, Bot1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	Player1 = Bodies.rectangle (400, 600, 100,100);
    Bot1 = Bodies.rectangle (600, 300, 100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue");
  ellipse (Player1.position.x, Player1.position.y, 100, 100);
  fill("purple");
  ellipse (Bot1.position.x, Bot1.position.y, 100, 100);
  ellipseMode(RADIUS);

  drawSprites();
 
}



