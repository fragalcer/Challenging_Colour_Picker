// this is the variable your picker should change
var pickedColor = 0;

var colourSquareWidth;
var colourSquareHeight;
var colourHorizontalMargins;
var colourVerticalMargins;
var square1XPos;
var square2XPos;
var square3XPos;
var square4XPos;
var square5XPos;
var square6XPos;
var square7XPos;
var square8XPos;
var squaresYPosSecondRow;
var colourFirstSelection;
var myCanvas;
var selectedColour;
var candidateColour;
var img;

var input;
var button;

var time;
var wait = 1000;
var counter;

var counterIsActivated;

var sound;
var myFont;

var fruits = ["apple", "dragonfruit", "banana", "starfruit"];

var challengeWord;

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
    input.size(180, 30);
    input.style('font-size', '20px');
    input.position(width/2 - input.width, height * .8);
    input.hide();

    button = createButton('submit');
    button.position(input.x + input.width, height * .8);
    button.mousePressed(storeWord);
    button.hide();

}


function draw() {

    colorDrawer();

    push();
    fill(300);
    noStroke();
    rect(0, height * .8 - 125, width, 150);
    pop();

    if (counter < 10 && counter >= 0 && counterIsActivated) {
        input.show();
        button.show();
        fill(50);
        textSize(50);
        push();
        textFont(myFont);
        text(challengeWord, width/2 - input.width, height * .8 - 75, 500, 500);
        pop();
        text(counter, width/2 - input.width, height * .8 - 125, 500, 500);
        
    } else if (!counterIsActivated) {
        input.hide();
        button.hide();
    }


    selectedColour = get(mouseX, mouseY);
    colourSquareWidth = width / 8;
    colourSquareHeight = height / 8;
    colourHorizontalMargins = width / 60;
    colourVerticalMargins = height / 60;
    square1XPos = width - colourSquareWidth * 8 + colourHorizontalMargins;
    square2XPos = width - colourSquareWidth * 7 + colourHorizontalMargins;
    square3XPos = width - colourSquareWidth * 6 + colourHorizontalMargins;
    square4XPos = width - colourSquareWidth * 5 + colourHorizontalMargins;
    square5XPos = width - colourSquareWidth * 4 + colourHorizontalMargins;
    square6XPos = width - colourSquareWidth * 3 + colourHorizontalMargins;
    square7XPos = width - colourSquareWidth * 2 + colourHorizontalMargins;
    square8XPos = width - colourSquareWidth * 1 + colourHorizontalMargins;
    squaresYPosSecondRow = colourVerticalMargins + colourSquareHeight;


    // display the currently "picked" colour in the bottom-right
    fill(pickedColor);
    rect(width-100, height-100, 100, 100);

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
    push();
    noStroke();
    // COLOUR 1
    fill('#14e81e');
    rect(square1XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 2
    fill('#00ea8d');
    rect(square2XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 3
    fill('#017ed5');
    rect(square3XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 4
    fill('#b53dff');
    rect(square4XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 5
    fill('#73ffdb');
    rect(square5XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 6
    fill('#73ffdb');
    rect(square6XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 7
    fill('#73ffdb');
    rect(square7XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 8
    fill('#73ffdb');
    rect(square8XPos, colourVerticalMargins, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 5
    fill('#8d00c4');
    rect(square1XPos, squaresYPosSecondRow, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 6
    fill('#FFFF00');
    rect(square2XPos, squaresYPosSecondRow, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 7
    fill('#FC4A1A');
    rect(square3XPos, squaresYPosSecondRow, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);

    //COLOUR 8
    fill('#FF0000');
    rect(square4XPos, squaresYPosSecondRow, colourSquareWidth - colourHorizontalMargins, colourSquareHeight - colourVerticalMargins);
    pop();
}


function mouseClicked(){
    if (!counterIsActivated) {
        setChallengeWord();
        counter = 10;
        candidateColour = selectedColour;
        counterIsActivated = true;
    }
}

function setChallengeWord() {
    // var randomNumber = random(0,3);
    challengeWord = fruits[Math.floor(Math.random() * fruits.length)];
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




