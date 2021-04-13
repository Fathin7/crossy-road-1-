var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683, height-150-(i*400) , widht , grassHeight);
    if(i%2===0){
      var road = createSprite(683 , height-150-(i*400)-grassHeight , width , 300);
      road.shapeColour = "black";
     
     }
    
     bottomGrass1.shapeColour = "grey";
   
   }

 
   
 }

function draw() {
  background("skyblue");
 
  
 

  drawSprites();
}

