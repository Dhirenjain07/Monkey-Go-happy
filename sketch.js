
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, rockGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4
  console.log (ground.x);
  
  rockGroup = new Group();
  FoodGroup = new Group();
  
  score=0;
}

function draw() {
background("white");
  
  text("Survival Time : "+ score, 170,50);
  score = score + Math.round(getFrameRate()/65);
  
  if(keyDown("space") && monkey.y <= 315) {
      monkey.velocityY = -20;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);  
  
  if(ground.x <0){
    ground.x=ground.width/2;
}
  rocks();
  food();
  drawSprites();
}

function rocks(){
if(frameCount % 300 === 0) {
  rock=createSprite(200,327,20,20)
  rock.addImage("obstacle.png",obstaceImage);
  rock.scale= 0.1;
  rock.lifetime = 350;
  rock.velocityX = -4
  rockGroup.add(rock);
}
}

function food(){
  if(frameCount % 80 === 0) {
  banana=createSprite(400,50,20,20);
    banana.addImage("banana.png",bananaImage)
    banana.scale=0.1;
    banana.velocityX= -3
    banana.y = Math.round(random(80,120));
    FoodGroup.add(banana) ;
  }
}




