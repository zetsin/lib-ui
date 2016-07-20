'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')

const caps = {
	flat: 0,
	round: 1,
	square: 2,
}
const _caps = {}
Object.keys(caps).map((item) => {
	let value = caps[item]
	caps[value] = value
	_caps[value] = item
})

const joins = {
	miter: 0,
	round: 1,
	bevel: 2,
}
const _joins = {}
Object.keys(joins).map((item) => {
	let value = joins[item]
	joins[value] = value
	_joins[value] = item
})

class Stroke {

	constructor({
		cap = 0,
		join = 0,
		thickness = 1,
		miterLimit = 10,
		dashes = [],
		dashPhase = 0,
	} = {}) {

		this._stroke = ui.uiDrawStrokeParams({
			Cap: caps[cap.toString().toLowerCase()] || 0,
			Join: joins[join.toString().toLowerCase()] || 0,
			Thickness: +thickness,
			MiterLimit: +miterLimit,
			Dashes: null,
			NumDashes: 0,
			DashPhase: +dashPhase,
		})

		this.dashes = dashes
	}

	ref() {
		return this.stroke.ref()
	}

	get stroke() {
		return this._stroke
	}

	get cap() {
		return _caps[this.stroke.Cap]
	}
	set cap(value = 0) {
		this.stroke.Cap = caps[value.toString().toLowerCase()] || 0
	}

	get join() {
		return _joins[this.stroke.Join]
	}
	set join(value = 0) {
		this.stroke.Join = joins[value.toString().toLowerCase()] || 0
	}

	get thickness() {
		return this.stroke.Thickness
	}
	set thickness(value = 1) {
		this.stroke.Thickness = +value
	}

	get miterLimit() {
		return this.stroke.MiterLimit
	}
	set miterLimit(value = 10) {
		this.stroke.MiterLimit = +value
	}

	get dashPhase() {
		return this.stroke.DashPhase
	}
	set dashPhase(value = 0) {
		this.stroke.DashPhase = +value
	}

	get dashes() {
		return this._dashes
	}
	set dashes(value = []) {
		let size = ref.types.double.size
		let buf = new Buffer(size * value.length)
		value.map((item, index) => {
			buf.set(ref.alloc('double', item), index * size)
		})

		this.stroke.Dashes = buf
		this.stroke.NumDashes = value.length

		this._dashes = value
	}
}

module.exports = Stroke