/**
 * 
 * @param {dir} dirOrFile 
 * @returns 
 */

const fs = require('fs');
const path = require('path');
const excludeFromTopNav = ['.vuepress', 'src', 'node_modules', 'config']
const excludeFromSideNav = ['.order','readme.md']
const config = require('./autonavconfig.json')
//  const docsDir = path.join(__dirname, '../');

let docsDir = null;

/**
 * description: builds the docsdirectory
 */
function assignDocsDir() {
    docsDir = path.join(process.cwd(), config.vuepressSource);
}

/**
 * description: Checks of an directory item being scanned is a file or a folder
 */
function isDir(dirOrFile) {
    return fs.lstatSync(path.join(docsDir, dirOrFile)).isDirectory();
}

/**
 * @description checks if there is a order file in the current directory, this feature is because of how devops wiki works
 * @returns a boolean of whether a order file exists or not
 */
function checkOrder(childFilePath) {
    return fs.existsSync(path.join(childFilePath, '.order'));
}

/**
 * @description merges the order file with the directory read result
 * @param string[] arrayToMerge
 * @param  string[] childFilePath
 * @returns the merged array of sidenav child elememnts
 */
function mergeOrderWithSideNavChildren(arrayToMerge, childFilePath) {
    if (checkOrder(childFilePath)) {
        const order = fs.readFileSync(path.join(childFilePath, '.order')).
            toString()
            .split('\r')
            .filter(entry => !entry === '' || entry === '\r')
            .map(indexItem => indexItem.replace(/[\n,\r]/, '') + '.md');
        return [...order, ...arrayToMerge.filter(a => !order.includes(a))];
    }
    return arrayToMerge;
}

/**
 * description: builds top and side nav configuration
 */
function buildSideNav(conf) {
    assignDocsDir();
    if (docsDir === null) {
        throw new Error('Documents Directory is not assigned, assigne documents director before running withDocumentStructure.');
    }
    const nav = [];
    const sideBar = {};

    const dir = fs.readdirSync(docsDir);

    dir.forEach(item => {
        if (!excludeFromTopNav.includes(item) && isDir(item)) {

            const
                sectionLink = `/${item.toLocaleLowerCase()}/`, // creates the top section link
                sideNavChildrenPath = path.join(docsDir, item),
                sideNavChildren = fs.readdirSync(sideNavChildrenPath).filter(file => {
                    return !excludeFromSideNav.includes(file.toLocaleLowerCase())
                }), // filters only to the md files related to the current iteration section
                mergedWithOrders = mergeOrderWithSideNavChildren(sideNavChildren, sideNavChildrenPath);

            if (process.NODE_ENV === 'development') {
                console.log('sideNavChildrenPath: ', sideNavChildrenPath);
                console.log('sideNavChildren: ', sideNavChildren);
                console.log('mergedWithOrders: ', mergedWithOrders);
            }

            nav.push({ text: item.toLocaleUpperCase(), link: sectionLink }) // pushes a new top nav item onto the config

            sideBar[sectionLink] = [ // Add the side nav configuration for section
                {
                    title: item.toLocaleUpperCase(),
                    children: mergedWithOrders
                }
            ]
        }
    });
    console.log('sideBar: ', sideBar);
    conf.themeConfig.nav = [...nav, ...conf.themeConfig.nav]; // assign top nav config
    conf.themeConfig.sidebar = sideBar; // assign sidenav config
    console.log(conf);
    fs.writeFileSync('./config.json', JSON.stringify(conf), 'utf8'); // writes the config to file for debuggging.
    // process.exit();
    return conf; // return vuepress config
}

// export and error handles autonav config
module.exports = (conf) => {
    try {
        return buildSideNav(conf);
    } catch (error) {
        console.error(error.message, error.stack)
        process.exit();
    }
}