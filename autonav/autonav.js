/**
 * description: Autonav by Infinity Arc
 */

const {read,dir,isDir,env,sideNavIgnore,topNavIgnore,join} = require('./core');
const docsDirRaw = join(process.cwd(),'Docs');
const docsDirContent = read(docsDirRaw);
let docsDir;

function assignTopNavContent(){
    docsDir = docsDirContent;
}

function assignSideNavContent()

function doSideBarConfig() {

}

function doNavConfig() {
    return docsDir.filter(docSection=> topNavIgnore.includes)
}


function withAutoNavigation(vuepressConfig){
    const 
        sidebar = {},
        nav = [];
    

    vuepressConfig.sidebar = sideNav;
    vuepressConfig.nav = topNav;
    return Object.assign(vuepressConfig,{themeConfig:{sidebar,nav}})
}

module.exports = withAutoNavigation;