let users = [];
function User(id, x, y){
    this.id = id;
    this.x = x;
    this.y = y;
}
//express
const express = require('express');
const app = express();
const server = app.listen(3000);
app.use(express.static('public'));
console.log('listening');
//socket
const socket = require('socket.io');
let io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){ 
    console.log('new connection: ' + socket.id);
    let cts = io.engine.clientsCount;
    console.log(cts);
    socket.on('fromUser', newPaddleLocation);
    function newPaddleLocation(dataFromUser){
        console.log(socket.id+ " " + dataFromUser.paddlePosX);
        let user = new User(socket.id, dataFromUser.paddlePosX);
        users.push(user);
        
        //socket.broadcast.emit('fromServer', dataFromUser);
    }
} 
