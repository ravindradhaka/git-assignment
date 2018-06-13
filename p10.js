var net=require('net');
var port=process.argv[2];
var server=net.createServer(function(socket){
    var date=new Date();
  socket.write(date.getFullYear()+"-0"+(date.getMonth()+1)+"-0"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
  socket.end("\n");
  
  //console.log("\n");
})
server.listen(port);