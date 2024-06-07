import ordersProductsController from '../controllers/ordersProductsController';

export default (app) => {
  app.get('/ordersProducts', ordersProductsController.get);
  app.get('/ordersProducts/:id', ordersProductsController.get);
  app.post('/ordersProducts', ordersProductsController.create);
  app.patch('/ordersProducts/:id', ordersProductsController.update);
  app.delete('/ordersProducts/:id', ordersProductsController.destroy);
};
