// this is the variable your picker should change
var pickedColor = 0;

var colourFirstSelection;
var myCanvas;
var selectedColour;
var candidateColour;

var input;
var button;

var time;
var wait = 1000;
var counter;

var counterIsActivated;

var sound;
var myFont;

var challengeWords = ["apple", "dragonfruit", "banana", "starfruit", "amphisbaena", "argle-bargle",
    "bergschrund", "blatherskite", "clepsydra", "commensalism", "cybersquatting", "disembogue",
    "floccinaucinihilipilification", "hunt-and-peck", "prosopagnosia",
    "peely-wally", "merrythought", "monkey's-wedding"];

var challengeWord;
var myText;

function preload() {
    sound = loadSound('chime.mp3');
    myFont = loadFont("custom_font.ttf");
}


function setup() {

    colourFirstSelection = true;

    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.id = "index";

    time = millis();//store the current time

    input = createInput();
    input.size(220, 50);
    input.style('font-size', '35px');
    input.position(width/2 - input.width, height - (input.height + 30));
    input.hide();

    button = createButton('submit');
    button.size(130, 55);
    button.style('font-size', '35px')
    button.position(input.x + input.width + 10, height - (button.height + 30));
    button.mousePressed(storeWord);
    button.hide();

}


function draw() {

    colorDrawer();

    push();
    fill(300);
    noStroke();
    rect(0, height - 220, width, 220);
    pop();

    if (counter < 5 && counter >= 0 && counterIsActivated) {
        input.show();
        button.show();
        fill(50);
        textSize(50);
        push();
        textFont(myFont);
        myText = text(challengeWord, width/2 - input.width, height - 150, 500, 500);
        pop();
        text(counter, width/2 - input.width, height - 200, 500, 500);
        push();
        textSize(25);
        text("But First, Please Prove You're Not a Robot.", width/2 - input.width, height - 220, 500, 500);
        pop();
    } else if (!counterIsActivated) {
        input.hide();
        button.hide();
    }


    selectedColour = get(mouseX, mouseY);


    // display the currently "picked" colour in the bottom-right
    push();
    fill(pickedColor);
    rect(width-100, height-100, 100, 100);
    pop();

    if (counterIsActivated) {
        push();
        fill(candidateColour);
        rect(width-200, height-100, 100, 100);
        pop();
    }


    // Colour Painter
    if(mouseIsPressed){
        push();
        stroke(pickedColor);
        strokeWeight(10);
        line(pmouseX,pmouseY,mouseX,mouseY);
        pop();
    }

    //check the difference between now and the previously stored time is greater than the wait interval
    if(millis() - time >= wait){
        time = millis();// update the stored time
        counter -= 1;

        if (counter >= 0 && counterIsActivated) {
            sound.play();
        }

        if (counter < 0) {
            counterIsActivated = false;
            input.value('');
        }

    }

}

function colorDrawer() {

    var horizontalMargins = width * .05;
    var verticalMargins = height * .05;
    var colourSquareWidth = (width - horizontalMargins) / 10;
    var colourSquareHeight = (height - verticalMargins) / 10;
    var square1XPos = horizontalMargins /2;
    var square2XPos = square1XPos + colourSquareWidth;
    var square3XPos = square2XPos + colourSquareWidth;
    var square4XPos = square3XPos + colourSquareWidth;
    var square5XPos = square4XPos + colourSquareWidth;
    var square6XPos = square5XPos + colourSquareWidth;
    var square7XPos = square6XPos + colourSquareWidth;
    var square8XPos = square7XPos + colourSquareWidth;
    var square9XPos = square8XPos + colourSquareWidth;
    var square10XPos = square9XPos + colourSquareWidth;

    var squaresYPosSecondRow = (verticalMargins / 2) + colourSquareHeight;
    var squaresYPosThirdRow = (verticalMargins / 2) + colourSquareHeight * 2;
    var squaresYPosFourthRow = (verticalMargins / 2) + colourSquareHeight * 3;



    push();
    noStroke();
    // COLOUR 1
    fill('#f6fce9');
    rect(square1XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 2
    fill('#fcda12');
    rect(square2XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 3
    fill('#fcb717');
    rect(square3XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 4
    fill('#fc9816');
    rect(square4XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 5
    fill('#fc4016');
    rect(square5XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 6
    fill('#fc090e');
    rect(square6XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 7
    fill('#fc0267');
    rect(square7XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 8
    fill('#fc0bbb');
    rect(square8XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 9
    fill('#cf1ffc');
    rect(square9XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 10
    fill('#2722fc');
    rect(square10XPos, verticalMargins / 2, colourSquareWidth, colourSquareHeight);

    //COLOUR 11
    fill('#1a83fc');
    rect(square1XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 12
    fill('#17c9ff');
    rect(square2XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 13
    fill('#0bffa2');
    rect(square3XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 14
    fill('#05ff39');
    rect(square4XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 15
    fill('#55da0d');
    rect(square5XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 16
    fill('#c4db11');
    rect(square6XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 17
    fill('#d6af09');
    rect(square7XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 18
    fill('#d0230a');
    rect(square8XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 19
    fill('#97053f');
    rect(square9XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 20
    fill('#8d0689');
    rect(square10XPos, squaresYPosSecondRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 21
    fill('#05038d');
    rect(square1XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 22
    fill('#083074');
    rect(square2XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 23
    fill('#07717f');
    rect(square3XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 24
    fill('#0b9137');
    rect(square4XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 25
    fill('#0aa716');
    rect(square5XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 26
    fill('#1a3d04');
    rect(square6XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 27
    fill('#525204');
    rect(square7XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 28
    fill('#7e0906');
    rect(square8XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 29
    fill('#61021d');
    rect(square9XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 30
    fill('#550957');
    rect(square10XPos, squaresYPosThirdRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 31
    fill('#200343');
    rect(square1XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 32
    fill('#042035');
    rect(square2XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 33
    fill('#033822');
    rect(square3XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 34
    fill('#073d04');
    rect(square4XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 35
    fill('#192604');
    rect(square5XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 36
    fill('#392805');
    rect(square6XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 37
    fill('#332704');
    rect(square7XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 38
    fill('#2c0110');
    rect(square8XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 39
    fill('#070c23');
    rect(square9XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);

    //COLOUR 40
    fill('#000000');
    rect(square10XPos, squaresYPosFourthRow, colourSquareWidth, colourSquareHeight);
    pop();

    fill(50);
    textSize(50);
    push();
    myText = text('Please select a colour', width/2 - input.width, squaresYPosFourthRow + colourSquareHeight, 500, 500);
    pop();
}


function mouseClicked(){
    if (!counterIsActivated) {
        setChallengeWord();
        counter = 5;
        candidateColour = selectedColour;
        counterIsActivated = true;
    }
}

function setChallengeWord() {
    // var randomNumber = random(0,3);
    challengeWord = challengeWords[Math.floor(Math.random() * challengeWords.length)];
}

function storeWord() {
    var myWord = input.value();
    if (myWord === challengeWord) {
        counter = 0;
        pickedColor = candidateColour;
    }
}

function keyPressed() {
    if (keyCode === 13 && counterIsActivated) {
        storeWord();
    }
}




