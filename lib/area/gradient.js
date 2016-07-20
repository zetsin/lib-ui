'use strict'

const FFI = require('ffi')
const ref = require('ref')

const Brush = require('./brush')
const Color = require('./color')

const types = {
	linear: 1,
	radial: 2,
}
Object.keys(types).map((item) => {
	let value = types[item]
	types[value] = value
})

class CanvasGradient {
	constructor({
		type = 1,
		x0 = 0,
		y0 = 0,
		r0 = 0,
		x1 = 0,
		y1 = 0,
		r1 = 0
	} = {}) {
		this._brush = new Brush({
			type: types[type] || 1,
			x0: x0,
			y0: y0,
			r0: r0,
			x1: x1,
			y1: y1,
			r1: r1,
			stops: [],
		})
	}

	addColorStop(stop, color) {
		let stops = this._brush.stops

		color = new Color(color)
		color.toPercent((color) => {
			color.pos = stop
			stops.push(color)
			this._brush.stops = stops
		})

		return this
	}
}

module.exports = CanvasGradient