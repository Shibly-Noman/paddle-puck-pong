
class Puck {
    constructor (){
        this.x = width / 2;
        this.y = height / 2;
        this.Xspeed = 2;
        this.Yspeed = 3;
    }

    update = () => {
        this.x += this.Xspeed;
        this.y += this.Yspeed;
    }

    show = () => {
        fill(255);
        ellipse(this.x, this.y, 25);
    }

    reset = () => {
        this.x = width / 2;
        this.y = height / 2;
    }
    
    hitEdges = () => {
        if(this.x < 0 + 10 || this.x > width - 10){
            this.Xspeed*=-1;
        }
        if(this.y > height){
            this.reset();
        }
        if(this.y < 0){
            this.Yspeed*=-1;
        }
    }

    hitPaddle = () => {
        if(this.y >= paddle.y-12 && this.x > paddle.x - 50 && this.x < paddle.x + 50){
            this.Yspeed*=-1;
        }
    }
}