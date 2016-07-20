'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const MenuItem = require('./menuitem')
const common = require('./common')

const types = {
	normal: 0,
	check: 1,
	separator: 2,
	quit: 3,
	preferences: 4,
	about: 5
}
Object.keys(types).map((item) => {
	let value = types[item]
	types[value] = value
})

class Menu extends Control {
	constructor(opts = {}) {

		opts.text = (opts.text == '' || !!opts.text) ? opts.text.toString() : 'Node UI'

		let control = ui.uiNewMenu(opts.text)
		super(control, opts)

		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			this.append(child)
		})
	}

	append(opts = {}) {
		if(this.destroyed) return

		let type = types[(opts.type || 0).toString().toLowerCase()] || 0

		let item
		if(type == types.check) {
			item = ui.uiMenuAppendCheckItem(this.control, opts.text || 'Check')
		} else if(type == types.separator) {
			item = ui.uiMenuAppendSeparator(this.control)
		} else if(type == types.quit) {
			item = ui.uiMenuAppendQuitItem(this.control)
		} else if(type == types.preferences) {
			item = ui.uiMenuAppendPreferencesItem(this.control)
		} else if(type == types.about) {
			item = ui.uiMenuAppendAboutItem(this.control)
		} else {
			item = ui.uiMenuAppendItem(this.control, opts.text || 'Item')
		}

		item = new MenuItem(item, opts)

		return item
	}
}

module.exports = Menu