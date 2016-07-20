'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class DatePicker extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewDatePicker()
		super(control, opts)
	}
}

module.exports = DatePicker