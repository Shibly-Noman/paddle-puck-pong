class Paddle {
    constructor(_x) {
        this.y = height-8;
        this.x = _x;
        this.w = 100;
        this.h = 10;
        this.paddleSpeed = 5;
    }
    show = () => {
        fill(255, 0, 0);
        rectMode(CENTER);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
    move = () => {
        if(keyIsDown(LEFT_ARROW)){
            if(this.x >= 50){
                this.x -= this.paddleSpeed;
            }
        }else if(keyIsDown(RIGHT_ARROW)){
            if(this.x<=width-50){
                this.x += this.paddleSpeed;
            }
        }
    }
    
    

}