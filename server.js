const port = process.env.PORT || 3000;
const host = require('os').hostname();

const express = require('express');

const app = express();



app
.all('*',(req,res,next)=>{
    console.log(res.statusCode, '-', req.path);
    next();
})
.use('/',express.static('./Docs/.vuepress/dist'))
.listen(port,()=>{
    console.log('Doc server running', host, ':',port);
});