import addressesRoute from './addressRoute';
import categoriesRoute from './categoriesRoute';
import cuponsRoute from './cuponsRoute';
import ordersRoute from './ordersRoute';
import ordersProductsRoute from './ordersProductsRoute';
import paymentsRoute from './paymentsRoute';
import productsRoute from './productsRoute';
import usersRoute from './usersRoute';

function Routes(app) {
  addressesRoute(app);
  categoriesRoute(app);
  cuponsRoute(app);
  ordersRoute(app);
  ordersProductsRoute(app);
  paymentsRoute(app);
  productsRoute(app);
  usersRoute(app);
}

export default Routes;
