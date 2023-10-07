
const {io} = require('../index');


io.on('connection', client => {
    console.log('Cliente conectado');
    
    
     client.on('disconnect', () => {
        console.log('Cliente desconnectado');
         });
    
    
     client.on('mensaje', (payload) => {
        console.log('Mensaje',payload);
    
    io.emit('mensaje1',{admin:"Nuevo mensaje"});
    
         });
    });