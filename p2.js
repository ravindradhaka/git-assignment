//console.log(process.argv);
var l=process.argv.length;
var sum=0;
for(var i=2;i<l;i++)
{
   sum=sum+Number(process.argv[i]);
}
console.log(sum);                  
