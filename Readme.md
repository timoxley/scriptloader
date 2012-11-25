# script-loader

  Absurdly simple on-demand script loader.

## Installation

    $ component install timoxley/script-loader

## API

```js
var load = require('script-loader')
load('//my-widget.js') // load js from current domain
load('//remote.com/their-widget.js') // load js from remote domain
load('//cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min.js').addEventListener('load', function() {
  console.log()
})
```

#### What is this sorcery?

It just appends a `script` tag to your `document.body` with the `src`
attribute set to the script you desire to load. No sorcery here.

#### Why not just domify to add a script tag?

[Unfortunately we can't use domify to do this]((https://github.com/component/domify/issues/14)
since `<script>` src attributes don't trigger remote loading
if they're created using `innerHTML`, which is how `domify` works.

## TODO

* Consider removing `<script>` after it loads?
* investigate script's `async` attribute.

## Credit

[skorffman](https://github.com/skorfmann/) for writing the original code with his own hands.

## License

  MIT
