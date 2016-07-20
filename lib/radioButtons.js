'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class RadioButtons extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewRadioButtons()
		super(control, opts)

		this._on = {
			selected: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('selected')
				this.emit('selected', this)
			})
		}
		ui.uiRadioButtonsOnSelected(this.control, this._on.selected, null)


		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			this.append(child)
		})
	}

	get selected() {
		if(this.destroyed) return
		return ui.uiRadioButtonsSelected(this.control)
	}
	set selected(value = 0) {
		if(this.destroyed) return
		ui.uiRadioButtonsSetSelected(this.control, +value)
	}

	append(text = '') {
		if(this.destroyed) return
		ui.uiRadioButtonsAppend(this.control, text)
	}
}

module.exports = RadioButtons