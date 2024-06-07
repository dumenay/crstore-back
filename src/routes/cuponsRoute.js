import cuponsController from '../controllers/cuponsController';

export default (app) => {
  app.get('/cupons', cuponsController.get);
  app.get('/cupons/:id', cuponsController.get);
  app.post('/cupons', cuponsController.create);
  app.patch('/cupons/:id', cuponsController.update);
  app.delete('/cupons/:id', cuponsController.destroy);
};
