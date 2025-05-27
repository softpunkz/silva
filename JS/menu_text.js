
var u = 100; 
let font;
let points = [];
let minSize = 0.1;
let maxSize = 60;

function preload() {
  font = loadFont('JS/PlayfairDisplay-Italic.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    let rawPoints = font.textToPoints('SilVa', 0, 0, 450, {
      sampleFactor: 0.05,
      simplifyThreshold: 0
    });
  
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
  
    for (let pt of rawPoints) {
      if (pt.x < minX) minX = pt.x;
      if (pt.x > maxX) maxX = pt.x;
      if (pt.y < minY) minY = pt.y;
      if (pt.y > maxY) maxY = pt.y;
    }
  
    let textWidth = maxX - minX;
    let textHeight = maxY - minY;
  
    let offsetX = width / 2 - textWidth / 2 - minX;
    let offsetY = height / 2 + textHeight / 2 - maxY; 
  
    points = rawPoints.map(pt => {
      return { x: pt.x + offsetX, y: pt.y + offsetY };
    });
  }

function draw() {
grid();
background(255, 20);
let size = map(mouseX, 0, width, minSize, maxSize);


  
  
  fill(255, 89, 0);
  noStroke();
  for (let p of points) {
    ellipse(p.x, p.y, size, size);
  }
  blendMode(BLEND);
}





function grid() {
  	background(255);
	stroke(255);
	strokeWeight(0.8);
	for (let x = 0; x <= width; x += u) {
		for (let y = 0; y <= height; y += u) {
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  
  
 
}



