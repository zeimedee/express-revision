const express = require('express');
const app = express();
const routes = require('./routes')
const port = 4000;

app.use('/show',routes);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});


 