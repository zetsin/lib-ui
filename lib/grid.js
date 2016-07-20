'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

const align = {
	fill: 0,
	start: 1,
	center: 2,
	end: 3
}
Object.keys(align).map((item) => {
	let value = align[item]
	align[value] = value
})

const at = {
	lead: 0,
	top: 1,
	trail: 2,
	bottom: 3
}
Object.keys(at).map((item) => {
	let value = at[item]
	at[value] = value
})

class Grid extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewGrid()
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
		return !!ui.uiGridPadded(this.control)
	}
	set padded(value = false) {
		if(this.destroyed) return
		ui.uiGridSetPadded(this.control, !!value)
	}

	append(child, {
		left = 0,
		top = 0,
		xspan = 1,
		yspan = 1,
		hexpand = false,
		halign = 0,
		vexpand = false,
		valign = 0
	} = {}) {
		if(this.destroyed) return

		halign = align[halign.toString().toLowerCase()] || 0
		valign = align[valign.toString().toLowerCase()] || 0

		ui.uiGridAppend(this.control, child.control, left, top, xspan, yspan, !!hexpand, halign, !!vexpand, valign)
	}
	insert(child, exist, {
		at = 0,
		xspan = 1,
		yspan = 1,
		hexpand = false,
		halign = 0,
		vexpand = false,
		valign = 0
	} = {}) {
		if(this.destroyed) return

		at = at[at] || 0
		halign = align[halign.toString().toLowerCase()] || 0
		valign = align[valign.toString().toLowerCase()] || 0

		ui.uiGridInsertAt(this.control, child.control, exist.control, at, xspan, yspan, !!hexpand, halign, !!vexpand, valign)
	}
}

module.exports = Grid