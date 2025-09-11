//positioning of elements on screen
let cloudY = -100; // starts just offscreen
let starY = -1250; // comes in after clouds
let planetY = -2000; // comes in after stars

//sizes of elements on screen that will be affected by the volumes
let cloudSize = 200; //200
let starSize = 100; // 100
let planetSize = 200; //200
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

cloudSize = map(bass, 0, 100, 130, 180); //subtle cloud size changes with bass volumes
starSize = map(vocal, 0, 100, 80, 130);   // subtle star size changes with vocal volumes
planetSize = map(other, 0, 100, 190, 230); //subtle planet size changes with drums volume
//background colour changes over time with AI copilot created star field
  var r = 120;
  var g = 100;
  var b = 250;

  r = map(frameCount-500, 0, 960, 190, 90); // -500 frame count so background changes slower
  g = map(frameCount-500, 0, 960, 200, 100);
  b = map(frameCount-500, 0, 960, 250, 150);
  background(r, g, b);
  
// --- Add these globals ---
let stars = [];
const numStars = 100;
let firstRun = true;


  // --- Initialize stars on first run ---
  if (firstRun) {
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: random(-width/2, width/2),
        y: random(-height/2, height/2),
        z: random(width)
      });
    }
    firstRun = false;
  }

  //commented out//translate(width/2, height/2); // Center origin

  // Map other (0-100) to lerp amount (0-1)
  let lerpAmt = map(other, 0, 100, 0, 1);

  for (let star of stars) {
    // Move star forward
    star.z -= 10;
    if (star.z < 1) {
      // Reset star to far away
      star.x = random(-width/2, width/2);
      star.y = random(-height/2, height/2);
      star.z = width;
    }

    // Project 3D to 2D
    let sx = star.x * (width / star.z);
    let sy = star.y * (width / star.z);

    let r = map(star.z, 0, width, 8, 0.5); // Size based on depth

    noStroke();
    fill(255);
    ellipse(sx, sy, r, r);
  }



  //draw stars
   push();
  translate(200, starY+100)
  scale(0.9)
  drawStar()
  pop();

  push();
  translate(-100,starY-50)
  scale(0.7)
  drawStar()
  pop();

  push();
  translate(0, starY+350);
  scale(0.6)
  drawStar()
  pop();

  push();
  translate(100, starY-250);
  scale(0.6)
  drawStar()
  pop();

  starY = starY +0.4

if(starY > 3500){ // ends just off screen
starY = -100
}

  //draw sparkles in
  //drawSparkle()

  //draw clouds
  push();
  translate(200, cloudY-150)
  scale(0.8)
  drawCloud() 
  pop();

  push();
  translate(150, cloudY-400);
  scale(0.7)
  drawCloud()
  pop();

  push();
  translate(-200, cloudY-250);
  scale(0.9)
  drawCloud()
  pop();

  cloudY = cloudY +0.4

if(cloudY > 2500){ // ends just off screen
cloudY = -100
}

//draw planets
  push();
  translate(-250, planetY+25) //left
  drawPlanet()
  pop();

  push();
  translate(0, planetY+350) //left
  drawPlanet()
  pop();

planetY = planetY +0.4

  drawLand()

}

function drawLand() {

   beginShape();
   fill(40, 130, 115); 
   vertex(0, 850);
   vertex(0, 725);
   vertex(350, 700);
   vertex(540, 750);
   vertex(540, 900);
   vertex(0, 960); 
   endShape(CLOSE);

   beginShape();
   fill(150, 240, 155); 
   vertex(0, 850);
   vertex(100, 850);
   vertex(350, 900);
   vertex(540, 875);
   vertex(540, 960);
   vertex(0, 960); 
   endShape(CLOSE);


}


function drawCloud() {
var ColourCloudLight = color(230, 210, 255) // 230, 210, 255
var ColourCloudShadow = color(200, 160, 210) //200, 160, 210
//if colourcloud


noStroke()
fill(ColourCloudLight) //highlight
ellipse(250, 150, cloudSize)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(350, 195, cloudSize-40, cloudSize-70)

noStroke()
fill(ColourCloudShadow)
ellipse(170, 185, cloudSize-40)

noStroke()
fill(ColourCloudShadow)
ellipse(240, 170, cloudSize)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(280, 190, cloudSize, cloudSize-50)

noStroke()
fill(ColourCloudShadow)
ellipse(240, 200, cloudSize+50, cloudSize-60)

}

//function drawSparkle() {

//var sparkle = {
//   locationX: random(width),
//   locationY: random(height),
//  size: random(5, 10)
//}

//fill(255); //white sparkles
//noStroke();
//ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
//ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);

//}

function drawStar() {
let opacityStar = color(250, 240, 255);
   beginShape();
   noStroke();
   fill(250, 240, 255);
  vertex(250, 150); 
  vertex(250+starSize, 200);
  vertex(250, 250);
  vertex(250-starSize, 200);
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

function drawPlanet() { //planet should look like a see through cartoon bubble
// planet ring full
noFill();
stroke(180, 220, 250);
strokeWeight(16);
ellipse(400, 400, 240, 60, 0, TWO_PI);

//Planet body
noStroke();
fill(120,180,255); 
ellipse(400,400,planetSize-40);

//Highlight of planet
fill(220, 230, 255, 120);
ellipse(420,370,planetSize-140);

fill(120,180,255); //same as planet body colour
ellipse(410,385,90,planetSize-140);

//Ring of planet front half
noFill(); 
stroke(180, 220, 250, 150);
strokeWeight(16);
//prompted AI copilot to make it so front half of ring only shows using arc function 
  arc(400, 400, 240, 60, PI, 0);



noStroke();


}