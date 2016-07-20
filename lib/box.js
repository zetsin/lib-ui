'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class box extends Control {
	constructor(control, opts = {}) {
		super(control, opts)

		this.padded = true

		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			let ctrl
			if(child.control) {
				ctrl = child.control
			} else if(child.name) {
				ctrl = new (require('./' + child.name))(child.value || child)
			} else {
				return
			}
			this.append(ctrl, child.attr || child)
		})
	}

	get padded() {
		if(this.destroyed) return
		return !!ui.uiBoxPadded(this.control)
	}
	set padded(value = false) {
		if(this.destroyed) return
		ui.uiBoxSetPadded(this.control, !!value)
	}

	append(child, {
		stretchy = false
	} = {}) {
		if(this.destroyed) return

		ui.uiBoxAppend(this.control, child.control, stretchy)
	}
	delete(index = 0) {
		if(this.destroyed) return
		ui.uiBoxDelete(this.control, +index)
	}
}

module.exports = box