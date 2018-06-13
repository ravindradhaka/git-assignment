var koa = require('koa');

var app = new koa();

app.use(function xyx(ctx,next) {
    
    try {
        ctx.body='hello koa'; // next is now a function
      } catch (err) {
        ctx.body = { message: err.message }
        ctx.status = err.status || 500
      }
});

app.listen(process.argv[2]);