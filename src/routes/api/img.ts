import express from 'express';
const img = express.Router();

img.get('/', (req,res) => {
    res.send('img route')
    })

    export default img;