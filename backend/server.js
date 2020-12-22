const express = require('express');
//const bodyParser = require('body-parser') => no longer need body parser to read body of post request, express does it for you now
const cors = require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', ()=>{ //once connection is open, do the following
    console.log("hello")
})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
});
