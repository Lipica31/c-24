
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,line1,line2,line3;

function setup() {
	createCanvas(1200, 400);
   
	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//Create the Bodies Here.
     
	  ball = new Ball(500,380,10,10);
	line1 = new Dustbin(600,330,50, PI/2);
	line2 = new Dustbin(750,300,100);
	
  line3 = new Dustbin(400,300,100);
	
	Engine.run(engine);
	
 
}


function draw() {
  rectMode(CENTER);
  background(224,255,255);
  ball.display();
  line1.display();
  line2.display();
  line3.display();

  drawSprites();
 
}



