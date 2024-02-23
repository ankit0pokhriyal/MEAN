const express = require('express')   // import The express
const app = express()                // call the express function on constant app
// MiddleWare 
const logs = require('./log')

app.get("/about",logs.logs, (req,res)=>{res.send("ABout")})
app.get("*", (req,res)=>{res.send("Not Found")})  //wildcard  everything except the above
app.listen(8080)