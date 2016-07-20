'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Label extends Control {
	constructor(opts = {}) {

		opts.text = (opts.text == '' || !!opts.text) ? opts.text.toString() : 'Label'

		let control = ui.uiNewLabel(opts.text)
		super(control, opts)
	}

	get text() {
		if(this.destroyed) return
		return ui.uiLabelText(this.control)
	}
	set text(value = '') {
		if(this.destroyed) return
		ui.uiLabelSetText(this.control, value)
	}
}

module.exports = Label