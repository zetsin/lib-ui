'use strict'

const app = require('./app')

class Controls {
	constructor() {
		this._controls = {}
	}

	create(key, control) {
		this._controls[key] = control
	}
	retrive(key) {
		return this._controls[key]
	}
	delete(key) {
		delete this._controls[key]
		if(!Object.keys(this._controls).length) {
			app.emit('window-all-closed')
		}
	}
}

module.exports = new Controls
