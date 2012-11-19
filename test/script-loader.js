describe('script loader', function() {
  beforeEach(function() {
    mocha.options.globals.push['testPassed']
  })
  var loadScript = require('script-loader')
  if (!window.testPassed) {
    it('can load remote scripts', function(done) {
      window.testPassed = done
      loadScript('https://raw.github.com/timoxley/script-loader/master/test/script-loader.js')
    })
  } else {
    it('loaded remote script', function() {
      window.testPassed()
    })
  }
})
