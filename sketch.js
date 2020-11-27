var dustbin;
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


  dustbin = new Dustbin(1150,575,155,145);
  
	paper = new Paper(110,35,25);
	ground = new Ground(width/2, 650, width,10);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  paper.display();
  dustbin.display();
  ground.display();
}

function keyPressed(){
  if(keyCode == UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})

  }
}
