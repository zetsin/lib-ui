'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Entry extends Control {
	constructor(opts = {}) {
		
		opts.type = (opts.type == '' || !!opts.type) ? opts.type.toString() : 'normal'

		let control = opts.type == 'password' ? ui.uiNewPasswordEntry() : (opts.type == 'search' ? ui.uiNewSearchEntry() : ui.uiNewEntry())
		super(control, opts)

		this._on = {
			changed: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiEntryOnChanged(this.control, this._on.changed, null)
	}

	get text() {
		if(this.destroyed) return
		return ui.uiEntryText(this.control)
	}
	set text(value = '') {
		if(this.destroyed) return
		ui.uiEntrySetText(this.control, value)
	}
	get readonly() {
		if(this.destroyed) return
		return !!ui.uiEntryReadOnly(this.control)
	}
	set readonly(value = false) {
		if(this.destroyed) return
		ui.uiEntrySetReadOnly(this.control, !!value)
	}
}

module.exports = Entry