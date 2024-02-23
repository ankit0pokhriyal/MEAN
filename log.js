exports.logs = (req,res,next)=>{
    log = new Date().getFullYear()
    console.log(log)
    next()
}