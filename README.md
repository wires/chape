[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# chape

This exports a helper method, which can be used to check a
[jsverify](https://github.com/jsverify/jsverify) property with
with [tape](https://github.com/substack/tape).

If `tape` is new to you, see http://www.macwright.org/2014/03/11/tape-is-cool.html
for some propaganda.

### Usage

	npm i --save-dev chape

then

```js
const test = require('tape').test
const jsc = require('jsverify')
const check = require('check')
```

Simple example, showing something obvious isn't true

```js
const is_not_zero = function (n) { return n !== 0 }
test('all integers are non-zero', function (t) {
	check(jsc.forall('integer', is_not_zero), t)
	t.end()
})
```

The [TAP](https://en.wikipedia.org/wiki/Test_Anything_Protocol) output:

```
TAP version 13
# all integers are non-zero
not ok 1 property does not hold! found counter example: 0
  ---
    operator: fail
    at: Test.t.check (./chape/index.js:12:6)
  ...

1..1
# tests 1
# pass  0
# fail  1
```

### More

YMMV, there isn't much going on here, it's just a trivial helper, check the source.

