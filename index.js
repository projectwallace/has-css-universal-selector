module.exports = selector => {
	return /(?![^[]*])\*/.test(selector)
}
