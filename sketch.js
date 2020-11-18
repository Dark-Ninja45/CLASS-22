const MWorld = Matter.World;
const MEngine  = Matter.Engine;
const MBodies = Matter.Bodies;
var engine,body,world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  var prop={
    isStatic: true,
    friction: 0

  };
  var Bprop= {
    restitution: 0.4
  };
//  createSprite(400, 200, 50, 50);
  engine = MEngine.create();
  body = MBodies.rectangle(100,100,50,20);
  ground = MBodies.rectangle(400,380,800,20,prop);
  ball = MBodies.circle(500,100,40,Bprop);
  world  = engine.world;
  MWorld.add(world,body);
  MWorld.add(world,ground)
  MWorld.add(world,ball);
  console.log(body);

}

function draw() {
  background(255,255,255); 
  MEngine.update(engine); 
  rectMode(CENTER);
  rect(body.position.x,body.position.y,50,20);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
  drawSprites();
}