class Mango {
    constructor(x,y,radius){
        radius = this.radius
    var options= {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)

    }
    display(){
       var pos = this.body.position
        push()
        fill("white")
        rect(pos.x,pos.y,this.width,this.height)    
    }
}
