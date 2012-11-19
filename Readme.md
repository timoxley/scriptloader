
# script-loader

  Absurdly simple on-demand script loader.

## Installation

    $ component install timoxley/script-loader

## API

```js
var loadScript = require('script-loader')
loadScript('//my-widget.js') // load js from current domain
loadScript('//remote.com/their-widget.js') // load js from remote domain
```

#### What is this sorcery?

It just appends a `script` tag to your `document.body` with the `src`
attribute set to the script you desire to load.

#### Why not just domify to add a script tag?

[Unfortunately we can't use domify to do this]((https://github.com/component/domify/issues/14)
since `<script>` src attributes don't trigger remote loading
if they're created using `innerHTML`, which is how `domify` works.

## TODO

* Add loading progress/complete events.
* Consider removing `<script>` after it loads?
* investigate script's `async` attribute.

## License

  MIT
