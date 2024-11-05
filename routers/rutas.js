const productsRouter = require('./productsEndpoints');
const brandRouter = require('./brandsEndpoints');
const categoryRouter = require('./categoriesEndpoints');
const userRouter = require('./usersEndpoints');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/categories', categoryRouter);
  app.use('/brands', brandRouter);
  app.use('/users', userRouter);
}

module.exports = routerApi;
