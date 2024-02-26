const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json([{name:'Ankit Pokhriyal'},{Age:30}])
})

app.listen(8080)
 