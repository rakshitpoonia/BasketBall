class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
this.image=loadImage("hoop.png");
 
}
display(){
    
    imageMode(CENTER);
    //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    
    //image(this.image,this.body.position.x,this.body.position.y,260,280);
    image(this.image,displayWidth-900,displayHeight-590,280,300);
}
}