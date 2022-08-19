import express from 'express';
import img from './api/img'
const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('main Api route')
    });

    routes.use('/img', img);

    export default routes;