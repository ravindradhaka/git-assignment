const Koa = require('koa')
const app = new Koa()
//const convert = require('koa-convert');
/*app.use(function async (ctx, next){
  ctx.status = 200
  console.log('Setting status')
  // Call the next middleware, wait for it to complete
  await next;
});

app.use((ctx) => {
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
});
app.listen(3002);*/
/*app.use(function* (next) {
    // skip the rest of the code if the route does not match
    if (this.path !== '/') return yield next;})

*/
/*
app.use(convert(function *(next) {
    const start = Date.now();
    yield next;
    const ms = Date.now() - start;
    console.log(`${this.method} ${this.url} - ${ms}ms`);
  }));

*/




app.use(function async (ctx, next)  {
    //const user = await User.getById(this.session.user_id);
    return next();
    ctx.body = { message: 'some message' };
  });

app.use(function async(ctx,next) {
    ctx.body="hello koa";
})

app.use(function async(ctx,next) {
    ctx.body="";
})


app.use(function async(ctx,next) {
    ctx.body="hello koa";
})

/*

app.use(convert(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }

  this.body = 'hello koa';
}));

app.use(convert (function* (next) {
  if (this.path !== '/404') {
    return yield next;
  }

  this.body = 'page not found';
}));

app.use(convert(function* (next) {
  if (this.path !== '/500') {
    return yield next;
  }

  this.body = 'internal server error';
}));

app.listen(process.argv[2]);


*/
/*
    app.use(function async (ctx, next) 
      {
        try {
          await next()
          // next is now a function
        } catch (err) {
          ctx.body = { message: err.message }
          ctx.status = err.status || 500
        }
      });
      
      app.use(async ctx => {
        const user = await User.getById(this.session.userid) // await instead of yield
        ctx.body = user // ctx instead of this
      })*/

      app.listen(3002);