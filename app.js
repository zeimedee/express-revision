const express = require('express');
const app = express();
const routes = require('./routes')
const port = 4000;

app.get('/hello', (req,res)=>{
    return res.json("hello world!");
})

app.use('/show',routes);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});


 