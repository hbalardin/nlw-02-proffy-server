import { Router } from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsControler from './controllers/ConnectionsController';

const routes = Router();
const classesControllers = new ClassesControler();
const connectionsControllers = new ConnectionsControler();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;
