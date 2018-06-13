var fs=require('fs');
var path=require('path');

module.exports=function(dirName,extStr,cb){

    var arr=[];
fs.readdir(dirName, function (err, data) {
    if(err){
        return cb(err);
    }
    var l=data.length;
    for(var i=0;i<l;i++)
    {
        x=data[i];
        if(path.extName(x)=="."+extStr)
        {
            //console.log(x);
            arr.push(x);
        }
    }
    return cb(null,arr);   
    })
}