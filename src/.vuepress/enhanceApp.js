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
  logEnhanceMentAffordances(Vue, options, router, siteData)
  // ...apply enhancements for the site.

  try {
    window.onload = function () {
      console.log(this);
      setPageFavicon();
    }
  } catch (error) {
    console.log('Gracefully')
    console.log(error.message);
  }
}


/**
 * @description Set favicon
 * @returns void
 */

function setPageFavicon() {
  // create new link element and assign attribites with object terraforming
  const
    rel = "icon",
    href = "https://cdn.softwarecraft.co.za/assets/ia/IA_shortlogo_white_blackbg-01x.png",
    type = 'image/png',
    faviconElement = Object.assign(document.createElement('link'), { rel, href, type });
  return document.head.prepend(faviconElement);
}

/**
 * @description log enhancement params when environment is dev
 * @param {*} Vue 
 * @param {*} options 
 * @param {*} router 
 * @param {*} siteData 
 * @returns void
 */
function logEnhanceMentAffordances(Vue, options, router, siteData) {
  console.log('ENHANCEMENTS START')
  console.log(Vue);
  console.log(options)
  console.log(router)
  console.log(siteData)
  console.log('ENHANCEMENTS END')
  return;
}
