
# script-loader

  Absurdly simple script loader. Just appends a `script` tag to your `document.body`.

#### Why not just domify or similar?
  [Unfortunately we can't use domify to do this]((https://github.com/component/domify/issues/14)
  since `<script>` src attributes don't trigger remote loading
  if they're created using innerHTML (which is how domify works).

## Installation

    $ component install timoxley/script-loader

## API

```js
addScript('//my-widget.js') // load js from current domain
addScript('//remote.com/their-widget.js') // load js from remote domain
```

## TODO

* Add loading progress/complete events.
* Consider removing `<script>` after it loads?

## License

  MIT
