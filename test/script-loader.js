var loadScript = require('script-loader')
mocha.options.globals.push['testPassed']
if (!window.testPassed) {
  it('can load remote scripts', function(done) {
    loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
    window.testPassed = done
  })
} else {
  window.testPassed()
}

