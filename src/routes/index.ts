import express from 'express';
import img from './api/img';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    `<a href="http://localhost:3000/api/img?filename=&width=&height=">Please click here to change Image size or visit http://localhost:3000/api/img </a>`
  );
});

routes.use('/img', img);

export default routes;
