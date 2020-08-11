//let socket;

/*function setup(){
    createCanvas(800, 400);
    socket = io.connect('http://localhost:3000');
    socket.on('positionFrom', newDrawing);
}
function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 36);
} */

/*function mouseDragged(){
    

    var data = {
        x: mouseX,
        y: mouseY
    }
    
    socket.emit('positionTo', data);
}*/



let puck;
let paddle;
let socket;
function setup(){
    createCanvas(500, 500);
    puck = new Puck;   
    socket = io.connect('http://localhost:3000');
    paddle = new Paddle(100);

    let dataFromUser = {
        paddlePosX : paddle.x,
    }
    socket.emit('fromUser', dataFromUser);
    
}


function draw(){
    background(51);
    puck.show();
    puck.update();
    puck.hitEdges();
    puck.hitPaddle();
    paddle.show();
    paddle.move();
}


