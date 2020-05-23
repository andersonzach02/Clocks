
var clock;


function setup()
{
    background(0);
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    let clockColor;
    clockColor = color(255, 0 , 0);
    clockFace = new ClockFace(340, 4, clockColor);
    secondHand = new ClockHand(90, 60, clockColor);
    minuteHand = new ClockHand(120, 60, color(0, 255, 0));
    hourHand = new ClockHand(70, 12, color(0, 0, 255));

    clock = new RoundClock(clockFace, secondHand, minuteHand, hourHand);
}

function draw()
{
    background(0);
    clock.draw();
}