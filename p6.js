var mymodule=require('/module.js');
var ext=process.argv[3];
var dir=process.argv[2];
 

var callback=function(err,data)
{
    if(err){return err;}
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i]);
    }
}
mymodule(dir,ext,callback);