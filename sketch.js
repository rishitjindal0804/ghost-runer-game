var climber;
var door;
var spooky;

var ghost1,ghost2;

var ghtower;


function prelod(){
  climber = loadImage("climber.png");
  door = loadImage("door.png");
  spooky = loadSound("spooky.wav");
 ghtower = loadImage("tower.png");
  ghost1 = loadImage("ghost-jumping.png");
ghost2 = loadImage("ghost-standing.png")

}
function setup(){
  createCanvas(600,600);
  
 tower = createSprite(300,300);
tower.addImage("towe",ghtower);

ghost = createSprite(300,300);
  ghost.addImage("ghos",ghost1);
  
}
function draw(){
  
  background(0);
  
  drawSprites();
}
