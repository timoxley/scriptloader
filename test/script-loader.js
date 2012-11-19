var loadScript = require('script-loader')
console.log('yo')
//window.done && window.done() && (function() {throw new Error()})
window.count = window.count || 0
window.count++
console.log('1', window.count)
loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js?')
console.log('2', window.count)
//it('can load remote scripts', function(done) {
  // set callback to a global var so it can be run by remote script
  //debugger
  //window.testPassed = done
//})
//setTimeout(function() {
  //debugger
//}, 2000)


