
var clock;


function setup()
{
    background(0);
    createCanvas(windowWidth, windowHeight);
    let clockColor;
    clockColor = color(255, 0 , 0);
    clock = new ClockFace(340, 4, clockColor);
}

function draw()
{
    background(0);
    clock.draw();
}