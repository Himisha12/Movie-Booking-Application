const express = require('express');
const app = express();
const moongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.routes');
dotenv.config();
//middleware
app.use("/user",userRouter)
moongoose.connect("mongodb+srv://himishatunwal:AklPcssDyVDVdnwu@movie-system.40tpy10.mongodb.net/Movies?retryWrites=true&w=majority")
app.listen(3500,()=>{
    console.log('Connected to localhost port $(3500)');
})
// AklPcssDyVDVdnwu
// himishatunwal