
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grounddd = new Ground(20,500,1200,20)
   tree = new Tree(800,300,50,200)


	Engine.run(engine);
  
}


function draw() {

  background("lightGreen");
  imageMode(CENTER);
  tree.display()
  grounddd.display()
  drawSprites();
 
}



