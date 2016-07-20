'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Control = require('./control')
const common = require('./common')

class Window extends Control {
	constructor(opts = {}) {
		opts.title = (opts.title == '' || !!opts.title) ? opts.title.toString() : 'Node UI'
		opts.w = opts.w >= 0 ? opts.w : 640
		opts.h = opts.h >= 0 ? opts.h : 480
		opts.menu = opts.menu == false ? false : true

		let control = ui.uiNewWindow(opts.title, opts.w, opts.h, opts.menu)
		super(control, opts)

		let f = FFI.Function( 'int', [ ref.refType(ui.uiWindow), ref.refType('void') ] )
		this._on = {
			closing: f.toPointer((control, data) => {
				console.log('closing')
				this.close()
			}),
			positionChanged: f.toPointer((control, data) => {
				console.log('moved')
				this.emit('moved')
			}),
			contentSizeChanged: f.toPointer((control, data) => {
				console.log('resized')
				this.emit('resized')
			}),
		}
		ui.uiWindowOnPositionChanged(this.control, this._on.positionChanged, null)
		ui.uiWindowOnContentSizeChanged(this.control, this._on.contentSizeChanged, null)
		ui.uiWindowOnClosing(this.control, this._on.closing, null)


		this.margined = true

		let children = opts.children || opts.child || []
		children = children.length >= 0 ? children : [children]
		children.map((child = {}) => {
			let ctrl
			if(child.control) {
				ctrl = child.control
			} else if(child.name) {
				ctrl = new (require('./' + child.name.toLowerCase()))(child.value || child)
			} else {
				return
			}
			this.child = ctrl
		})

	}
	get title() {
		if(this.destroyed) return
		return ui.uiWindowTitle(this.control)
	}
	set title(value = '') {
		if(this.destroyed) return
		ui.uiWindowSetTitle(this.control, value)
	}
	get position() {
		if(this.destroyed) return {}
		let x = ref.alloc('int')
		let y = ref.alloc('int')
		ui.uiWindowPosition(this.control, x, y)
		return common.arraylike({
			x: x.deref(),
			y: y.deref()
		})
	}
	set position(xy) {
		if(this.destroyed) return
		xy = common.arraylike2obj(xy, 'x,y')
		ui.uiWindowSetPosition(this.control, xy.x, xy.y)
	}
	get size() {
		if(this.destroyed) return {}
		console.log(this.control)
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		ui.uiWindowContentSize(this.control, w, h)
		return common.arraylike({
			w: w.deref(),
			h: h.deref()
		})
	}
	set size(wh) {
		if(this.destroyed) return
		wh = common.arraylike2obj(wh, 'w,h')
		ui.uiWindowSetContentSize(this.control, wh.w, wh.h)
	}
	get fullscreen() {
		if(this.destroyed) return
		return !!ui.uiWindowFullscreen(this.control)
	}
	set fullscreen(value = false) {
		if(this.destroyed) return
		ui.uiWindowSetFullscreen(this.control, !!value)
	}
	get borderless() {
		if(this.destroyed) return
		return !!ui.uiWindowBorderless(this.control)
	}
	set borderless(value = false) {
		if(this.destroyed) return
		ui.uiWindowSetBorderless(this.control, !!value)
	}
	get margined() {
		if(this.destroyed) return
		return !!ui.uiWindowMargined(this.control)
	}
	set margined(value) {
		if(this.destroyed) return
		ui.uiWindowSetMargined(this.control, !!value)
	}
	set child(value) {
		if(this.destroyed) return
		ui.uiWindowSetChild(this.control, value.control)
	}

	center() {
		if(this.destroyed) return
		ui.uiWindowCenter(this.control)
	}
	openfile() {
		if(this.destroyed) return
		return ui.uiOpenFile(this.control)
	}
	savefile() {
		if(this.destroyed) return
		return ui.uiSaveFile(this.control)
	}
	message(title = '', description = '') {
		if(this.destroyed) return
		ui.uiMsgBox(this.control, title, description)
	}
	error(title = '', description = '') {
		if(this.destroyed) return
		ui.uiMsgBoxError(this.control, title, description)
	}
	close() {
		common.preventDefault(this, 'closing', () => {
			this.destroy()
		})
	}

}

module.exports = Window