/**
 * 
 * @param {dir} dirOrFile 
 * @returns 
 */

 const fs = require('fs');
 const path = require('path');
 const excludeDirs = ['.vuepress', 'src', 'node_modules', 'config']
//  const docsDir = path.join(__dirname, '../');
 
let docsDir = null;

function assignDocsDir() {
    docsDir = path.join(process.cwd());
}

function isDir(dirOrFile) {
    return fs.lstatSync(path.join(docsDir, dirOrFile)).isDirectory();
}

function buildSideNav(conf) {
    assignDocsDir();
    if(docsDir===null) {
        throw new Error('Documents Directory is not assigned, assigne documents director before running withDocumentStructure.');
    }
    const nav = [];
    const sideBar = {};
    const dir = fs.readdirSync(docsDir);

    dir.forEach(item => {
        if (!excludeDirs.includes(item) && isDir(item)) {
            const sectionLink = `/${item.toLocaleLowerCase()}/`;
            nav.push({ text: item.toLocaleUpperCase(), link: sectionLink })

            sideBar[sectionLink] = [{
                title: item.toLocaleUpperCase(),
                children: fs.readdirSync(path.join(docsDir, item))
                    .filter(file => {
                        console.log('file: ', file);
                        return !['.order', 'readme.md'].includes(file.toLocaleLowerCase())
                    })
            }]
        }
    })
    console.log('nav: ', nav);
    console.log('sideBar: ', sideBar);
    // process.exit();

    conf.themeConfig.nav = [...nav, ...conf.themeConfig.nav];
    conf.themeConfig.sidebar = sideBar;
    fs.writeFileSync('./config.json', JSON.stringify(conf), 'utf8');
    return conf;
}



module.exports = (conf) => {
    try{
        return buildSideNav(conf);
    } catch(error) {
        console.error(error.message, error.stack)
        process.exit();
    }
}