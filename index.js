/* complementos al instalar
npm i express
npm i -g nodemon
npm i socket.io
*/

const express = require("express");
const path = require('path');
const { Socket } = require("socket.io");
require('dotenv').config();
//App de express
const app = express();

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');
//Mensaje de Sockets
//paht publico

const publicPath = path.resolve(__dirname,'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err)=>{
if(err) throw new Error(err); 
    console.log('Servidor corriendo en puerto----',process.env.PORT);
}); 