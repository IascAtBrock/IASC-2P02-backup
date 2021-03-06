var angles = [ 50, 50, 75, 75, 110 ];

var docs = ["Alvarado", "Drucker", "Kirschenbaum", "Moretti"]
var topics = ["graphical time information interpretation data humanistic space chart temporal display", "humanities digital computing humanists convention mla http english university text", "novels years history genres figure form literary historical english year", "work social data number reading shift field fact day gender"]
var alvarado = [ 38.88, 179.28, 19.08, 123.12 ];
var drucker = [ 264.96, 0, 0, 66.96 ];
var kirschenbaum = [ 18.72, 254.52, 24.48, 62.28 ];
var moretti = [ 0, 0, 249.48, 87.12 ];
var nowviskie = [ 77.4, 174.96, 31.32, 76.32 ];
var data = [[ 38.88, 179.28, 19.08, 123.12 ], [ 264.96, 0, 0, 66.96 ], [ 18.72, 254.52, 24.48, 62.28 ], [ 0, 0, 249.48, 87.12 ]];
var colours = [ '#D46A6A', '#FFD1AA', '#669999', '#88CC88']

function setup() {
  createCanvas(1000, 960);
  noStroke();
}

function draw() {
  background(50);
/*
  if (mouseX < width/2 && mouseY < 425){
  angles = alvarado;
  }
  if (mouseX > width/2 && mouseY < 425){
  angles = drucker;
  }
  if (mouseX < width/2 && mouseY > 450){
  angles = kirschenbaum;
  }
  if (mouseX > width/2 && mouseY > 450){
  angles = moretti;
  }
  if (mouseY < 150) {
    angles = [ 0, 0, 0, 0 ];
  }
*/

  //drawQuadrants();
  var selected = 0;
  pieInSky(docs, selected);
  pieChart(220, angles, colours);


  var thing = get(mouseX, mouseY);
  fill(255);
  //text(thing[0], width-150, height-100);
  angles = [ 90, 90, 90, 90 ];
  selected = 0;

  for (var i = 90; i <= 360; i+= 90) {
    var x = (i/90) - 1;
    if (thing[0] == (150 + (i/10))) {
      angles = data[x];
      selected = i;
    }
  }

  pieInSky(docs, selected);
  pieChart(220, angles, colours);
  drawWordsTopics(topics, colours);
}


function pieChart(diameter, data, colours) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(str(colours[i]));
    arc(width/2, height/2.25, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    text(int(((angles[i] /360) * 100)) + "%", 60, 20 + (i * 30));
  }
}

function drawWordsTopics(words, colours) {
  var loc = 20;
  for (var i = 0; i < words.length; i++) {
    fill(str(colours[i]));
    textSize(20);
    text("Topic " + (i + 1) + ": " + words[i], 150, loc);
    loc = loc + 30;
  }
}

function drawWordsDocs(words) {
  for (var i = 0; i < words.length; i++) {
    fill(255);
    textSize(15);
    text(words[i], width/4, height/3);
  }
}

function pieInSky(docs, selected) {
  var lastAngle = 0
  for (var i = 90; i <= 360; i+= 90) {
    fill(150+(i/10));
    if (i == selected) {
      fill(100+(i/10));
    arc(width/2, height/2.25, height/1.9, height/1.9, radians(lastAngle), radians(i));
    }
    arc(width/2, height/2.25, height/2, height/2, radians(lastAngle), radians(i));
    lastAngle += 90;

    if (i < 181) {
    posY = height/2.25 + 100;
    }

    if (i > 181) {
    posY = height/2.25 - 100;
    }



    if (i > 179 && i < 271) {
    posX = width/2 - 150;
  } else {
        posX = width/2 + 75;
  }

    fill(250);
    text(docs[i/90-1], posX, posY);

  }
}

function drawQuadrants() {
  stroke(255);
  line(0, 150, width, 150);
  line(width/2, 150, width/2, height);
  line(0, 425, width, 425);
  noStroke();
  fill(255);
  text("Alvarado", 300, 300);
  text("Drucker", 800, 300);
  text("Kirschenbaum", 300, 600);
  text("Moretti", 800, 600);
}
