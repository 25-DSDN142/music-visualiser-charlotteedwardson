let sunX = -40; // starts just offscreen
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(140,160,230)

  drawCloud()

   fill(225, 90, 190);
   ellipse(sunX-20, 500, 50)
sunX = sunX +0.7

if(sunX > 570){ // ends just off screen
sunX = -10

}
}

function drawCloud() {
var ColourCloudLight = color(230, 210, 255) // 230, 210, 255
var ColourCloudShadow = color(200, 160, 210) //200, 160, 210
//if colourcloud


noStroke()
fill(ColourCloudLight) //highlight
ellipse(250, 150, 200)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(350, 195, 160, 130)

noStroke()
fill(ColourCloudShadow)
ellipse(170, 185, 160)

noStroke()
fill(ColourCloudShadow)
ellipse(240, 170, 200)

noStroke()
fill(ColourCloudLight) //highlight
ellipse(280, 190, 200, 150)

noStroke()
fill(ColourCloudShadow)
ellipse(240, 200, 250, 140)





}