//import basics
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//the server and port
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://amgbdUser:2dGwS5tPmQnapuAs@dailydiarycluster.5roau.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true } 
    );
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB connected")
})

//start the server
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})
