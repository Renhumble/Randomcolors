//var diameter = 100;
 //var diameter, same thing as size. Ex. set diameter as ellipse Width n H.
function setup() {
 //createCanvas(width, height);
 createCanvas(500, 500);
}

function draw() {
//background(red, green, blue);
//each parameter (0-255);
 background(50, 100, 50);
//ellipse(x position, y position, width, height);

if (mouseIsPressed) {
  fill(250, 0, 0);
  ellipse(random (width), random (height), 50, 50);
} else {
  fill(255, 255, 255);
  rect(100, 25, 50, 50);
}

fill(250, 255, 0);
ellipse(random (width), random (height), 50, 50);
fill(250, 0, 0);
ellipse(mouseX, mouseY, 100, 100);
fill(250, 255, 0);
ellipse(random (width), random (height), 50, 50);
fill(250, 255, 0);
ellipse(random (width), random (height), 50, 50);
fill(250, 255, 0);
ellipse(random (width), random (height), 50, 50);


textSize(20);
text('click me', 10, 50);
fill(0, 102, 153);

}
