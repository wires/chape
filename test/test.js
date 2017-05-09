const test = require('tape').test
const jsc = require('jsverify')
const check = require('..')

const true_prop = function (n) {
	return typeof n === 'number'
}

test('foo', function (t) {
	check(jsc.forall('integer', true_prop), t)
	t.end()
})
