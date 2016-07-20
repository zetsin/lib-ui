'use strict'

class Canvas {
	constructor({
		context,
		width = 0,
		height = 0
	} = {}) {
		this._context = context,
		this._width = width,
		this._height = height
	}

	getContext(id) {
		if(!id) {
			return new (require('./context'))(this)
		} else if(id == '2d') {
			return new (require('./context2d'))(this)
		}
	}

	get width() {
		return this._width || 0
	}
	get height() {
		return this._height || 0
	}
}


module.exports = Canvas