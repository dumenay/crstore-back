import productsController from '../controllers/productsController';

export default (app) => {
  app.get('/products', productsController.get);
  app.get('/products/:id', productsController.get);
  app.post('/products', productsController.create);
  app.patch('/products/:id', productsController.update);
  app.delete('/products/:id', productsController.destroy);
};
