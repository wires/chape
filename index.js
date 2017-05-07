// const nll = require('..')
const jsc = require('jsverify')
const tape = require('tape')

// adds `.check(prop, [msg])` to tape
function add_check (t) {
	t.check = function (prop, msg) {
		const result = jsc.check(prop, { quiet: true })
		if (result === true)
			t.pass(msg || 'property holds')
		else
			t.fail('property does not hold! found counter example: ' + result.counterexamplestr)
	}
	return t
}

// tape.test with `.check` added to t
exports.test = function (name, cb) {
	return tape.test(name, function (t) {
		return cb(add_check(t))
	})
}

// re-export jsc
exports.jsc = jsc