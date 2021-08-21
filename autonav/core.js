/**
 * description: Autonav by Infinity Arc
 */

const 
    [path, fs] = [ require('path'),require('fs')],
    env = { };

function file(file){
    return fs.readFileSync(file).toString();
}

function isDir(dirElement){
    fs.lstat(dirElement).isDirectoru();
}

function dir(dir) {
    return fs.readdirSync(dir);
}

function readIgnoreFile(ignoreFile){
    return file(join(__dirname, '../',ignoreFile)).split('\n').filter(ignoreFile=> !ignoreFile==='');
}

function join(...pathSegments) {
    return path.join(...pathSegments)
}

const sideNavIgnore = readIgnoreFile('.sideNavIgnore');
const topNavIgnore = readIgnoreFile('.topnavignore').push(['.veupress','node_modules']);

env.isDevelopment = function(){
    return process.env.NODE_ENV === 'development'
}

env.isStaging = function() {
    return process.env.NODE_ENV === 'stage' || process.env.NODE_ENV === 'staging'
}

env.isProduction = function() {
    return !['development','stage', 'staging'].includes(process.env.NODE_ENV);
}

module.exports = {file,dir,sideNavIgnore,topNavIgnore,isDir,env,join}