
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobDiameter;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter=40;
	bobObject1=new Bob(300,635,40);
	bobObject2=new Bob(350,635,40);
	bobObject3=new Bob(400,635,40);
	bobObject4=new Bob(450,635,40);
	bobObject5=new Bob(500,635,40);

	roof1=new Roof(width/2,80,800,10);

	rope1=new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roof1.body,-bobDiameter*1,0);
	rope3=new Rope(bobObject3.body,roof1.body,0,0);
	rope4=new Rope(bobObject4.body,roof1.body,bobDiameter*1,0);
	rope5=new Rope(bobObject5.body,roof1.body,bobDiameter*2,0);

	//rope1=new Rope(100,635,15,80);


	
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(250);
  //Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
		 Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-80,y:-45});
		 }
	 }
	 
/*function keyPressed(){
    if(keyCode===UP_ARROW){
		bobObject1.velocityY=-15;
		bobObject1.velocityX=5;
		//isStatic:true
	}
}*/