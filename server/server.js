const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');

var app = express();
var server = http.createServer(app);

var _io = socketIO(server); // return webserver
app.use(express.static(publicPath));

_io.on('connection',(socket)=>{
  console.log('New user connected!!');
  // emit the event by server
  socket.emit('newMessageEvent',{
     from:"abhi@abc.com",
     text:"hey my new car..",
     createdAt:1234123
  });
  socket.on('createMessageEvent',function(msgdata){
      console.log('createMessageEvent',msgdata);
  });

  socket.on('disconnect',()=>{
    console.log('User disconnected!!');
  });

});

server.listen(port,()=>{
  console.log(`chat server listen at port ${port}`);
});
