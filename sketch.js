var playerPaddle;
var compPaddle;


function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  compPaddle= new Paddle();
  
}

function draw() {
  //set background to sky blue
  background("skyblue");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  compPaddle.xPosition=10;
  compPaddle.yPosition=160;
  compPaddle.display();
  playerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}