var fs=require('fs');
var http=require('http');
var port=process.argv[2];
var file1=process.argv[3];
var server=http.createServer(function(req,res){
  var p=fs.createReadStream(file1);
  p.pipe(res);//.pipe(res)
});

server.listen(port);