let last_words = "";
let last_words_opacity = 0;

// --- Add these globals ---
let stars = [];
const numStars = 300;
let firstRun = true;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);

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

  translate(width/2, height/2); // Center origin

  // Map bass (0-100) to lerp amount (0-1)
  let lerpAmt = map(bass, 0, 100, 0, 1);

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
}
