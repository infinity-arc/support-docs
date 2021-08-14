/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  logEnhanceMentAffordances(Vue,options,router,siteData)
  // ...apply enhancements for the site.
  
}

function logEnhanceMentAffordances( Vue, options, router, siteData) {
  console.log('ENHANCEMENTS START')
  console.log(Vue);
  console.log(options)
  console.log(router)
  console.log(siteData)
  console.log('ENHANCEMENTS END')
}
