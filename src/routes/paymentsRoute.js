import paymentsController from '../controllers/paymentsController';

export default (app) => {
  app.get('/payments', paymentsController.get);
  app.get('/payments/:id', paymentsController.get);
  app.post('/payments', paymentsController.create);
  app.patch('/payments/:id', paymentsController.update);
  app.delete('/payments/:id', paymentsController.destroy);
};
