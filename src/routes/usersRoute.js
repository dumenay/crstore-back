import usersController from '../controllers/usersController';
// import verifyToken from '../middleware/verifyToken';

export default (app) => {
  app.get('/users', usersController.get);
  app.get('/users/:id', usersController.get);
  app.post('/users', usersController.create);
  // app.post('/users/:id', verifyToken, usersController.login);
  // app.post('/users', usersController.register);
  app.patch('/users/:id', usersController.update);
  app.delete('/users/:id', usersController.destroy);
};
