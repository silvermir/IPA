import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('pls, visit //localhost:port/api');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server startet at port ${port}`);
});

export default app;
