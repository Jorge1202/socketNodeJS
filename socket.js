const socketIO = require('socket.io');
const socket = {};

function conect(serve){
    socket.io = socketIO(serve);
}

module.exports = {
    conect,
    socket,
}