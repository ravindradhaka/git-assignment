var http=require('http');
var url=require('url');
var port=process.argv[2];
http.createServer(function(req,res){
    var urlobject=url.parse(req.url,true);
    var pathname1=urlobject.pathname;
    var time1=urlobject.query.iso;
    var result;
    if(pathname1==='/api/unixtime')
    {
        result=function getUnixTimeStamp(time1)
        {
            return {
                unixtime: getTimeStamp(time1)
                
                };
        };
    }
    else if(pathname1==='/api/parsetime')
    {
        result=function getTimeObj(time1)
        {

                return Date.parse(time1);
        };
    }


    if (result) {
        res.writeHead(200, { "Content-type": "application/json"});
        res.end(JSON.stringify(result));
        }
        else {
            res.writeHead(404);
            res.end();
            }
               
}).listen(port);
