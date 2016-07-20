'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class EditableCombobox extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewEditableCombobox()
		super(control, opts)

		this._on = {
			change: FFI.Function('int', [ref.refType(ui.uiWindow), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiEditableComboboxOnChanged(this.control, this._on.change, null)


		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			this.append(child)
		})
	}

	get text() {
		if(this.destroyed) return
		return ui.uiEditableComboboxText(this.control)
	}
	set text(value = '') {
		if(this.destroyed) return
		ui.uiEditableComboboxSetText(this.control, value)
	}

	append(text = '') {
		if(this.destroyed) return
		ui.uiEditableComboboxAppend(this.control, text)
	}
}

module.exports = EditableCombobox