class Platform{
    constructor(x,y,w,h){
        var options = {
            isStatic : true 
        }

        this.width = w
        this.height = h

        this.object = Bodies.rectangle(x,y,w,h,options)

        World.add(world,this.object)
    }

    display(){
     fill("grey")   
     rectMode (CENTER)
     rect(this.object.position.x,this.object.position.y,this.width,this.height)
    }
    
}