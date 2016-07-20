'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Spinbox extends Control {
	constructor(opts = {}) {

		opts.min = opts.min >= 0 ? opts.min : 0
		opts.max = opts.max >= 0 ? opts.max : 100

		let control = ui.uiNewSpinbox(opts.min, opts.max)
		super(control, opts)

		this._on = {
			changed: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiSpinboxOnChanged(this.control, this._on.changed, null)
	}

	get value() {
		if(this.destroyed) return
		return ui.uiSpinboxValue(this.control)
	}
	set value(value = 0) {
		if(this.destroyed) return
		ui.uiSpinboxSetValue(this.control, +value)
	}
}

module.exports = Spinbox