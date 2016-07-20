'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Form extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewForm()
		super(control, opts)

		this.padded = true
		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			let ctrl
			if(child.control) {
				ctrl = child.control
			} else if(child.name) {
				ctrl = new (require('./' + child.name.toLowerCase()))(child.value || child)
			} else {
				return
			}
			this.append(ctrl, child.attr || child)
		})
	}

	get padded() {
		if(this.destroyed) return
		return !!ui.uiFormPadded(this.control)
	}
	set padded(value = false) {
		if(this.destroyed) return
		ui.uiFormSetPadded(this.control, !!value)
	}

	append(child, {
		label = '', 
		stretchy = false
	} = {}) {
		if(this.destroyed) return

		if(typeof label == 'object') {
			stretchy = label.stretchy
			label = label.label
		}

		ui.uiFormAppend(this.control, label, child.control, stretchy)
	}
	delete(index = 0) {
		if(this.destroyed) return
		ui.uiFormDelete(this.control, +index)
	}
}

module.exports = Form