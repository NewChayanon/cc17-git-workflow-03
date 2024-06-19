const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.status(200).json({ msg: "login successful" });
});

module.exports = authRouter;
