'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')
const common = require('../common')

const modes = {
	winding: 0,
	alternate: 1,
}
Object.keys(modes).map((item) => {
	let value = modes[item]
	modes[value] = value
})

class Path {
	constructor({
		mode = 0
	} = {}) {

		this._path = ui.uiDrawNewPath(modes[mode.toString().toLowerCase()] || 0)
	}

	get path() {
		return this._path
	}

	free() {
		ui.uiDrawFreePath(this.path)
	}
	figure(x, y) {
		ui.uiDrawPathNewFigure(this.path, x, y)
	}
	lineTo(x, y) {
		ui.uiDrawPathLineTo(this.path, x, y)
	}
	arcTo(x, y, radius, start, sweep, negative) {
		ui.uiDrawPathArcTo(this.path, x, y, radius, start, sweep, negative)
	}
	bezierTo(cp1x, cp1y, cp2x, cp2y, x, y) {
		ui.uiDrawPathBezierTo(this.path, cp1x, cp1y, cp2x, cp2y, x, y)
	}
	rect(x, y, width, height) {
		ui.uiDrawPathAddRectangle(this.path, x, y, width, height)
	}
	close() {
		ui.uiDrawPathCloseFigure(this.path)
	}
	end() {
		ui.uiDrawPathEnd(this.path)
	}
}

module.exports = Path