var fixedRect, movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor="green";
  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor="green";
  gameObj3=createSprite(300,100,50,50);
  gameObj3.shapeColor="green";
  gameObj4=createSprite(400,100,50,50);
  gameObj4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameObj1)){

  movingRect.shapeColor = "red";
  gameObj1.shapeColor = "red";
 }
else {
  movingRect.shapeColor = "green";
  gameObj1.shapeColor = "green";
 }

  bounceOff(movingRect,gameObj2);

  drawSprites();

}

function bounceOff(object1,object2){
  console.log("hi");
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&  object2.x - object1.x <  object2.width/2 +object1.width/2){

      object1.velocityX=object1.velocityX * (-1);
      object2.velocityX=object2.velocityX * (-1);
     
      console.log(object1.velocityX);
      

    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      &&  object2.y - object1.y <  object2.height/2 +object1.height/2){
  
        object1.velocityY=object1.velocityY * (-1);
        object2.velocityY=object2.velocityY * (-1);
       
        console.log(object2.velocityX);
       
  
      }
  


}






