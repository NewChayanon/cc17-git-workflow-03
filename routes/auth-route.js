const express = require("express");

const authRouter = express.Router();

authRouter.post('register',(req,res,next)=>{
    res.json({msg:"Register..."})
})

authRouter.post("/login", (req, res) => {
  res.status(200).json({ msg: "login successful" });
});

module.exports = authRouter