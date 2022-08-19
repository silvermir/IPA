import express from 'express'

const app = express();
const  port  =  3000


app.get('/api', (req,res) => {
    res.send('test server is working')
    })


app.listen(port, () => {
console.log(`Server startet at port ${port}`)})

