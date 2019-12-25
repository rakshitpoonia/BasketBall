const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var engine,world,ball,ground,launcher,stand,ballimg,background,basket,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
var balls=[],index=0;
var basket1,basket2,basket3,celebration,basket4,restart,restartimg;
var score=0;
var gameState="attached";
var Ball1X = 150;
var maxChances = 10;

function preload(){
sound1=loadSound("bounce.mp3");
celebration=loadSound("nice shot.mp3");
ballimg=loadImage("basketball.png");
restartimg=loadImage("restart1.png");
backgroundimg=loadImage("background.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
   ball=new Ball(displayWidth-200,displayHeight-400);
   ground=new Ground(0,displayHeight-250);
   launcher=new Launcher(ball.body,{x:displayWidth-200,y:displayHeight-400});
   basket=new Basket(displayWidth-1050,displayHeight-600,20,280);
   basket1=new Basket(displayWidth-865,displayHeight-550,20,30);
   basket2=new Basket(displayWidth-880,displayHeight-500,10,35);
   basket3=new Basket(displayWidth-997,displayHeight-520 ,10,30);
   basket4=new Basket(displayWidth-873,displayHeight-515 ,10,25)
   
  sprites();
}
function sprites(){
  for (var i=0; i < maxChances-1; i++){
    balls[i] = createSprite(displayWidth-(Ball1X+(i*80)),displayHeight-196,50,50);
    balls[i].addImage("ball"+i,ballimg);  
  }
  /*ball1=createSprite(displayWidth-150,displayHeight-196,50,50);
  ball2=createSprite(displayWidth-230,displayHeight-196,50,50);
  ball3=createSprite(displayWidth-310,displayHeight-196,50,50);
  ball4=createSprite(displayWidth-390,displayHeight-196,50,50);
  ball5=createSprite(displayWidth-470,displayHeight-196,50,50); 
  ball6=createSprite(displayWidth-550,displayHeight-196,50,50);
  ball7=createSprite(displayWidth-630,displayHeight-196,50,50);
  ball8=createSprite(displayWidth-710,displayHeight-196,50,50);
  ball9=createSprite(displayWidth-790,displayHeight-196,50,50);
  balls=[ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9];   
  
  ball1.addImage("ball1",ballimg);
  ball2.addImage("ball2",ballimg);
  ball3.addImage("ball3",ballimg);
  ball4.addImage("ball4",ballimg);
  ball5.addImage("ball5",ballimg);
  ball6.addImage("ball6",ballimg);
  ball7.addImage("ball7",ballimg);
  ball8.addImage("ball8",ballimg);
  ball9.addImage("ball9",ballimg);
  
  */
}

function draw() {
  background(backgroundimg);
  stroke("white");
  strokeWeight(3);
  textSize(30);
  textStyle(BOLD);
  if ((ball.body.position.x>412 && ball.body.position.x<480) 
  && (ball.body.position.y>258 && ball.body.position.y<324) ){
    score=score+5;
    gameState="win";
  }

 
  text("Score : "+score,displayWidth-400,displayHeight-700);

  if(ball.body.position.y>=displayHeight-310){
    gameState="onground";
  }
  if(ball.body.position.y>displayHeight || ball.body.position.x>displayWidth || ball.body.position.y<displayHeight-950){
    gameState="outofscreen";
    
  }
  if (gameState=="onground" || gameState=="outofscreen"){
    textSize(40);
    textAlign(CENTER);
    text("Press space key for more chances",displayWidth-700,displayHeight-400);
  }
  if (index>(maxChances-2)){
    textSize(40);
    text("Game Over",displayWidth-700,displayHeight-400);
    restart=createSprite(displayWidth-600,displayHeight-490,30,30);
    restart.scale=1.0;
    restart.addImage("restart",restartimg);
  }
  
  
  if (round(ball.body.position.y)>=465){
    sound1.play();
  }else{
    sound1.pause();
  }
  if (ball.body.speed<2){
    sound1.pause();
  }
  if (gameState=="win"){
    celebration.play();
  }
  else{
    celebration.pause();
  }
  if(mousePressedOver(restart)){
    
    reset();
    
    //console.log("replay");
  }

  //console.log("x "+basket4.body.position.x,"y "+basket4.body.position.y);
  
 
//console.log("x "+ball.body.position.x,"y "+ball.body.position.y);
  
  
  Engine.update(engine);  
  ball.display();
  ground.display();
  basket.display();
  launcher.display();
  basket1.display();
  basket2.display();
  basket3.display();
 
  drawSprites();
}
function mouseDragged(){
  if(index>(maxChances-2)){
    return false;
  }
  if (gameState=="attached"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

  }
}
function mouseReleased(){
  if (index>(maxChances-2)){
    return false;
  }
  launcher.fly();
  gameState="launched";
} 
function keyPressed(){
  //console.log("key press before condition");
  if((keyCode === 32 && gameState=="onground") || gameState=="outofscreen"){
    gameState="attached";
   // console.log("key press after condition:"+index);
    launcher.attach(ball.body);  
      Matter.Body.setPosition(ball.body, {x:displayWidth-200,y:displayHeight-400}); 
      ballSpriteDestroy(index);
    //balls[index].destroy();
    index++;
    
  }
}
function reset(){
  balls=[];
  gameState="attached";
  console.log("reset called");
  index = 0;
  sprites();
  score=0;    
}

function ballSpriteDestroy(ind){
  //console.log("i am here:"+ind);
  balls[ind].destroy();
}
