'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Area extends Control {
	constructor(opts = {}) {
		
		opts.scroll = !!opts.scroll
		opts.w = opts.w >= 0 ? opts.w : 640
		opts.h = opts.h >= 0 ? opts.h : 480

		let on = Object.create({
			Draw: FFI.Function('void', [ref.refType(ui.uiAreaHandler), ref.refType(ui.uiArea), ref.refType(ui.uiAreaDrawParams)]).toPointer((handler, area, params) => {
				params = params.deref()
				let canvas = new (require('./area/canvas'))({
					context: params.Context,
					width: params.ClipX + params.ClipWidth,
					height: params.ClipY + params.ClipHeight,
				})

				let clip = {
					x: params.ClipX,
					y: params.ClipY,
					w: params.ClipWidth,
					h: params.ClipHeight,
				}

				this.emit('draw', canvas, clip, this)
				console.log('draw')
			}),
			MouseEvent: FFI.Function('void', [ref.refType(ui.uiAreaHandler), ref.refType(ui.uiArea), ref.refType(ui.uiAreaMouseEvent)]).toPointer((handler, area, mouse) => {
				console.log('mouse')
				this.emit('mouse', mouse.deref(), this)
			}),
			MouseCrossed: FFI.Function('void', [ref.refType(ui.uiAreaHandler), ref.refType(ui.uiArea), 'int']).toPointer((handler, area, left) => {
				console.log('left')
				this.emit('cross', !!left, this)
			}),
			DragBroken: FFI.Function('void', [ref.refType(ui.uiAreaHandler), ref.refType(ui.uiArea)]).toPointer((handler, area) => {
				console.log('drag')
				this.emit('drag', this)
			}),
			KeyEvent: FFI.Function('int', [ref.refType(ui.uiAreaHandler), ref.refType(ui.uiArea), ref.refType(ui.uiAreaKeyEvent)]).toPointer((handler, area, key) => {
				console.log('key')
				this.emit('key', key.deref(), this)
			}),
		})
		let handler = ui.uiAreaHandler(on)
		let control = opts.scroll ? ui.uiNewScrollingArea(handler.ref(), opts.w, opts.h) : ui.uiNewArea(handler.ref())
		super(control, opts)

		this._on = on

	}

	set size(wh) {
		if(this.destroyed) return
		wh = common.arraylike2obj(wh, 'w,h')
		ui.uiAreaSetSize(this.control, wh.w, wh.h)
	}

	redraw() {
		if(this.destroyed) return
		ui.uiAreaQueueRedrawAll(this.control)
	}
	scrollTo(x, y, width, height) {
		if(this.destroyed) return
		ui.uiAreaScrollTo(this.control, x, y, width, height)
	}
	static get Path() {
		return require('./area/path')
	}
	static get Brush() {
		return require('./area/brush')
	}
	static get Stroke() {
		return require('./area/stroke')
	}
	static get Matrix() {
		return require('./area/matrix')
	}
	static get Font() {
		return require('./area/font')
	}
}

module.exports = Area