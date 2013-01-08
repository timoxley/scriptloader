module.exports = function addScript(src) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  document.body.appendChild(script);
  return {
    onLoad: function(fn) {
      script.addEventListener('load', function() {
        fn(null, script)
      })
      script.addEventListener('error', function() {
        fn(new Error('Failed loading script: ' + src))
      })
      return script
    },
    script: script
  }
}
