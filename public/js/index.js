var socket = io();

socket.on('connect',function(){
  console.log('connected to server');
  // emit the event to server
  socket.emit('createMessageEvent',{
    from:"mymail@abc.com",
    text:"my msg to server"
  });
});

socket.on('disconnect',function(){
  console.log('disconnected to server');
});
 
//received events from server
socket.on('newMessageEvent',function(newMsgdata){
  console.log('newMessageEvent',newMsgdata);
});
