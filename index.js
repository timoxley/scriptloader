"use strict"

module.exports = function load(doc, src, fn) {
  if (typeof doc === 'string') {
    fn = src
    src = doc
    doc = document
  }

  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  if (fn) onLoad(script, fn)
  script.onLoad = function(fn) {
    return onLoad(script, fn)
  }
  document.body.appendChild(script);
  return script
}

function onLoad(script, fn) {
  script.addEventListener('load', function() {
    fn(null, script)
  })
  script.addEventListener('error', function() {
    fn(new Error('Failed loading script: ' + script.src))
  })
  return script
}
