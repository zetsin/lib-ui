'use strict'

const FFI = require('ffi')
const ref = require('ref')

const ui = require('../../dep/ui')

const common = require('../common')

const weights = {
	thin: 0,
	ultralight: 1,
	light: 2,
	book: 3,
	normal: 4,
	medium: 5,
	semibold: 6,
	bold: 7,
	utrabold: 8,
	heavy: 9,
	ultraheavy: 10,
}
const _weights = {}
Object.keys(weights).map((item) => {
	let value = weights[item]
	weights[value] = value
	_weights[value] = item
})

const italics = {
	normal: 0,
	oblique: 1,
	italic: 2,
}
const _italics = {}
Object.keys(italics).map((item) => {
	let value = italics[item]
	italics[value] = value
	_italics[value] = item
})

const stretchs = {
	ultracondensed: 0,
	extracondensed: 1,
	condensed: 2,
	semicondensed: 3,
	normal: 4,
	semiexpanded: 5,
	expanded: 6,
	extraexpanded: 7,
	ultraexpanded: 8,
}
const _stretchs = {}
Object.keys(stretchs).map((item) => {
	let value = stretchs[item]
	stretchs[value] = value
	_stretchs[value] = item
})

class Layout {
	constructor(text = '', font, width = -1) {
		this._layout = ui.uiDrawNewTextLayout(text, font, width)
	}

	get layout() {
		return this._layout
	}
	set width(value = 0) {
		ui.uiDrawTextLayoutSetWidth(this.layout, value)
	}
	get size() {
		let w = ref.alloc('double')
		let h = ref.alloc('double')
		ui.uiDrawTextLayoutExtents(this.layout, w, h)
		return common.arraylike({
			w: w.deref(),
			h: h.deref(),
		})

	}
	setColor(start = 0, end = 0, {
		r = 0,
		g = 0,
		b = 0,
		a = 1,
	} = {}) {
		ui.uiDrawTextLayoutSetColor(this.layout, start, end, r, g, b, a)
		return this
	}

	free() {
		ui.uiDrawFreeTextLayout(this.layout)
		return this
	}

}


class Font {
	constructor(font) {

		this._font = font
	}

	get font() {
		return this._font
	}
	get handle() {
		return ui.uiDrawTextFontHandle(this.font)
	}
	get describe() {
		let describe = ui.uiDrawTextFontDescriptor({})
		ui.uiDrawTextFontDescribe(this.font, describe.ref())

		return {
			family: describe.Family,
			size: describe.Size,
			weight: _weights[describe.Weight] || '',
			italic: _italics[describe.Italic] || '',
			stretch: _stretchs[describe.Stretch] || '',
			toString: function() {
				return [this.italic, this.weight, this.size, this.family].filter((item) => {
					return item != ''
				}).join(' ')
			}
		}
	}
	get metrics() {
		let metrics = ui.uiDrawTextFontMetrics({})
		ui.uiDrawTextFontGetMetrics(this.font, metrics.ref())

		return {
			ascent: metrics.Ascent,
			descent: metrics.Descent,
			leading: metrics.Leading,
			underline: {
				pos: metrics.UnderlinePos,
				thickness: metrics.UnderlineThickness,
			},
		}
	}

	layout(text = '', width = -1) {
		return new Layout(text, this.font, width)
	}

	free() {
		ui.uiDrawFreeTextFont(this.font)
		return this
	}

	static load(value = '') {
		let describe = {
			Italic: 0,
			Weight: 4,
			Size: 15,
			Family: '',
			Stretch: 4,
		}

		value.toString().split(' ').map((item) => {
			item = item.toLowerCase()
			if(italics[item]) {
				describe.Italic = italics[item]
			} else if(weights[item]) {
				describe.Weight = weights[item]
			} else if(parseInt(item) >= 0) {
				describe.Size = parseInt(item)
			} else {
				describe.Family = item
			}
		})
		describe = ui.uiDrawTextFontDescriptor(describe)
		let font = ui.uiDrawLoadClosestFont(describe.ref())
		font = new Font(font)

		return font
	}
}

module.exports = Font