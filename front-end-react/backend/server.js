//import basics
const express = require('express');
const cors = require('cors');

require('dontenv').config();


//the server and port
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//start the server
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})
