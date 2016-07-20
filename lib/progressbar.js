'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class ProgressBar extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewProgressBar()
		super(control, opts)
	}

	get value() {
		if(this.destroyed) return
		return ui.uiProgressBarValue(this.control)
	}
	set value(value = 0) {
		if(this.destroyed) return
		ui.uiProgressBarSetValue(this.control, +value)
	}
}

module.exports = ProgressBar