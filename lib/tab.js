'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Tab extends Control {
	constructor(opts = {}) {
		let control = ui.uiNewTab()
		super(control, opts)

		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			let ctrl
			if(child.control) {
				ctrl = child.control
			} else if(child.name) {
				ctrl = new (require('./' + child.name.toLowerCase()))(child.val || child)
			} else {
				return
			}
			this.append(ctrl, child.attr || child)
		})
	}

	get num() {
		if(this.destroyed) return
		return ui.uiTabNumPages(this.control)
	}
	page(num = 0) {
		let self = this
		return ({
			get margined() {
				if(this.destroyed) return
				return ui.uiTabMargined(self.control, +num)
			},
			set margined(value = true) {
				if(this.destroyed) return
				ui.uiTabSetMargined(self.control, +num, !!value)
			}
		})
	}

	append(child, {
		title = '', 
		margined = true,
	} = {}) {
		if(this.destroyed) return

		ui.uiTabAppend(this.control, title, child.control)
		this.page(this.num - 1).margined = margined
	}
	insert(child, title = '', index = 0) {
		if(this.destroyed) return
		ui.uiTabInsertAt(this.control, title, +index, child.control)
	}
	delete(index = 0) {
		if(this.destroyed) return
		ui.uiTabDelete(this.control, +index)
	}
}

module.exports = Tab