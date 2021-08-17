/**
 * npm init -y
 * npm i express socket.io
*/

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
const server = require('http').Server(app);
const socket = require('./socket');
const socketIO = require('./socket').socket;

socket.conect(server);
// const io = require('socket.io')(server);


const PORT = 8080;
app.use(express.static('public'));
app.use(router);

//################ RUTAS
router.get('/socket', (req, res) => {
    console.log(req.query);
    socketIO.io.emit('mensaje', req.query);
    res.send('Status: 200');
    // data=req.query;
  });
  
  router.post('/socket', (req, res) => {
    console.log(req.body);
    socketIO.io.emit('mensaje', req.body);
    res.send('Status: 200');
    // res.send('Hola ')
    // data=req.body;
});

server.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto: http://localhost:${PORT}`);
})