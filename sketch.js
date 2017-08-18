// this is the variable your picker should change
var pickedColor = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}
//TEST
function draw() {


    // display the currently "picked" colour in the bottom-right
    fill(pickedColor);
    rect(width-100, height-100, 100, 100);

}
