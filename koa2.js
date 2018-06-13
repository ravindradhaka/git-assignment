var koa =require('koa');
var app=new koa();
var port=process.argv[2];

app.use(function check(ctx,next){
     if(this.path!=='/'){
        ctx.body='page not found';
        //ctx.body='hello koa'; 
    }
     
    
    })
    /*
app.use(function check(ctx,next){
    if(this.path!=="/")
    {
        ctx.body='hello koa'; 
    }
    else if(this.path==="/404")
    {
        ctx.body='page not found';
    }
    
    
})
/*
app.use(function check(ctx,next){
    if(this.path!=='/404')
    {

    }
    ctx.body='internal server error';
})*/

      
app.listen(port);