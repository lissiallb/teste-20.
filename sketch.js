
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var bloxk3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var planeo = 
	{
		isStatic: true
	}
    plane = Bodies.rectangle(width/2, height, width, 100, planeo);

	var block1o =
	{
		restitution: 0.0,
		frictionAir: 0.1
	}
	block1 = Bodies.rectangle(200, 70, 140, 140, block1o);
	World.add(world, block1);

	var block2o =
	{
		restitution: 0.8,
		frictionAir: 0.5
	}
	block2 = Bodies.rectangle(400, 70, 200, 120, block2o);
	World.add(world, block2);

	var block3o =
	{
    	restitution: 0.95
	}
	block3 = Bodies.circle(700, 70, 700, block3o);
	World.add(world, block3);

	rectMode(CENTER);
    ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightgreen");

  Engine.update(engine);

  fill("lightgreen");
  rect(plane.position.x, plane.position.y, width, 10);

  fill("red");
  rect(block1.position.x, block1.position.y, 140, 140);
  
  fill("red");
  rect(block2.position.x, block2.position.y, 200, 120);

  fill("red");
  ellipse(block3.position.x, block3.position.y, 70);

  drawSprites();
 
}



