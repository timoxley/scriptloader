var loadScript = require('script-loader')
window.finishTest = window.finishTest || function() {}
window.finishTest()
it('can load remote scripts', function(done) {
  // set callback to a global var so it can be run by remote script
  window.finishTest = done
  loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
})
