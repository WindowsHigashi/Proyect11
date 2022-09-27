var glitchImage, glitch, glitchGroup;
var rocketAnimation,rocket;
var score=0;
var spaceImage,space;
var gamestage="game";
var gameover, gameOver;

function preload(){
glitchImage = loadImage("Glitch.jpg");
rocketAnimation=loadImage("Rocket.jpg");
spaceImage=loadImage("Space.webp");
gameover=loadImage("gameOver.png");

}

function setup() {
    createCanvas(600,600);
    glitchGroup=new Group();
    space=createSprite(300,300,1200,1200);
    space.addImage("space",spaceImage);

    rocket=createSprite(300,500);
    rocket.addImage("rocketaek",rocketAnimation);
    rocket.scale=0.08;
    rocket.setCollider("rectangle",0,0,200,2200);

    gameOver=createSprite(300,300);
    gameOver.addImage("over",gameover);
    gameOver.visible=false;
    
    
 
}

function draw() {
background(200);
drawSprites();

text("Score= "+score,450,100);
if(gamestage==="game"){
    score=Math.round(frameCount/2);

    space.velocityY=1;
    if(space.y%600===0){
        space.y=600;
    }

    
    rocket.x=World.mouseX;
    if(rocket.isTouching(glitchGroup)){
        gamestage="over";
        space.velocityY=0;
        glitchGroup.destroyEach();
        gameOver.visible=true;
        

    }

    spawnGlitch();
    }



 


}

function spawnGlitch(){
if(frameCount%120===0){
    glitch=createSprite(Math.round(random(150,550)),10);
    glitch.addImage("glitchaek",glitchImage);
    glitch.scale=0.03;
    glitch.velocityY=3;
    glitch.setLifetime=800;
    glitchGroup.add(glitch);
}
}
