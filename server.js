/***
 * Description web server with express.js
 */

const port = 8080;
const host = require('os').hostname();
const express = require('express');
const app = express();

app
.all('*',(req,res,next)=>{
    console.log(res.statusCode, '-', req.path);
    next();
})
// .use('/',express.static('docs'))
.use('/',express.static('./src/.vuepress/dist'))
.listen(port,()=>{
    console.log('Doc server running', host, ':',port);
});