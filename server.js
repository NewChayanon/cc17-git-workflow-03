const express = require("express");
const authRouter = require("./routes/auth-route");
const app = express();

app.use("/auth", authRouter);

app.listen(8000);
