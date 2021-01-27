
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box1,box2,box3
var paperBall,dustbinImage,backgroundImage


function preload()
{
dustbinImage = loadImage("dustbingreen.png")	
backgroundImage = loadImage("road.jpg")

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Platform (600,390,1200,20)
	paperBall = new Paper (246,200,40)
	box1 = new Box (900,390,150,10)
	box2 = new Box (900-75,390-75,10,150)
	box3 = new Box (975,390-75,10,150)

	Engine.run(engine);
  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine)
  ground.display()
 
  box1.displayBox()
  box2.displayBox()
  box3.displayBox()
  imageMode(CENTER)
  image(dustbinImage,900,390-75,150,150)
  paperBall.displayPaper()
  drawSprites();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBall.body,paperBall.position,{x:290,y:-290})
    }
}
  


