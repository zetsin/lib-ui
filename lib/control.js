'use strict'

const EventEmitter = require('events')

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')
const Controls = require('./controls')

class Control extends EventEmitter {
	constructor(control, opts = {}) {
		super()

		opts.on = opts.on || {}
		Object.keys(opts.on).map((item) => {
			this.on(item, opts.on[item])
		})

		this._control = control
		this._destroyed = false

		setImmediate(() => {
			
			Object.keys(opts).map((item) => {
				if(item != 'value' && item != 'attr' && item != 'on' && item != 'children' && item != 'child') {
					this[item] = opts[item]
				}
			})

			this.emit('created', this)
		})

		Controls.create(this.control.address(), this)

	}

	get control() {
		return this._control
	}
	get destroyed() {
		return this._destroyed
	}

	get handle() {
		if(this.destroyed) return
		return ui.uiControlHandle(this.control)
	}
	get parent() {
		if(this.destroyed) return
		return new Control(ui.uiControlParent(this.control))
	}
	set parent(value) {
		if(this.destroyed) return
		ui.uiControlSetParent(this.control, value.control)
	}
	get toplevel() {
		if(this.destroyed) return
		return ui.uiControlToplevel(this.control)
	}
	get visible() {
		if(this.destroyed) return
		return !!ui.uiControlVisible(this.control)
	}
	get enable() {
		if(this.destroyed) return
		return !!ui.uiControlEnabled(this.control)
	}
	set enable(value = false) {
		if(this.destroyed) return
		if(!value) {
			!!ui.uiControlDisable(this.control)
		} else {
			!!ui.uiControlEnable(this.control)
		}
	}

	destroy() {
		if(this.destroyed) return
		this._destroyed = true
		ui.uiControlDestroy(this.control)

		Controls.destroy(this.control)
	}
	show() {
		if(this.destroyed) return
		ui.uiControlShow(this.control)
	}
	hide() {
		if(this.destroyed) return
		ui.uiControlHide(this.control)
	}
}

module.exports = Control