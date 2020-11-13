var mr,fr;
var go1,go2,go3,go4;

function setup() {
  createCanvas(800,400);
  mr = createSprite(200, 400, 50, 50);
  fr = createSprite(250,100,50,50);
  go1 = createSprite(100, 100, 50, 50);
  go2 = createSprite(170,100,50,50);
  go3 = createSprite(500, 0, 50, 50);
  go4 = createSprite(500,500,50,50);

  go3.velocityY = 5;
  go4.velocityY = -5;
  go3.debug = true;
  go4.debug = true;
  
}

function draw() {
  background(0); 
 mr.x = World.mouseX;
  mr.y = World.mouseY;
bounceOff (go3,go4)
  if (isTouching (mr,fr)){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
  }
else {
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}

  drawSprites();
}
