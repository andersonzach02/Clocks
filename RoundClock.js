class RoundClock
{

    constructor(clockFace, secondHand, minuteHand, hourHand)
    {
        this.clockFace = clockFace;
        this.secondHand = secondHand;
        this.minuteHand = minuteHand;
        this.hourHand = hourHand;
    }

    draw()
    {
        this.clockFace.draw();
        point(width/2, height/2);
        this.secondHand.draw(second());
        this.minuteHand.draw(minute());
        this.hourHand.draw(hour());
    }

}