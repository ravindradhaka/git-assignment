var koa = require('koa');

var app = koa();

app.use(function check(next) {
  if (this.path !== '/') {
     next();
  }

  this.body = 'hello koa';
});

app.use(function check(next) {
  if (this.path !== '/404') {
    return yield next();
  }

  this.body = 'page introuvable';
});

app.use(function check(next) {
  if (this.path !== '/500') {
    return yield next();
  }

  this.body = 'erreur serveur interne';
});

app.listen(process.argv[2]);