var carton1, carton2, cat, clock, clothes, cup, cup2, curtain, door, grass, man
var gameState = 2
var score = 0
var lives = 2


function preload() {
  carton1Img = loadImage("carton.png");
  carton2Img = loadImage("cartons.png");
  catImg = loadImage("cat.jpg");
  clockImg = loadImage("clock.png");
  clothesImg = loadImage("clothes.png");
  cupImg = loadImage("cup.png");
  cup2Img = loadImage("cups.png");
  curtainImg = loadImage("curtain.png");
  doorImg = loadImage("door1.png");
  grassImg = loadImage("grass.png");
  manImg = loadImage("mans.png");
  photoFImg = loadImage("photo frame.png")
  knifeImg = loadImage("knife.png");
  kniveImg = loadImage("knive.png");
  firstAidImg = loadImage("firstAid.png");
  gunImg = loadImage("gun.png");
  pinImg = loadImage("pin.png");
  bombImg = loadImage("bomb.png");
  bomb1Img = loadImage("bomb1.png");
  bg = loadImage("bg2.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (gameState === 1) {

    clothes = createSprite(width / 2 + 685, height / 2 + 70, 20, 20);
    clothes.addImage(clothesImg);
    clothes.scale = 0.25

    /*carton1 = createSprite(width/2+400,height/2+300,20,20);
    carton1.addImage(carton1Img);
    carton1.scale = 0.4*/

    carton2 = createSprite(width / 2 + 200, height / 2 + 80, 20, 20);
    carton2.addImage(carton2Img);
    carton2.scale = 0.22

    cup = createSprite(width / 2 + 450, height / 2 + 320, 20, 20);
    cup.addImage(cupImg);
    cup.scale = 0.1

    clock = createSprite(width / 2 + 600, height / 2 - 300, 20, 20);
    clock.addImage(clockImg);
    clock.scale = 0.1

    cup2 = createSprite(width / 2 + 400, height / 2 + 300, 20, 20);
    cup2.addImage(cup2Img);
    cup2.scale = 0.1

    knife1 = createSprite(width / 2 + 730, height / 2 + 300, 20, 20);
    knife1.addImage(knifeImg);
    knife1.scale = 0.1

    knife2 = createSprite(width / 2 + 750, height / 2 + 200, 20, 20);
    knife2.addImage(knifeImg);
    knife2.scale = 0.1

    knife3 = createSprite(width / 2 + 740, height / 2 + 300, 20, 20);
    knife3.addImage(knifeImg);
    knife3.scale = 0.1

    firstAid = createSprite(width / 2 - 305, height / 2 + 20, 20, 20);
    firstAid.addImage(firstAidImg);
    firstAid.scale = 0.1

    gun = createSprite(width / 2 + 100, height / 2 + 230, 20, 20);
    gun.addImage(gunImg);
    gun.scale = 0.1

    pin = createSprite(width / 2 - 10, height / 2 - 150, 20, 20);
    pin.addImage(pinImg);
    pin.scale = 0.2

    man = createSprite(width / 2 - 670, height / 2 + 220, 20, 20);
    man.addImage(manImg);
    man.scale = 0.6

    btn = createSprite(width / 2 - 600, height / 2 + 210, 20, 20);
    btn.x = man.x
    btn.y = man.y


  }

  if (gameState === 2) {

    man = createSprite(width / 2 - 715, height / 2 + 215);
    man.addImage(manImg);
    man.scale = 0.35

    iGround = createSprite(width / 2 - 715, height / 2 + 295, 100, 10);

    wall1 = createSprite(width / 2, height / 2 + 300, 1530, 15);
    wall1.shapeColor = "Purple"

    btn2 = createSprite(width / 2 - 430, height / 2 + 185, 25, 25);
    btn2.shapeColor = "red";

    wall2 = createSprite(width / 2 - 470, height / 2 + 245, 155, 100)
    wall2.shapeColor = "Purple"

    wall3 = createSprite(width / 2 - 200, height / 2 + 245, 75, 100)
    wall3.shapeColor = "Purple"

    btn3 = createSprite(width / 2 - 200, height / 2 + 185, 25, 25);
    btn3.shapeColor = "LightBlue"

    knive = createSprite(width / 2 - 150, height / 2 + 264);
    knive.addImage(kniveImg);
    knive.scale = 0.1

    wall4 = createSprite(width / 2 + 200, height / 2 + 215, 150, 175)
    wall4.shapeColor = "Purple"

    btn4 = createSprite(width / 2 + 170, height / 2 + 115, 25, 25);
    btn4.shapeColor = "LightGreen"

    bomb1 = createSprite(width / 2 + 320, height / 2 + 260);
    bomb1.addImage(bombImg);
    bomb1.scale = 0.1;

    bomb2 = createSprite(width / 2 + 520, height / 2 + 260);
    bomb2.addImage(bomb1Img);
    bomb2.scale = 0.1;

    wall5 = createSprite(width / 2 + 650, height / 2 + 195, 150, 220);
    wall5.shapeColor = "Purple";

    btn5 = createSprite(width / 2 + 695, height / 2 + 75, 25, 25);
    btn5.shapeColor = "Yellow"


  }

  if (gameState === 3) {
    man = createSprite(width / 2 - 700, height / 2 - 280, 20, 20);
    man.addImage(manImg);
    man.scale = 0.2

    wall1 = createSprite(width / 2 - 680, height / 2 - 200, 125, 15);
    wall1.shapeColor = "White";

    wall2 = createSprite(width / 2 - 620, height / 2 - 145, 15, 125);
    wall2.shapeColor = "White";

    wall3 = createSprite(width / 2 - 560, height / 2 - 80, 140, 15)
    wall3.shapeColor = "White";

    //knife = createSprite(width / 2 - 560, height / 2 - 80, 20, 20);
    //knife.addImage(knifeImg);

    wall4 = createSprite(width / 2 - 485, height / 2 - 115, 15, 85)
    wall4.shapeColor = "White";

    wall5 = createSprite(width / 2 - 450, height / 2 - 150, 70, 15)
    wall5.shapeColor = "White";

    wall6 = createSprite(width / 2 - 423, height / 2 - 80, 15, 150)
    wall6.shapeColor = "White";
  }

  if (gameState === 4) {

  }

}

