var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 55.0; // Height of wave
var period = 400.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var boatimg;
var fish;
var fish2;
var shark;
var changefish;
var sound;
var time;
var wait = 30;

var lastSecond = 0;

/**
 * Setup the sketch
 */

function preload() {
	soundFormats('mp3', 'ogg');
	sound = loadSound('audio/jawsaudio.mp3');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(710, 400);

//with of the wave
  w = width+16;

//speed of the wave
  dx = (TWO_PI / period) * xspacing;

//how wide the wave will go, how quick, setting enough slots in the array
  yvalues = new Array(floor(w/xspacing));

	boatimg = loadImage('images/boat.png');
	fishimg = loadImage('images/fish.png');
	fish2img = loadImage('images/fish2.png');
	sharkimg = loadImage('images/shark.png');
	changefish = fishimg;
	sound.play();
	time = second();
}

/**
 * Main animation loop
 */
function draw() {

	if(second() - time >= wait){
    sound.play();//if it is, do something
    time = second();//also update the stored time
  }

background(175, 230, 242);

textSize(80);
var p = color ("purple");
fill(p);
text(second(),1000, 110);

var g = color ("green");
fill(g);
text(minute(), 877, 110);

var b = color ("black");
fill(b);
text(" : ", 950, 107);

var o = color ("orange");
fill(o);
text(hour(), 750, 110);

var b = color ("black");
fill(b);
text(" : ", 820, 107);


calcWave();
//translate(0, -100)
renderWave();


if(lastSecond != second()) {

	var b = color(204, 35, 200);
  fill(b);
	ellipse(500, 400, 50, 50);

}

	lastSecond = second();
	//image(boatimg, 0, 0, 100, 150); // var, position x, position y, width, height

	//image(fishimg, 20, 20, 170, 170);

	// image(fish2img, 20, 20, 170, 170);

}




//this overall function figures out where the center of each dot should be and adds that information to the array
function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude - 100;
    x+=dx;
  }
}

function renderWave() {
  //noStroke();
  fill(24, 100, 234);
	//noFill();
	strokeWeight(2);
	stroke(255);
  // A simple way to draw the wave with an ellipse at each location
beginShape();


//in an array,
//yvalues(10) = 10th element in array

vertex(width, height);
vertex(0,height);
  for (var x = 0; x < yvalues.length; x++) {
    //ellipse(x*xspacing, 0, x*xspacing, height);
		vertex(x*xspacing, height/2+yvalues[x]);

  }
endShape();

push();

	// mapping the current second to a value between 0 and total width
var x = map(hour(), 1, 60, 0, width);
	translate(30*xspacing, height/2+yvalues[30] - 10);


var y = color ("yellow");
fill(y);
// rect(0, -30, 100, 60);

stroke(0);
translate(0, -150);
// line(50, 90, 50, 118);

var o = color ("orange");
fill(o);
// triangle(20, 95, 50, 20, 106, 90);

image(boatimg, 10, -5, 150, 200); //

var r;

if(second() % 2 == 1) {
	r = color("red");
} else {
	r = color("green");
}


translate(400, 330);

var p;

console.log(minute());

if(minute() % 2 ==1) {
	p = color("purple");
} else {
	p = color("orange");
}
fill(p);
//triangle(5, 95, 58, 20, 90, 90);

fill(r);
//ellipse(-35, 100, 100, 50);

if(second() % 2 == 1) {
	changefish = fishimg;
} else {
	changefish = fish2img;
}

image(changefish, 20, -10, 150, 150);

  image(sharkimg, -650, -50, 300, 225);



pop();
//rect(30*xspacing, height/2+yvalues[30] - 10, 10, 15);

}
