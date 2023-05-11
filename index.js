const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const chefInfo = require('./data/data.json')
const recipes = require('./data/recipes.json')

app.use(cors())
app.get('/', (req, res) =>{
    res.send('site is running')
})

app.get('/chefInfo', (req, res) =>{
    res.send(chefInfo)
})

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const recipe = recipes.filter(r => r.chef_id === id)
    res.send(recipe)
})

app.get('/chefInfo/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectChef = chefInfo.find(c => (c.chef_id == id))
    res.send(selectChef);
})



app.listen(port, ()=>{
    console.log(`site is running on port: ${port}`);
})