
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,700,800,10);
dustbin = new Dustbin(600,190);
paper = new Paper(100,690,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  paper.display();
  dustbin.display();
 ground.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-10})
	}
}
