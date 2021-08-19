const {exec} = require('child_process');
const {resolve} = require('path');

const srcDir = resolve('src/.vuepress/dist');
const destDir = resolve('docs');

exec('npm run build:vuepress', (buildErr)=>{
    if(buildErr){
        throw buildErr;
    }
    exec('rm -rd docs', rmErr=> {
        if( rmErr ) console.log( rmErr.message);

        exec(`mv ${srcDir} ${destDir}`, mvErr=>{
            if(mvErr) throw mvErr;
        })
    });
})