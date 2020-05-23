class ClockHand
{

    constructor(length, timeLengthMeasured, color)
    {
        this.length = length;
        this.measuredTime = timeLengthMeasured;
        this.handColor = color;
    }

    draw(time)
    {
        let handAngle = map(time, 0, this.measuredTime, 0, 360);
        let lineX = this.length*cos(handAngle - 90);
        let lineY= this.length*sin(handAngle - 90);
        
        stroke(this.handColor);
        line(width/2, height/2, (width/2) + lineX, (height/2) + lineY);
    }


}