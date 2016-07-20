'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Button extends Control {
	constructor(opts = {}) {
		
		opts.text = (opts.text == '' || !!opts.text) ? opts.text.toString() : 'Button'

		let control = ui.uiNewButton(opts.text)
		super(control, opts)

		this._on = {
			clicked: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('clicked')
				this.emit('clicked', this)
			})
		}
		ui.uiButtonOnClicked(this.control, this._on.clicked, null)
	}

	get text() {
		if(this.destroyed) return
		return ui.uiButtonText(this.control)
	}
	set text(value = '') {
		if(this.destroyed) return
		ui.uiButtonSetText(this.control, value)
	}
}

module.exports = Button