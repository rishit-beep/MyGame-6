class Slime {
    constructor(x, y, width, height, slimePos) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      this.slimePosition = slimePos;
      this.image = loadImage("assets/Terror.jpeg");
      World.add(world, this.body);
    }
  
  //to remove slime from the world
    remove(index) {
      Matter.World.remove(world, slime[index].body);
      slime.splice(index, 1);
  
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, this.slimePosition, this.width, this.height);
      noTint();
      pop();
    }
  }