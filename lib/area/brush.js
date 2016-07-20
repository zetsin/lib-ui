'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')

const types = {
	solid: 0,
	linear: 1,
	radial: 2,
	image: 3,
}
Object.keys(types).map((item) => {
	let value = types[item]
	types[value] = value
})

class Brush {
	constructor({
		type = 0,
		r = 0,
		g = 0,
		b = 0,
		a = 1,
		x0 = 0,
		y0 = 0,
		x1 = 0,
		y1 = 0,
		r1 = 0,
		stops = []
	} = {}) {

		this._brush = ui.uiDrawBrush({
			Type: types[type.toString().toLowerCase()] || 0,
			R: r,
			G: g,
			B: b,
			A: a,
			X0: x0,
			Y0: y0,
			X1: x1,
			Y1: y1,
			OuterRadius: r1,
			Stops: null,
			NumStops: 0
		})

		this.stops = stops
	}

	ref() {
		return this.brush.ref()
	}

	get brush() {
		return this._brush
	}

	get type() {
		return this.brush.Type
	}
	set type(value = 0) {
		this.brush.Type = +value
	}

	get r() {
		return this.brush.R
	}
	set r(value = 0) {
		this.brush.R = +value
	}

	get g() {
		return this.brush.G
	}
	set g(value = 0) {
		this.brush.G = +value
	}

	get b() {
		return this.brush.B
	}
	set b(value = 0) {
		this.brush.B = +value
	}

	get a() {
		return this.brush.A
	}
	set a(value = 1) {
		this.brush.A = +value
	}

	get x0() {
		return this.brush.X0
	}
	set x0(value = 0) {
		this.brush.X0 = +value
	}

	get y0() {
		return this.brush.Y0
	}
	set y0(value = 0) {
		this.brush.Y0 = +value
	}

	get x1() {
		return this.brush.x1
	}
	set x1(value = 0) {
		this.brush.x1 = +value
	}

	get y1() {
		return this.brush.y1
	}
	set y1(value = 0) {
		this.brush.y1 = +value
	}

	get r1() {
		return this.brush.OuterRadius
	}
	set r1(value = 0) {
		this.brush.OuterRadius = +value
	}

	get stops() {
		return this._stops
	}
	set stops(value = []) {

		let size = ui.uiDrawBrushGradientStop.size
		let buf = new Buffer(size * value.length)
		value.map((item, index) => {

			item.pos = item.pos || 0
			item.r = item.r || 0
			item.g = item.g || 0
			item.b = item.b || 0
			item.a = item.a >= 0 ? item.a : 1

			buf.set(ui.uiDrawBrushGradientStop({
				Pos: item.pos,
				R: item.r,
				G: item.g,
				B: item.b,
				A: item.a,
			}).ref(), index * size)

		})

		this.brush.Stops = buf
		this.brush.NumStops = value.length

		this._stops = value

	}

	static multiplyAlpha(brush, alpha = 1) {
		if(alpha == 1) {
			return brush
		} else {
			let stops = Array.from(brush.stops)
			stops.map((item) => {
				item.a = item.a * alpha
			})
			let _brush = new Brush({
				r: brush.r,
				g: brush.g,
				b: brush.b,
				a: brush.a * alpha,
				x0: brush.x0,
				y0: brush.y0,
				x1: brush.x1,
				y1: brush.y1,
				r1: brush.r1,
				stops: stops
			})

			return _brush
		}
	}
}

module.exports = Brush