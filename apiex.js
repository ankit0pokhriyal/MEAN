const express = require('express')
const app = express()
const  {products} =  require('./data.js')
app.get('/',(req,res)=>{
    const newProd = products.map((product)=>{
        const{id,name,image} = product
        return {id,name,image}
    })
    res.json(newProd)
    })
app.get('/products', (req,res)=>{res.send(`<h1>Link</h1>
                                    <a href='/products/1'>Link</a>`)})
/*app.get('/products/1', (req,res)=>{
    const uniqueProd  =products.filter((product)=>
    product.id === 1)
    res.json(uniqueProd)
})*/
app.get('/products/:uiq', (req,res)=>{
    const {uiq} =req.params
    console.log(req.params)
    const uniqueProd  =products.filter((product)=>
    product.id === Number(uiq))
    res.json(uniqueProd)
})
app.listen(8080)