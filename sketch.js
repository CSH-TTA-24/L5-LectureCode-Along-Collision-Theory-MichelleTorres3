let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyxPos = 300;
let enemyyPos = 300;
let enemySize; 

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100);
}

function draw() {
  background(0);
  
   let distance = (myXPos, myYPos, enemyxPos, enemyyPos)
 
  fill(0, 255, 255);
  ellipse(myXPos, myYPos, mySize, mySize);
  fill("red");
  ellipse(enemyxPos, enemyyPos, enemySize, enemySize);

  if(distance <= (mySize / 2) + (enemySize / 2)){
    fill(random(255),random(255), random(255));
    textSize(22);
    text("uh ohhhhhhh", 140, 480);
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

 
}
