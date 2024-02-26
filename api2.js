
const express = require('express')
const app = express()
const products = require('./data.js')
app.all('/', (req, res)=>{
    res.send(`<h1>Home Page</h1>
            <a href = "/product">Go To Products</a>`)
})
app.get('/product', (req, res)=>{
    res.json(products)
})
app.listen(8080)