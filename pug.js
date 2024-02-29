const express = require('express')
const app = express()
const {products} =require('./data.js')
app.get('/', (req,res)=>{
    res.render('views')
})
app.get('/products', (req,res)=>{
    res.json(products)
})
app.set('view engine', 'pug')
app.set('views', './views')
app.listen(8080)