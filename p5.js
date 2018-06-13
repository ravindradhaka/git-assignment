var fs=require('fs');
var path=require('path');
var ext=process.argv[3];
var dir=process.argv[2];
fs.readdir(dir, function (err, data) {
    if(err){
        return err;
    }
    var l=data.length;
    for(var i=0;i<l;i++)
    {
        x=data[i];
        if(path.extname(data[i])=="."+ext)
        {
            console.log(x);
        }
    }
    });
  