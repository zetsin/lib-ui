'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')
const common = require('../common')

class Matrix {
	constructor(m11 = 1, m12 = 0, m21 = 0, m22 = 1, m31 = 0, m32 = 0) {
		this._matrix = ui.uiDrawMatrix({
			M11: m11,
			M12: m12,
			M21: m21,
			M22: m22,
			M31: m31,
			M32: m32,
		})
	}

	get matrix() {
		return this._matrix
	}

	ref() {
		return this.matrix.ref()
	}

	setIdentity() {
		ui.uiDrawMatrixSetIdentity(this.ref())
	}
	translate(x = 0, y = 0) {

		ui.uiDrawMatrixTranslate(this.ref(), x, y)
		return this
	}
	scale(scalewidth = 1, scaleheight = 1, scalex = 0, scaley = 0) {

		ui.uiDrawMatrixScale(this.ref(), scalex, scaley, scalewidth, scaleheight)
		return this
	}
	rotate(amount = 0, x = 0, y = 0) {

		ui.uiDrawMatrixRotate(this.ref(), x, y, amount)
		return this
	}
	skew(skewwidth = 1, skewheight = 1, skewx = 0, skewy = 0) {

		ui.uiDrawMatrixSkew(this.ref(), skewx, skewy, skewwidth, skewheight)
		return this
	}
	multiply(src) {
		ui.uiDrawMatrixMultiply(this.ref(), src.ref())
		return this
	}
	transformPoint(x = 0, y = 0) {

		x = ref.alloc('double', x)
		y = ref.alloc('double', y)

		ui.uiDrawMatrixTransformPoint(this.ref(), x, y)
		return common.arraylike({
			x: x,
			y: y,
		})
	}
	transformSize(w = 0, h = 0) {

		w = ref.alloc('double', w)
		h = ref.alloc('double', h)

		ui.uiDrawMatrixTransformSize(this.ref(), w, h)
		return common.arraylike({
			w: w,
			h: h,
		})
	}
	invertible() {
		return !!ui.uiDrawMatrixInvertible(this.ref())
	}
	invert() {
		return !!ui.uiDrawMatrixInvert(this.ref())
	}
}

module.exports = Matrix