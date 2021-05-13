//This section is where we declare our variables.
let topics = ["Humanists and Their Texts\nhumanists media humanist text representation textual use texts means field",
              "DH Schools of Thought\nhumanities computational humanist fields schools people indicate old groups share",
              "Attitudes Towards the Growing Field of DH\ncurriculum encounter resources fact contributes growth growing feeling products conceived",
              "Defining dh\nsocial definition methods work category remains code set given thought"]

let colors = ['#D46A6A', '#407F7F', '#D49A6A', '#55AA55']
let docs = ['alvarado', 'drucker', 'kirschenbaum', 'moretti']

let array = []
array[0] = [3, 3, 15, 9]
array[1] = [12, 22, 9, 21]
array[2] = [4, 12, 3, 3]
array[3] = [22, 5, 12, 9]

let spacing = 200

//This function sets up our canvas.
function setup() {
  createCanvas(720, 1000)
  //noStroke()
  noCursor()
}

//This function draws on the canvas. Each function draws something different. The functions are defined further down.
function draw() {
  background(100)

  drawTopics(topics)
  drawLegend(docs, colors)
  navigation(array)
}

//This function draws circles. The radius of each circle is determined by each variable in an array. It is called inside the navigate function.
function drawGraph(array, colors) {
for (let i = 0; i < array.length; i++) {
  //customWidth = width/array.length
  fill(colors[i])
  ellipse(width/2 + (i * 50) - 100, mouseY, array[i] * 10)
}
}

//This function lists our topics in white vertically along the canvas. The spacing between each list item is defined in the spacing variable.
function drawTopics(topics) {
  for (let i = 0; i < topics.length; i++) {
    fill(255)
    textSize(20)
    text(topics[i], 20, 200 + (i * spacing))
  }
}

//This function lists our documents at the top of the canvas.
function drawLegend(docs, colors) {
  for (let i = 0; i < docs.length; i++) {
    fill(colors[i])
    textSize(25)
    text(docs[i], 20 + (i * 200), 25)
  }
}

//This function calls the graph function. Depending on the value for mouseY, it gives draw a different array.
function navigation(array) {
  for (let i = 0; i < array.length; i++) {
    let bottom = (spacing * 1) + (i * 200)
    let top = (spacing * 2) + (i * 200)
    if (mouseY > bottom && mouseY < top) {
      drawGraph(array[i], colors)
      //fill(255)
      //text(array[i], 50, mouseY)
    }
  }
}
