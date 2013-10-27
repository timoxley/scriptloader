"use strict"

var assert = require('timoxley-assert')
var loadScript = require('scriptloader')

describe('script loader', function() {
  it('can load remote scripts', function(done) {
    loadScript('test.js').onLoad(function(err, script) {
      assert.ifError(err)
      assert.ok(document.body.classList.contains('success'))
      document.body.classList.remove('success')
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