function draw() {

  if (gameState === 1) {
    background(bg)

    if (keyIsDown(UP_ARROW)) {
      man.position.y -= 8;
    }
    if (keyDown(DOWN_ARROW)) {
      man.position.y += 8;
    }
    if (keyDown(RIGHT_ARROW)) {
      man.position.x += 8;
    }
    if (keyDown(LEFT_ARROW)) {
      man.position.x -= 8;
    }

    textSize(20)
    text("Find and Drag all the essential items needed for the rescue mission to the curtains", width / 2-180, height / 2 - 300);
    text("score:" + score, width / 2 - 100, height / 2 - 350);

    btn.x = man.x + 20;
    btn.y = man.y


    
  }

  if (gameState === 2) {
    background("#C8A2C8");

    if (keyDown(RIGHT_ARROW)) {
      man.position.x += 8
    }
    if (keyDown(LEFT_ARROW)) {
      man.position.x -= 8;
    }
    if (keyDown(UP_ARROW)) {
      man.position.y -= 8
    }

    man.position.y = man.position.y + 4
  }

  if (gameState === 3) {
    background("Black")

  }

  if (gameState === 4) {

  }

  drawSprites();

}

function mouseDragged() {
  clothes.position.x = mouseX
  clothes.position.y = mouseY

  gun.position.x = mouseX
  gun.position.y = mouseY

  pin.position.x = mouseX
  pin.position.y = mouseY

  knife1.position.x = mouseX
  knife1.position.y = mouseY

  firstAid.position.x = mouseX
  firstAid.position.y = mouseY

  carton2.position.x = mouseX
  carton2.position.y = mouseY

  cup.position.x = mouseX
  cup.position.y = mouseY
}