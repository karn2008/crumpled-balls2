class Paper {
    constructor(x,y,radius) {
      var options = {
      restitution : 0.3,
       friction : 0.5,
       density : 1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
this.image = loadImage("paper.png") 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(RADIUS);
      //fill("orange");
      image(this.image,pos.x, pos.y, this.radius+30, this.radius+30);
    }
  };