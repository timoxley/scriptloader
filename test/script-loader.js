var loadScript = require('script-loader')
if (!window.testPassed) {
  it('can load remote scripts', function(done) {
    loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
    mocha.options.globals.push['testPassed']
    window.testPassed = done
  })
} else {
  window.testPassed()
}

