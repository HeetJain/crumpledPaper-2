class Dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic : true,
        density : 2.9,
        friction : 1 
      }
      
      
      this.border1 = Bodies.rectangle(x - width/2,y,10,height,options);
      this.border2 = Bodies.rectangle(x + width/2,y,10,height,options);
      this.border3 = Bodies.rectangle(x,y + height/2,width,10,options);
      this.image = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      World.add(world, this.border1);
       World.add(world, this.border2);
        World.add(world, this.border3);
    
    }
    display(){
      
      imageMode(CENTER);
      image(this.image,this.x, this.y, this.width, this.height);
  
    }
  }