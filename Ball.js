class Ball{
constructor(x,y){
    var options={
        'restitution':1.0,
        'friction':0.3,
        'density':0.5
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.height=50
    this.width=50;
    
    World.add(world,this.body);
    this.image=loadImage('basketball.png');
    
}
display(){
    push();
    var angle=this.body.angle;
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

}

}