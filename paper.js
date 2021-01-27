class Paper{
    constructor(x,y,r){


      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
         density:1.2
      }


     this.body = Bodies.circle(x, y,r,options);
      World.add(world, this.body);

      
      this.radius =r

      this.image = loadImage("plastic.png")



 
    } 


    displayPaper(){
        fill("white")
        imageMode(CENTER)
        push()
        rotate(this.body.angle)
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.radius+40,this.radius)
        pop()
    }
 
 }