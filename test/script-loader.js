var loadScript = require('script-loader')
if (!window.testPassed) {
  it('can load remote scripts', function(done) {
    mocha.options.globals.push['testPassed']
    window.testPassed = done
    loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
  })
} else {
  mocha.options.globals.push['testPassed']
  window.testPassed()
}

