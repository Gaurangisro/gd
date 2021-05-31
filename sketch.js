var block1, block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12;
var block13,block14,block15;





function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  image(img, 0, 0);
  tint(0, 153, 204); 
  image(img, 50, 0);
  createCanvas(800,400);

  //level 1
 block1=createSprite(400, 300, 200, 10);
 block1.shapeColor="skyblue";
 block2=createSprite(480, 270, 30, 40);
 block2.shapeColor="red";
 block3=createSprite(440, 270, 30, 40);
 block3.shapeColor="yellow";
block4=createSprite(400,270,30,40);
block4.shapeColor="red"
block5=createSprite(360,270,30,40);
block5.shapeColor="yellow";
block6=createSprite(320,270,30,40);
block6.shapeColor="red";
//level 2
block7=createSprite(340,220,30,40);
block7.shapeColor="pink";
block8=createSprite(380,220,30,40);
block8.shapeColor="white";
block9=createSprite(420,220,30,40);
block9.shapeColor="pink";
block10=createSprite(460,220,30,40);
block10.shapeColor="white";
//level 3
block11=createSprite(445,169,30,40);
block11.shapeColor="lightgreen"
block12=createSprite(400,169,30,40);
block12.shapeColor="orange"
block13=createSprite(360,169,30,40);
block13.shapeColor="lightgreen"
//level 4
block14=createSprite(380,120,30,40);
block14.shapeColor="lightblue";
block15=createSprite(420,120,30,40);
block15.shapeColor="lightblue";
//level 5
block16=createSprite(400,70,30,40);
block16.shapeColor="gold";
}




function draw() {
  background("black");  
  drawSprites()
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}

function mousePressed(event) {

  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

 
  ellipse(mouseX, mouseY, 5, 5);
  return false;
