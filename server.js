var io = require('socket.io').listen(1337);

//Listen when 1 client connect socket connect to server socket
registryOpenSocketServerEvent();

function registryOpenSocketServerEvent(){
  console.log('registry open socket server !');
   io.sockets.on('connection', function(socket) {
	  console.log('socket server open success!');
	  registrySocketServerReceiveMassageEvent(socket);
   });
}

function registrySocketServerReceiveMassageEvent(socket){
  console.log('registry socket server receive message!');
     socket.on('TUAN.SOCKET.SERVER', function(data) {
      console.log('server receive from client : ' + data["from"] + " / with data :" + data["message"] + " / send to :" + data["sendTo"]);
      sockeServerSendMessage(data["sendTo"],data["from"],data["message"]);
    });
}

function sockeServerSendMessage(to,from,content){
   console.log('server send to client :' + to + "/ from : " + from + " /with content :" + content);
   io.sockets.emit(to,{ fromUser : from ,message: content });
}
