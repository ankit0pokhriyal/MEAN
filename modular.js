const express = require('express')
module.exports = (options = {})=>{
    const router = express.Router()
    router.get('/hello', (req, res,next)=>{
        res.end(options.hello)

    })
    return router
}
