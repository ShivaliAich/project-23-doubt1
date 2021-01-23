class Box {
    constructor (x,y,width,height) {
        var options = {
            isStatic : 1.0,
            density :0.3,
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    display (){
        fill ("red");
        rectMODE(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}





