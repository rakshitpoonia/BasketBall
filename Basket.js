class Basket{
    constructor(x,y){
        var options={
            isStatic:true
        }
this.body=Bodies.rectangle(x,y,200,280,options);
this.width=10;
this.height=280;
World.add(world,this.body);
this.image=loadImage("hoop.png");
 
}
display(){
    
    imageMode(CENTER);
    //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    
    image(this.image,this.body.position.x,this.body.position.y,260,280);
}
}