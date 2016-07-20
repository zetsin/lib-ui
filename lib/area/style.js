'use strict'

const Color = require('./color')
const Brush = require('./brush')
const Gradient = require('./gradient')

class ColorStyle {
	constructor(color = '') {

		this._color = new Color(color)
		this._brush = new Brush(this._color.toPercent())
	}

	get color() {
		return this._color
	}

	set color(value) {
		let color = new Color(value)
		if(color.ok) {
			this._color = color

			color = color.toPercent()
			this._brush.type = 0
			this._brush.r = color.r
			this._brush.g = color.g
			this._brush.b = color.b
			this._brush.a = color.a
		}
	}

}

class Style {
	constructor(value) {
		this._style = new ColorStyle(value)
	}

	get style() {
		return this._style.color ? this._style.color.toString() : this._style
	}

	set style(value) {
		if(value instanceof Gradient) {
			this._style = value
		} else {
			this._style.color = value
		}
	}

	get brush() {
		return this._style._brush
	}

	get colors() {
		if(this._style instanceof Gradient) {
			return this.brush.stops
		} else {
			return [{
				pos: 1,
				r: this.brush.r,
				g: this.brush.g,
				b: this.brush.b,
				a: this.brush.a,
			}]
		}
	}
}

module.exports = Style