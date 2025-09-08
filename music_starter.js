let cloudY = -100; // starts just offscreen
let cloudSize = 175; // 200
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  var r = 120;
  var g = 100;
  var b = 250;

  r = map(frameCount-500, 0, 960, 190, 90); // -500 frame count so background changes slower
  g = map(frameCount-500, 0, 960, 200, 100);
  b = map(frameCount-500, 0, 960, 250, 150);
  background(r, g, b);
  



  //draw stars
   push();
  scale(0.9)
  translate(225, 100)
  drawStar()
  pop();

  push();
  scale(0.7)
  translate(100,-50)
  drawStar()
  pop();

  push();
  scale(0.6)
  translate(-100, 350);
  drawStar()
  pop();

  //draw sparkles in
  drawSparkle()

  //draw clouds
  push();
  translate(100, -150)
  drawCloud() 
  pop();

  push();
  scale(0.8)
  translate(150, -400);
  drawCloud()
  pop();

  push();
  scale(0.8)
  translate(-200, -250);
  drawCloud()
  pop();
}

function drawCloud() {
var ColourCloudLight = color(230, 210, 255) // 230, 210, 255
var ColourCloudShadow = color(200, 160, 210) //200, 160, 210
//if colourcloud


noStroke()
fill(ColourCloudLight) //highlight
ellipse(250, cloudY+150, cloudSize)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(350, cloudY+195, cloudSize-40, cloudSize-70)

noStroke()
fill(ColourCloudShadow)
ellipse(170, cloudY+185, cloudSize-40)

noStroke()
fill(ColourCloudShadow)
ellipse(240, cloudY+170, cloudSize)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(280, cloudY+190, cloudSize, cloudSize-50)

noStroke()
fill(ColourCloudShadow)
ellipse(240, cloudY+200, cloudSize+50, cloudSize-60)

cloudY = cloudY +0.25

if(cloudY > 1600){ // ends just off screen
cloudY = -100
}

}

function drawSparkle() {

var sparkle = {
   locationX: random(width),
   locationY: random(height),
   size: random(1, 6)
}

fill(255); //white sparkles
noStroke();
ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);

}

function drawStar() {
let opacityStar = color(250, 240, 255);
   beginShape();
   fill(250, 240, 255);
  vertex(250, 150); 
  vertex(300, 200);
  vertex(250, 250);
  vertex(200, 200); 
  endShape(CLOSE); // base diamond shape done

   beginShape();
   fill(250, 240, 255); 
   vertex(250, 100);
   vertex(290, 200);
   vertex(250, 300);
   vertex(210, 200); 
   endShape(CLOSE);

   beginShape();
   opacityStar.setAlpha(120);
   fill(opacityStar); 
   vertex(250, 75);
   vertex(315, 200);
   vertex(250, 325);
   vertex(185, 200); 
   endShape(CLOSE);

   beginShape();
   opacityStar.setAlpha(120);
   fill(opacityStar); 
   vertex(250, 50);
   vertex(340, 200);
   vertex(250, 350);
   vertex(160, 200); 
   endShape(CLOSE);
}