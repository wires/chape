const test = require('..').test
const jsc = require('..').jsc

const true_prop = function (n) {
	return typeof n === 'number'
}

test('foo', function (t) {
	t.check(jsc.forall('integer', true_prop))
	t.end()
})
