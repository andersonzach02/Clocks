



function setup()
{

}

function draw()
{
    background(255);
    var hr = hour();
    var mn = minute();
    var sec = second();
    text(hr + ":" + mn + ":" + sec, 20, 20);
}