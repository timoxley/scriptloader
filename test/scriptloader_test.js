"use strict"

var expect = require('chai').expect
var loadScript = require('..')

describe('script loader', function() {
  beforeEach(function() {
    delete window.async
    expect(window.async).to.be.falsy
  })

  describe('using events', function() {
    it('can load remote scripts', function(done) {
      loadScript('http://cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js').onLoad(function(err, script) {
        expect(err).to.be.null
        expect(window.async).to.be.ok
        done()
      })
    })
    it('handles failed scripts', function(done) {
      loadScript('//csdfsdfjhkbsdf.js').onLoad(function(err) {
        expect(err).to.be.ok
        done()
      })
    })
  })

  describe('using callbacks', function() {
    it('can load remote scripts', function(done) {
      loadScript('http://cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js', function(err, script) {
        expect(err).to.be.null
        expect(window.async).to.be.ok
        done()
      })
    })
    it('handles failed scripts', function(done) {
      loadScript('//csdfsdfjhkbsdf.js', function(err) {
        expect(err).to.be.ok
        done()
      })
    })

    describe('with document', function() {
      it('can load remote scripts', function(done) {
        loadScript(document, 'http://cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js', function(err, script) {
          expect(err).to.be.null
          expect(window.async).to.be.ok
          done()
        })
      })
      it('handles failed scripts', function(done) {
        loadScript(document, '//csdfsdfjhkbsdf.js', function(err) {
          expect(err).to.be.ok
          done()
        })
      })
    })
  })
})
