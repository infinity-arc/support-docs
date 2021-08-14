const { description } = require('../package')

// const fs = require('fs');
// const path = require('path');
// const excludeDirs = ['.vuepress', 'src', 'node_modules', 'config']
// const docsDir = path.join(__dirname, '../');

const withAutoNavBuilder  = require('autoNavBuilder');
module.exports = withAutoNavBuilder({

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Infinity Arc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // ...makeNav(),
      // {
      //   text: 'Index',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Email',
      //   link: '/email/'
      // },
      {
        text: 'Website',
        link: 'http://www.infinityarc.net'
      },
      {
        text: 'Privacy',
        link: 'https://policies.infinityarc.net/privac'
      }
    ],
    // sidebar: makeSideBar()
    // sidebar: {
    //   '/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    //   '/email/': [{title: 'Email' , children:['changing-your-password.md']}]
    // },

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
})



// function isDir(dirOrFile) {
//   return fs.lstatSync(path.join(docsDir, dirOrFile)).isDirectory();
// }

// function withDocumentStructire(conf) {
//   const nav = [];
//   const sideBar = {};
//   const dir = fs.readdirSync(docsDir);

//   dir.forEach(item => {
//     if (!excludeDirs.includes(item) && isDir(item)) {
//       const sectionLink = `/${item.toLocaleLowerCase()}/`;
//       nav.push({ text: item.toLocaleUpperCase(), link: sectionLink })

//       sideBar[sectionLink] = [{
//         title: item.toLocaleUpperCase(),
//         children: fs.readdirSync(path.join(docsDir, item))
//         .filter(file => {
//           console.log('file: ', file);
//           return !['.order','readme.md'].includes(file.toLocaleLowerCase())
//         })
//       }]
//     }
//   })
//   console.log('nav: ', nav);
//   console.log('sideBar: ', sideBar);
//   // process.exit();

//   conf.themeConfig.nav = [...nav, ...conf.themeConfig.nav];
//   conf.themeConfig.sidebar = sideBar;
//   fs.writeFileSync('./config.json', JSON.stringify(conf), 'utf8');
//   return conf;
// }

