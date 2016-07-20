'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class HSeparator extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewHorizontalSeparator()
		super(control, opts)
	}
}

module.exports = HSeparator