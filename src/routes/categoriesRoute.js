import categoriesController from '../controllers/categoriesController';

export default (app) => {
  app.get('/categories', categoriesController.get);
  app.get('/categories/:id', categoriesController.get);
  app.post('/categories', categoriesController.create);
  app.patch('/categories/:id', categoriesController.update);
  app.delete('/categories/:id', categoriesController.destroy);
};
