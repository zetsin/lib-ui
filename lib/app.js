'use strict'

const EventEmitter = require('events')

const FFI = require('ffi')
const ref = require('ref')

const common = require('./common')

const ui = require('../dep/ui')

class App extends EventEmitter {
	constructor() {
		super()

		let opts = new ui.uiInitOptions({
			size: 0
		})
		ui.uiInit(opts.ref())

		this._on = {
			shouldQuit: FFI.Function('int', [ref.refType('void')]).toPointer((data) => {
				this.quit()
			}),
		}
		ui.uiOnShouldQuit(this._on.shouldQuit, null)

		let step = () => {
			ui.uiMainStep(0)
			if(Date.now() - this._now > this.fps) {
				this._now = Date.now()
				setImmediate(step)
			} else {
				this._now = Date.now()
				setTimeout(step)
			}
		}
		ui.uiMainSteps()
		step()
	}

	get fps() {
		return this._fps || 1000 / 24
	}

	set fps(value = 1000 / 24) {
		this._fps = value
	}

	quit() {
		console.log('should-quit')
		common.preventDefault(this, 'should-quit', () => {
			ui.uiQuit()
			process.exit()
		})
	}
	main() {
		ui.uiMain()
	}
}

module.exports = new App