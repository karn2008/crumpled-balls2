class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width=150;
      this.height=150;
      this.thickness=20;
      this.image = loadImage ("dustbingreen.png");
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
      this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      
//rectMode(CENTER);
      //fill("pink");
    //rect(this.bottomBody.position.x, this.bottomBody.position.y, this.width, this.thickness);
     // rect(this.leftBody.position.x, this.leftBody.position.y, this.thickness, this.height);
     // rect(this.rightBody.position.x, this.rightBody.position.y, this.thickness, this.height);
     imageMode (CENTER);
     image(this.image,this.bottomBody.position.x, this.bottomBody.position.y-69,this.width,this.height)
    }
  };

