const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const chefInfo = require('./data/data.json')

app.use(cors())
app.get('/', (req, res) =>{
    res.send('site is running')
})

app.get('/chefInfo', (req, res) =>{
    res.send(chefInfo)
})

app.listen(port, ()=>{
    console.log(`site is running on port: ${port}`);
})