'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const Font = require('./area/color')
const common = require('./common')

class ColorButton extends Control {
	constructor(opts = {}) {

		let control = ui.uiNewColorButton()
		super(control, opts)

		this._on = {
			changed: FFI.Function('int', [ref.refType(ui.uiColorButton), ref.refType('void')]).toPointer((control, data) => {
				console.log('changed')
				this.emit('changed', this)
			})
		}
		ui.uiColorButtonOnChanged(this.control, this._on.changed, null)
	}

	get color() {
		if(this.destroyed) return

		let r = ref.alloc('double')
		let g = ref.alloc('double')
		let b = ref.alloc('double')
		let a = ref.alloc('double')

		ui.uiColorButtonColor(this.control, r, g, b, a)
		return {
			r: r.derf()
			g: g.derf()
			b: b.derf()
			a: a.derf()
		}
	}

	set color({
		r = 0,
		g = 0,
		b = 0,
		a = 1,
	} = {}) {
		if(this.destroyed) return

		ui.uiColorButtonSetColor(this.control, r, g, b, a)
	}
}

module.exports = ColorButton