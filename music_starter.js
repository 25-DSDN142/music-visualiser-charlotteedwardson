let sunY = 350;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

   fill(225, 90, 190);
   ellipse(300, sunY, 50)
sunY = sunY +1

if(sunY > 1000){
sunY = -10
}
}