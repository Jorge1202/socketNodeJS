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


app.use(express.static('public'));
app.use(router);

//################ RUTAS
router.get('/socket', (req, res) => {
  // console.log(req.query);
  socketIO.io.emit('mensaje', req.query);
  res.send('Status: 200');
});

router.post('/socket', (req, res) => {
  // console.log(req.body);
  socketIO.io.emit('mensaje', req.body);
  res.send('Status: 200');
});

const PORT = 8080;
server.listen(PORT, () => {
    // console.log(`Servidor iniciado en el puerto: http://localhost:${PORT}`);
    console.log('server heroku: https://salty-fortress-23951.herokuapp.com');
});