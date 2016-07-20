'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class DateTimePicker extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewDateTimePicker()
		super(control, opts)
	}
}

module.exports = DateTimePicker