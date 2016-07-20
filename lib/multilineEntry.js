'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class MultilineEntry extends Control {
	constructor(opts = {
		wrap: true
	}) {

		let control = opts.wrap == false ? ui.uiNewNonWrappingMultilineEntry() : ui.uiNewMultilineEntry()
		super(control, opts)
		
		this._on = {
			changed: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiMultilineEntryOnChanged(this.control, this._on.changed, null)
	}

	get text() {
		if(this.destroyed) return
		return ui.uiMultilineEntryText(this.control)
	}
	set text(value) {
		if(this.destroyed) return
		ui.uiMultilineEntrySetText(this.control, value)
	}
	get readonly() {
		if(this.destroyed) return
		return !!ui.uiMultilineEntryReadOnly(this.control)
	}
	set readonly(value = false) {
		if(this.destroyed) return
		ui.uiMultilineEntrySetReadOnly(this.control, !!value)
	}

	append(text = '') {
		if(this.destroyed) return
		ui.uiMultilineEntryAppend(this.control, text)
	}
}

module.exports = MultilineEntry