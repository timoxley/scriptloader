"use strict"

module.exports = function load(src, fn) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  document.body.appendChild(script);
  if (fn) onLoad(script, fn)
  script.onLoad = function(fn) {
    return onLoad(script, fn)
  }
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
