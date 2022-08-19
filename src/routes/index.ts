import express from 'express';
import img from './api/img'
import logger from '../utilities/logger'
const routes = express.Router();

routes.get('/', logger, (req,res) => {
    res.send('main Api route')
    });

    routes.use('/img', img);

    export default routes;