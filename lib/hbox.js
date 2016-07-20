'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../dep/ui')

const Box = require('./box')
const common = require('./common')

class HBox extends Box {
	constructor(opts = {}) {
		let control = ui.uiNewHorizontalBox()
		super(control, opts)
	}
}

module.exports = HBox