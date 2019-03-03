//Here is where we declare our Topic Modeling data
let angles = [0, 0, 0, 0];
let alvarado = [ 38.88, 179.28, 19.08, 123.12 ];
let drucker = [ 264.96, 0, 0, 66.96 ];
let kirschenbaum = [ 18.72, 254.52, 24.48, 62.28 ];
let moretti = [ 0, 0, 249.48, 87.12 ];

//Here is where we declare text and stylistic info
let colors = ['#D46A6A', '#407F7F', '#D49A6A', '#55AA55'];
let docs = ['alvarado', 'drucker', 'kirschenbaum', 'moretti'];
let topics = ['Graphical Interpretation: graphical time information interpretation data humanistic space chart temporal display',
              'Field of DH: humanities digital computing humanists convention mla http english university text',
              'Literary History: novels years history genres figure form literary historical english year',
              'Data and Culture: work social data number reading shift field fact day gender'
            ]

//This function sets up our canvas
function setup() {
  createCanvas(640, 720);
  noStroke();
  noCursor();
}

//This function draws on the canvas. Each function draws something different.
function draw() {
  background(75);
  drawBackground(docs);

  let hover = angles
  if (mouseY > 150 && mouseY < 300) {
    hover = alvarado;
  }
  if (mouseY > 300 && mouseY < 450) {
    hover = drucker;
  }
  if (mouseY > 450 && mouseY < 600) {
    hover = kirschenbaum;
  }
  if (mouseY > 600) {
    hover = moretti;
  }

  pieChart(250, hover, colors);
  listTopics(topics, colors, hover);
}



//This function draws our pie chart. It is called from the draw function, above.
function pieChart(diameter, data, colors) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(str(colors[i]));
    arc(
      mouseX,
      mouseY,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(data[i])
    );
    lastAngle += radians(data[i]);
    text(int(((data[i] / 360) * 100)) + "%", 20, 20 + (i * 25));
  }
}

//This function prints our topics at the top of the canvas. It is called from the draw function, above.
function listTopics(topics, colors, hover) {
  for (let i = 0; i < topics.length; i++) {
    fill(colors[i]);
    textSize((hover[i] / 10) + 20);
    text(topics[i], 80, 20 + (i * 25));
  }
}

//This function draws a segmented background that lists our four docs. It is called from the draw function, above.
function drawBackground(docs) {
  let gap = (height - 150) / 4;
  for (let i = 0; i < docs.length; i++) {
    fill(255);
    stroke(255);
    line(0, (gap * (i + 1)), width, (gap * (i + 1)));
    noStroke();
    textSize(20);
    text(docs[i], 20, (gap * (i + 1) + 50));
  }
}
