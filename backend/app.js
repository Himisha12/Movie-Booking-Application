const express = require('express');

const app = express();
const moongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
dotenv.config();

//middleware
app.use(express.json());

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);

moongoose.connect("mongodb+srv://himishatunwal:AklPcssDyVDVdnwu@movie-system.40tpy10.mongodb.net/?retryWrites=true&w=majority");

app.listen(3500, () => {

    console.log("Connected $(3500)");
})