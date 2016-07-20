'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const Controls = require('./controls')
const common = require('./common')

class Menuitem extends Control {
	constructor(control, opts = {}) {

		super(control, opts)
		
		if(opts.type == 'quit') {
			return
		}
		
		this._on = {
			clicked: FFI.Function( 'int', [ ref.refType(ui.uiMenuItem), ref.refType(ui.uiWindow), ref.refType('void') ] ).toPointer((sender, window, data) => {
				console.log('clicked')
				this.emit('clicked', Controls.retrive(window.address()), this)
			})
		}
		ui.uiMenuItemOnClicked(this.control, this._on.clicked, null)
	}

	set enable(value = false) {
		if(this.destroyed) return
		if(!value) {
			ui.uiMenuItemDisable(this.control)
		} else {
			ui.uiMenuItemEnable(this.control)
		}
	}

	get checked() {
		if(this.destroyed) return
		return !!ui.uiMenuItemChecked(this.control)
	}
	set checked(value = false) {
		if(this.destroyed) return
		ui.uiMenuItemSetChecked(this.control, !!value)
	}
}

module.exports = Menuitem