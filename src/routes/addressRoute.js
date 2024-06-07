import addressesController from '../controllers/addressesController';

export default (app) => {
  app.get('/addresses', addressesController.get);
  app.get('/addresses/:id', addressesController.get);
  app.post('/addresses', addressesController.create);
  app.patch('/addresses/:id', addressesController.update);
  app.delete('/addresses/:id', addressesController.destroy);
};
