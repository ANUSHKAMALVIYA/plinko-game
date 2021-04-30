const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [particle];
var plinkos = [];
var line;

var divisionWeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create the Bodies Here.
  ground = new Ground(400,690,8000,20);

 
  for(var k =0; k<=width; k=k+80){
    division.push(new Division(i,height-divisionWeight/2,10,divisionWeight));
  } 
  for(var j=75; j<width; j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j=50; j<width-10; j=j+50){
    plinkos.push(new plinko(j,175));
  }
  for(var j=75; j<width; j=j+50){
    plinkos.push(new plinko(j,275));
  }
  for(var j=50; j<width-10; j=j+50){
    plinkos.push(new plinko(j,375));
  }

  //for ()

Engine.run(engine);


}

function draw(){
  background(0);
  Engine.update(engine);
  textSize(35)
  text("score: "+score,20,40);
  fill(255);

  textSize(35)
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("500",320,550);
  text("500",400,550);
  text("500",480,550);
  text("500",560,550);
  text("500",640,550);
  text("500",720,550);

  ground.display();
  if(gameState =="END"){
    background("black");
    fill("red");
    textSize(100);
    text("Game Over",200,400);
  }
  for(var k =0; k<plinkos.length; k++){
    plinkos[k].display();

  }
  if(particle=null)
{
  particle.display();

  if(particle.body.position.y>700)
{
  if(particle.body.position.x<300)
  {
    score=score+550;
    particle=null;
    if(count>=5) gameState="END";
  }
  else if (particle.body.position.x<600 && particle.body.position.x>381)
  {
    score = score +200;
    particle=null;
    if(count>=5) gameState="END"
  }
}

}
  
for(var i= 0; i<divisions.length; i++){
  divisions[i].display();
}
}


function mousePressed(){
  if(gameState =="END") {
    count++;
    particle = new particle(mouseX, 50,10,10);
  }
}