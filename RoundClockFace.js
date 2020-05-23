class ClockFace
{

    constructor(radius, strokeWeight, color)
    {
        this.radius = radius;
        this.ClockColor = color;
        this.strokeWeight = strokeWeight;
    }

    draw()
    {
        noFill()
        stroke(this.ClockColor);
        strokeWeight(this.strokeWeight);
        ellipse(width/2, height/2, this.radius, this.radius);
    }



}