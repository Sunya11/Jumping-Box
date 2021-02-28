var canvas;
var music;
var surfaceRed, surfaceBlue, surfaceYellow, surfaceGreen
var ball


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surfaceRed = createSprite(100, 585, 185, 25)
surfaceRed.shapeColor = "red"
surfaceBlue = createSprite(300, 585, 185, 25)
surfaceBlue.shapeColor = rgb(107, 129, 250)
surfaceYellow = createSprite(500, 585, 185, 25)
surfaceYellow.shapeColor = rgb(255, 203, 99)
surfaceGreen = createSprite(700, 585, 185, 25)
surfaceGreen.shapeColor = rgb(63, 161, 68)


    //create box sprite and give velocity
    ball = createSprite(random(20,750), 200, 30, 30)
    ball.shapeColor = rgb(255,255,255)
    ball.velocityX =4
    ball.velocityY =9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();

music.play();

ball.bounceOff(edges)

    
    if(surfaceRed.isTouching(ball)){
        ball.shapeColor = "red"
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop();
    }
    if(surfaceBlue.isTouching(ball)&& ball.bounceOff(surfaceBlue)){
        ball.shapeColor  = rgb(107, 129, 250)
       
    }
    if(surfaceYellow.isTouching(ball)&& ball.bounceOff(surfaceYellow)){
        ball.shapeColor = rgb(255, 203, 99)
    }
    if(surfaceGreen.isTouching(ball)&& ball.bounceOff(surfaceGreen)){
        ball.shapeColor = rgb(63, 161, 68)
}
    

drawSprites()
}
