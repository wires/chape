[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# chape

This adds a `.check` method to [tape](https://github.com/substack/tape)
that takes a [jsverify](https://github.com/jsverify/jsverify) property
and checks it.

### Usage

	npm i --save-dev chape

then

```js
const test = require('chape').test
const jsc = require('chape').jsc
```

Simple example, showing something obvious isn't true

```js
const is_not_zero = function (n) { return n !== 0 }
test('all integers are non-zero', function (t) {
	t.check(jsc.forall('integer', is_not_zero))
	t.end()
})
```

### More

YMMV, there isn't much too this, it's just a trivial helper, check the sources

