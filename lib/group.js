'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Group extends Control {
	constructor(opts = {}) {
		
		opts.text = (opts.text == '' || !!opts.text) ? opts.text.toString() : 'Group'
		
		let control = ui.uiNewGroup(opts.text)
		super(control, opts)

		this.margined = true
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
			this.child = ctrl
		})
	}

	get margined() {
		if(this.destroyed) return
		return ui.uiGroupMargined(this.control)
	}
	set margined(value = false) {
		if(this.destroyed) return
		ui.uiGroupSetMargined(this.control, !!value)
	}
	get title() {
		if(this.destroyed) return
		return ui.uiGroupTitle(this.control)
	}
	set title(value = '') {
		if(this.destroyed) return
		ui.uiGroupSetTitle(this.control, value)
	}
	set child(value) {
		if(this.destroyed) return
		ui.uiGroupSetChild(this.control, value.control)
	}
}

module.exports = Group