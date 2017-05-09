const test = require('tape').test
const jsc = require('jsverify')
const check = require('..')
const is_not_zero = function (n) { return n !== 0 }
test('all integers are non-zero', function (t) {
	check(jsc.forall('integer', is_not_zero), t)
	t.end()
})
