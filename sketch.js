
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper= new Paper(100,600,40);
  ground= new Ground(400,650,800,20);
	leftSide= new Dustbin(550,580,20,100);
  bottom= new Dustbin(630,630,160,20);
  rightSide= new Dustbin(700,580,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
    bottom.display();
  
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body, paper.body.position,{x:65, y:-65});
  }
}



