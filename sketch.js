const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  ground = new Ground(400,400,800,30)
  platform = new Ground(500,250,230,15)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  

  slingshot = new Slingshot(polygon,{x:100,y:200});


  

  box1 = new Box(595,245,30,40);
  box2 = new Box(565,245,30,40);
  box3 = new Box(534,245,30,40);
  box4 = new Box(503,245,30,40);
  box5 = new Box(472,245,30,40);
  box6 = new Box(441,245,30,40);
  box7 = new Box(412,245,30,40);
  
  box8 = new Box(441,170,30,40)
  box9 = new Box(472,170,30,40)
  box10 = new Box(503,170,30,40)
  box11 = new Box(534,170,30,40)
  box12 = new Box(565,170,30,40)

  box13 = new Box(472,100,30,40)
  box14 = new Box(503,100,30,40)
  box15 = new Box(534,100,30,40)
  
  box16 = new Box(503,30,30,40)
  
  }


  function draw() {
  background("white");

  Engine.update(engine)
  
  ground.display();
  platform.display();

  //polygon.display();
  ellipse(polygon.position.x,polygon.position.y,20,20);

  slingshot.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();
  
  box16.display();


  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(polygon,{x:100,y:200})
     slingshot.attach(polygon.body) 
  } 
}