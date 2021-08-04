const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var slime=[];
var arr=[[1,2],[3,4],[4,5]]
console.log(arr);

var balls=[];



function preload() {
  backgroundImg = loadImage("./assets/background.jpeg");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI /6;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 390, 400, 200);
  cannon = new Cannon(180, 290, 100, 50, angle);
  //rslime = new Slime(width, height - 100, 200, 200, -100);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();



  for (var i = 0; i < balls.length; i++) {
    showcannonballs(balls[i], i);
  }



  cannon.display();
  tower.display();
 
 showSlimes();
}



function showcannonballs(ball,index){
  ball.display()

if(ball.body.position.x>=width || ball.body.position.y>=height-50){
  Matter.World.remove(world,ball.body);
  balls.splice(index,1);
}


}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
  var  cannonBall = new CannonBall(cannon.x, cannon.y);
  balls.push(cannonBall)
 balls[balls.length-1].shoot();
   
  }
}


function showSlimes() {
  if (slime.length > 0) {
    if(slime.length < 4 && slime[slime.length - 1].body.position.x < width - 300 ) {
      var positions = [-130, -100, -120, -80];
      var position = random(positions);
      var slime = new Slime(width,height - 100, 200, 200, position);
      slime.push(slime);
    }

    for (var i = 0; i < slime.length; i++) {
      Matter.Body.setVelocity(slime[i].body, {
        x: -0.9,
        y: 0
      });

      slime[i].display();
    }
  } else {
    var slime = new Slime(width, height - 100, 200, 200, -100);
    slime.push(slime);
  }
}
