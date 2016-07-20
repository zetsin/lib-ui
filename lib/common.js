'use strict'

exports.preventDefault = (emitter, event, callback = () => {}) => {
	let prevent = false

	emitter.listeners(event).forEach((listener) => {
		listener.call(emitter, {
			preventDefault: () => {
				prevent = true
			}
		}, emitter)
	})
	if(!prevent) callback()
	return !prevent
}

exports.arraylike = (obj = {}) => {
	Object.keys(obj).forEach((value, index) => {
		obj[index] = obj[value]
	})
	return obj
}

exports.arraylike2obj = (obj = {}, keys = '') => {
	keys = keys.split(',')
	var ret = {}
	keys.forEach((value, index) => {
		value = value.trim()
		ret[value] = (value in obj) ? obj[value] : (obj[index] || 0)
	})
	return ret
}