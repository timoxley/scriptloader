var assert = require('timoxley-assert')
describe('script loader', function() {
  var loadScript = require('script-loader')
  it('can load remote scripts', function(done) {
    loadScript('//cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min.js').onLoad(function(err, script) {
      assert.ifError(err)
      done()
    })
  })
  it('handles failed scripts', function(done) {
    loadScript('//csdfsdfjhkbsdf.js').onLoad(function(err) {
      assert.ok(err)
      done()
    })
  })
})
