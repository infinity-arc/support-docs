

(function () {
  // require('fs').writeFileSync(require('path').join(__dirname, 'node_env',''))
})()

const fs = require('fs');
const path = require('path');
// const excludeDirs = ['.vuepress', 'src', 'node_modules', 'config']
// const docsDir = path.join(__dirname, '../');
console.log(path.resolve());
const { description } = require(path.resolve('package.json'));
const withAutoNavBuilder = require(path.resolve('autonav'));
module.exports = withAutoNavBuilder({

  base: "/",
  public: path.resolve('.attachments'),
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Support Pages',
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
    logo: 'https://cdn.softwarecraft.co.za/assets/ia/ia-3d-black075.png',
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

