import ordersController from '../controllers/ordersController';

export default (app) => {
  app.get('/orders', ordersController.get);
  app.get('/orders/:id', ordersController.get);
  app.post('/orders', ordersController.create);
  app.patch('/orders/:id', ordersController.update);
  app.delete('/orders/:id', ordersController.destroy);
};
