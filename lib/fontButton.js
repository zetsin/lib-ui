'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const Font = require('./area/font')
const common = require('./common')

class FontButton extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewFontButton()
		super(control, opts)

		this._on = {
			changed: FFI.Function('int', [ref.refType(ui.uiFontButton), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiFontButtonOnChanged(this.control, this._on.changed, null)
	}

	get font() {
		if(this.destroyed) return
		return new Font(ui.uiFontButtonFont(this.control))
	}
}

module.exports = FontButton