const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;
const bodyParser = require('body-parser')
const fs = require('fs');


app.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "Service A Hello"
    })
})


app.get('/health', (req,res,next)=>{
    res.status(200).json({
        message: "Service A Healthy"
    })
})



app.get('/ping', (req,res,next)=>{
    res.status(200).json({
        message: "Service A response with pong"
    })
})


app.listen(PORT, function(){
    console.log(`magik happens on http://localhost:${PORT}`)
})