# Simple Wrapping of CommonJS to AMD

All this module does is wrap your CommonJS modules into the [simplified CommonJS wrapper](https://github.com/amdjs/amdjs-api/wiki/AMD#simplified-commonjs-wrapping-) format, i.e.:

```js
define(function (require, exports, module) {
    // your CommonJS code here
});
```

It takes in a string and gives back a string:

```js
var amdWrap = require("amd-wrap");

var wrapped = amdWrap("module.exports = 5;");
var wrapThis = amdWrap(fs.readFileSync(__filename));
```

Line numbers will line up, although the first column will be shifted by
`"define (function (require, exports, module) {".length` characters.

See also: [amd-wrap-legacy](https://www.npmjs.com/package/amd-wrap-legacy), which has a few more affordances for use when transitioning a larger codebase from CommonJS to AMD.
