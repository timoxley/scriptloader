var loadScript = require('script-loader')
if (!window.testPassed) {
  it('can load remote scripts', function(done) {
    debugger
    loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
    window.testPassed = done
  })
} else {
  window.testPassed()
}

