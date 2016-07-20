'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')

class Context {
	constructor(canvas) {
		this._context = canvas._context
	}

	get context() {
		return this._context
	}

	stroke(path, brush, strokeParams) {

		path.end()
		ui.uiDrawStroke(this.context, path.path, brush.ref(), strokeParams.ref())

		return this
	}
	fill(path, brush) {

		path.end()
		ui.uiDrawFill(this.context, path.path, brush.ref())

		return this
	}
	clip(path) {
		
		path.end()
		ui.uiDrawClip(this.context, path.path)

		return this
	}
	text(x = 0, y = 0, layout) {
		ui.uiDrawText(this.context, x, y, layout.layout)

		return this
	}
	
	transform(matrix) {
		ui.uiDrawTransform(this.context, matrix.ref())

		return this
	}
	save() {
		ui.uiDrawSave(this.context)

		return this
	}
	restore() {
		ui.uiDrawRestore(this.context)

		return this
	}
}


module.exports = Context