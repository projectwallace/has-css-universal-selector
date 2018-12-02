const test = require('ava')
const hasUniversalSelector = require('.')

test('it accepts a simple universal selector', t => {
	t.true(hasUniversalSelector('*'))
})

test('it accepts a combined selector', t => {
	t.true(hasUniversalSelector('*::before'))
})

test('it accepts a nested universal selector', t => {
	t.true(hasUniversalSelector('.parent * .child'))
})

test('it rejects a non-universal selector', t => {
	t.false(hasUniversalSelector('.test'))
})

test('it does not count an attribute selector as universal', t => {
	t.false(hasUniversalSelector('a[href*="https://"]'))
})
