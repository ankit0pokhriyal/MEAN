const express = require('express')
const app = express()
// MiddleWare 
const logs = (req,res,next)=>{
    log = new Date().getDate()
    console.log(log)
    next()
}
app.get("/about",logs, (req,res)=>{res.send("ABout")})
app.get("*", (req,res)=>{res.send("Not Found")})
app.listen(8080)