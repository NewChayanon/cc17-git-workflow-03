const express = require('express')
const authRouter = express.Router()

authRouter.post('register',(req,res,next)=>{
    res.json({msg:"Register..."})
})

module.exports = authRouter