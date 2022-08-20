import express from 'express';
const img = express.Router();

img.get('/', (req,res) => {
    res.send('img route')
    console.log(req.query.width)
    })

    export default img;