const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var engine,world,ball,ground,launcher,stand,ballimg,background,basket,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
var balls,index=0;
var gameState="attached";

function preload(){

ballimg=loadImage("basketball.png");

backgroundimg=loadImage("background.png");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine=Engine.create();
  world=engine.world;
   ball=new Ball(displayWidth-200,displayHeight-400);
   ground=new Ground(0,displayHeight-250);
   launcher=new Launcher(ball.body,{x:displayWidth-200,y:displayHeight-400});
   basket=new Basket(displayWidth-1100,displayHeight-600);
   console.log(this.basket);
   ball1=createSprite(displayWidth-150,displayHeight-196,50,50);
   ball2=createSprite(displayWidth-230,displayHeight-196,50,50);
   ball3=createSprite(displayWidth-310,displayHeight-196,50,50);
   ball4=createSprite(displayWidth-390,displayHeight-196,50,50);
   ball5=createSprite(displayWidth-470,displayHeight-196,50,50);
   ball6=createSprite(displayWidth-550,displayHeight-196,50,50);
   ball7=createSprite(displayWidth-630,displayHeight-196,50,50);
   ball8=createSprite(displayWidth-710,displayHeight-196,50,50);
   ball9=createSprite(displayWidth-790,displayHeight-196,50,50);
   balls=[ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9];

}

function draw() {
  background(backgroundimg);
  if(ball.body.position.y>=450){
    gameState="onground";
  }
  if(ball.body.position.y>displayHeight || ball.body.position.x>displayWidth){
    gameState="outofscreen";
    
  }
  if (gameState=="onground"|| gameState=="outofscreen"){
    textSize(40);
    textAlign(CENTER);
    text("Press space key for more chances",displayWidth-700,displayHeight-400);
  }
  if (index>8){
    textSize(40);
    text("Game Over",displayWidth-700,displayHeight-400);
    
  }
 
  //console.log(ball.body.position.y);
  ball1.addImage("ball1",ballimg);
  ball2.addImage("ball2",ballimg);
  ball3.addImage("ball3",ballimg);
  ball4.addImage("ball4",ballimg);
  ball5.addImage("ball5",ballimg);
  ball6.addImage("ball6",ballimg);
  ball7.addImage("ball7",ballimg);
  ball8.addImage("ball8",ballimg);
  ball9.addImage("ball9",ballimg);
  Engine.update(engine);  
  ball.display();
  ground.display();
  basket.display();
  launcher.display();
 
  drawSprites();
}
function mouseDragged(){
  if(index>8){
    return false;
  }
  if (gameState=="attached"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

  }
}
function mouseReleased(){
  if (index>8){
    return false;
  }
  launcher.fly();
  gameState="launched";
} 
function keyPressed(){
  if(keyCode === 32 && gameState=="onground" || gameState=="outofscreen"){
    launcher.attach(ball.body);  
      Matter.Body.setPosition(ball.body, {x:displayWidth-200,y:displayHeight-400}); 
    balls[index].destroy();
    index++;
    gameState="attached";
  }
}

  



