require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/auth-route')

const app = express()

app.use('/auth',authRouter)

const port = process.env.PORT || 8000
app.listen(port, () => console.log("Server is running on", port));
