const express = require('express')   // import The express
const app = express()                // call the express function on constant app
// MiddleWare 
const logs = (req,res,next)=>{
    log = new Date().getFullYear()
    console.log(log)
    next()
}

app.get("/about",logs, (req,res)=>{res.send("ABout")})
app.get("*", (req,res)=>{res.send("Not Found")})  //wildcard  everything except the above
app.listen(8080)