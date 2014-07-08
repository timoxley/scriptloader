module.exports = function(config) {
  config.set({
    colors: true,
    frameworks: ['browserify', 'mocha', 'chai'],
    browsers: ['PhantomJS'],
    files: ['test/**/*_test.js'],
    preprocessors: {
      'test/**/*.js': ['browserify']
    }
  });
};
