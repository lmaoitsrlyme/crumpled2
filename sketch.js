const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
	rooming = loadImage("room.jpg");
}

function setup() {
	createCanvas(1600, 900);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new paper(200,850,70);
	groundObject = new ground(width/2, 890,width,20);
	dustbinObj = new dustbin(1200,870);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(rooming);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  	}
}





