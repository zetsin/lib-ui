'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Checkbox extends Control {
	constructor(opts = {}) {
		
		opts.text = (opts.text == '' || !!opts.text) ? opts.text.toString() : 'Checkbox'

		let control = ui.uiNewCheckbox(opts.text)
		super(control, opts)

		this._on = {
			toggled: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('toggled')
				this.emit('toggled', this)
			})
		}
		ui.uiCheckboxOnToggled(this.control, this._on.toggled, null)
	}

	get text() {
		if(this.destroyed) return
		return ui.uiCheckboxText(this.control)
	}
	set text(value = '') {
		if(this.destroyed) return
		ui.uiCheckboxSetText(this.control, value)
	}
	get checked() {
		if(this.destroyed) return
		return !!ui.uiCheckboxChecked(this.control)
	}
	set checked(value = false) {
		if(this.destroyed) return
		ui.uiCheckboxSetChecked(this.control, !!value)
	}
}

module.exports = Checkbox