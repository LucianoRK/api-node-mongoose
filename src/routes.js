import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';
import checkJwt from './middlewares/checkJwt';

const routes = new Router();

//Auth
routes.post('/login', AuthController.login);

//Valida o Jwt
routes.use(checkJwt);

//Usuário
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
