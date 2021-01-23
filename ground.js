class Ground {
    constructor (x,y,width,height){
        var options={
            isStatic : 0.8,
            density : 0.2,
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        
    }
    display (){
        rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}




