'use strict'

const FFI = require('ffi')
const ref = require('ref')

const Context = require('./context')
const Path = require('./path')
const Stroke = require('./stroke')
const Brush = require('./brush')
const Matrix = require('./matrix')
const Gradient = require('./gradient')
const Style = require('./style')
const Font = require('./font')

class Paths {
	constructor() {
		this._paths = []
	}

	record(method, args) {
		this._paths.push({
			method: method,
			args: args
		})
	}
	redo(caller) {
		let paths = this._paths
		this.renew()
		for(let i = paths.length - 1; i >= 0; i--) {
			let p = paths.shift()
			caller[p.method].apply(caller, p.args)
		}
	}
	renew() {
		this._paths = []
	}
}

class Points {
	constructor() {
		this.beginPath()
	}

	set current(point) {
		if(!this.hasCurrent) {
			this._begin = point
		} 
		this._current = point
		this._hasCurrent = true
	}

	get current() {
		return this._current
	}

	get hasCurrent() {
		return this._hasCurrent
	}

	beginPath() {
		this._begin = {}
		this._current = {}
		this._hasCurrent = false
	}

	get begin() {
		return this._begin
	}
}

class States {
	constructor() {
		this._states = []
	}
	save(state = {}) {
		this._states.push(state)
	}
	restore(caller) {
		let state = this._states.pop()

		Object.keys(state).map((item) => {
			caller[item] = state[item]
		})
	}
}

class CanvasRenderingContext2D {
	constructor(canvas) {
		this._ = {
			canvas: canvas,
			context: canvas.getContext(),
			fillStyle: new Style,
			strokeStyle: new Style,
			stroke: new Stroke,
			matrix: new Matrix,
			font: Font.load(),

			paths: new Paths,
			points: new Points,
			states: new States,

		}

		this.beginPath()

	}

	get canvas() {
		return this._.canvas
	}






	get fillStyle() {
		return this._.fillStyle.style
	}
	set fillStyle(value) {
		this._.fillStyle.style = value
	}
	get strokeStyle() {
		return this._.strokeStyle.style
	}
	set strokeStyle(value) {
		this._.strokeStyle.style = value
	}

	get shadowColor() {}
	set shadowColor(value) {}
	
	get shadowBlur() {}
	set shadowBlur(value) {}

	get shadowOffsetX() {}
	set shadowOffsetX(value) {}

	get shadowOffsetY() {}
	set shadowOffsetY(value) {}






	createLinearGradient(x0, y0, x1, y1) {
		let type = 'linear'
		let gradient = new Gradient({type, x0, y0, x1, y1})

		return gradient
	}
	createRadialGradient(x0, y0, r0, x1, y1, r1) {
		let type = 'radial'
		let gradient = new Gradient({type, x0, y0, r0, x1, y1, r1})

		return gradient
	}
	createPattern(image, repeat) {

	}






	get lineCap() {
		return this._.stroke.cap
	}
	set lineCap(value = 'butt') {
		this._.stroke.cap = value == 'butt' ? 'flat' : value
	}

	get lineJoin() {
		return this._.stroke.join
	}
	set lineJoin(value = 'join') {
		this._.stroke.join = value
	}

	get lineWidth() {
		return this._.stroke.thickness
	}
	set lineWidth(value = 1) {
		this._.stroke.thickness = value
	}

	get lineDashOffset() {
		return this._.stroke.dashPhase
	}
	set lineDashOffset(value = 1) {
		this._.stroke.dashPhase = value
	}

	get miterLimit() {
		return this._.stroke.miterLimit
	}
	set miterLimit(value = 10) {
		this._.stroke.miterLimit = value
	}





	rect(x, y, width, height) {
		this._.path.rect(x, y, width, height)
		this._.pathEvenodd.rect(x, y, width, height)
		
		this._.points.current = {x, y}
		this._.paths.record('rect', arguments)

		return this
	}
	fillRect(x, y, width, height) {
		let path = new Path
		path.rect(x, y, width, height)

		this._.context.fill(path, Brush.multiplyAlpha(this._.fillStyle.brush, this.globalAlpha))
		
		return this
	}
	strokeRect(x, y, width, height) {
		let path = new Path
		path.rect(x, y, width, height)
		this._.context.stroke(path, Brush.multiplyAlpha(this._.strokeStyle.brush, this.globalAlpha), this._.stroke)

		return this
	}
	clearRect(x, y, width, height) {
		let path = new Path
		path.rect(x, y, width, height)

		let fillStyle = new Brush({
			r: 1,
			g: 1,
			b: 1,
		})

		this._.context.fill(path, fillStyle)

		return this
	}






	fill(rule) {
		this._.context.fill(rule == 'evenodd' ? this._.pathEvenodd : this._.path, Brush.multiplyAlpha(this._.fillStyle.brush, this.globalAlpha))

		this._.paths.redo(this)

		return this
	}
	stroke() {
		this._.context.stroke(this._.path, Brush.multiplyAlpha(this._.strokeStyle.brush, this.globalAlpha), this._.stroke)

		this._.paths.redo(this)

		return this
	}
	clip() {
		this._.context.clip(this._.path)
		this._.context.clip(this._.pathEvenodd)

		this._.paths.redo(this)

		return this
	}
	beginPath() {
		this._.path = new Path
		this._.pathEvenodd = new Path({
			mode: 1
		})

		this._.points.beginPath()
		this._.paths.renew()
		this._.paths.record('beginPath', arguments)

		return this
	}
	moveTo(x, y) {
		this._.path.figure(x, y)
		this._.pathEvenodd.figure(x, y)

		this._.points.current = {x, y}
		this._.paths.record('moveTo', arguments)

		return this
	}
	lineTo(x, y) {
		if(!this._.points.hasCurrent) {
			this.moveTo(x, y)
		}
		else {
			this._.path.lineTo(x, y)
			this._.pathEvenodd.lineTo(x, y)

			this._.points.current = {x, y}
			this._.paths.record('lineTo', arguments)
		}

		return this
	}
	closePath() {
		this._.path.close()
		this._.pathEvenodd.close()

		this._.points.current = this._.points.begin
		this._.paths.record('closePath', arguments)

		return this
	}
	bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
		this._.path.bezierTo(cp1x, cp1y, cp2x, cp2y, x, y)
		this._.pathEvenodd.bezierTo(cp1x, cp1y, cp2x, cp2y, x, y)

		this._.points.current = {x, y}
		this._.paths.record('bezierCurveTo', arguments)

		return this
	}
	quadraticCurveTo(cpx, cpy, x, y) {

		return this
	}
	arc(x, y, r, sAngle, eAngle, counterclockwise) {
		this._.path.arcTo(x, y, r, sAngle, eAngle - sAngle, counterclockwise)
		this._.pathEvenodd.arcTo(x, y, r, sAngle, eAngle - sAngle, counterclockwise)

		this._.points.current = {
			x: x + r * Math.cos(eAngle),
			y: y - r * Math.sin(eAngle),
		}
		this._.paths.record('arc', arguments)

		return this
	}
	arcTo(x1, y1, x2, y2, r) {
		if(!this._.points.hasCurrent) {
			this.moveTo(x1, y1)
			return
		}
		let x0 = this._.points.current.x
		let y0 = this._.points.current.y
		if((x0 == x1 && y0 == y1) || (x1 == x2 && y1 == y2) || r == 0) {
			this.lineTo(x1, y1)
			return
		}

		let p0 = {
			x: x0,
			y: y0,
		}
		let p1 = {
			x: x1,
			y: y1,
		}
		let p2 = {
			x: x2,
			y: y2,
		}

		let p1p0 = {
			x: p0.x - p1.x,
			y: p0.y - p1.y,
		}
		p1p0.length = Math.sqrt((Math.pow(p1p0.x, 2) + Math.pow(p1p0.y, 2)))
		let p1p2 = {
			x: p2.x - p1.x,
			y: p2.y - p1.y,
		}
		p1p2.length = Math.sqrt((Math.pow(p1p2.x, 2) + Math.pow(p1p2.y, 2)))

		let cos_phi = (p1p0.x * p1p2.x + p1p0.y * p1p2.y) / (p1p0.length * p1p2.length)

		if(cos_phi == -1 || cos_phi == 1) {
			this.lineTo(x1, y1)
			return
		}

		let tangent = r / Math.tan(Math.acos(cos_phi) / 2)

		let t_p1p0 = {
			x: p1.x + tangent * p1p0.x / p1p0.length,
			y: p1.y + tangent * p1p0.y / p1p0.length,
		}

		let orth_p1p0 = {
			x: p1p0.y,
			y: -p1p0.x,
		}
		orth_p1p0.length = Math.sqrt((Math.pow(orth_p1p0.x, 2) + Math.pow(orth_p1p0.y, 2)))

		let cos_alpha = (orth_p1p0.x * p1p2.x + orth_p1p0.y * p1p2.y) / (orth_p1p0.length * p1p2.length)
		if (cos_alpha < 0) {
			orth_p1p0.x = -orth_p1p0.x
			orth_p1p0.y = -orth_p1p0.y
		}

		let p = {
			x: t_p1p0.x + r * orth_p1p0.x / orth_p1p0.length,
			y: t_p1p0.y + r * orth_p1p0.y / orth_p1p0.length,
		}

		orth_p1p0.x = -orth_p1p0.x
		orth_p1p0.y = -orth_p1p0.y

		let sAangle = Math.acos(orth_p1p0.x / orth_p1p0.length)
		if (orth_p1p0.y < 0) {
			sAangle = 2 * Math.PI - sAangle
		}

		let orth_p1p2 = {
			x: p1.x + tangent * p1p2.x / p1p2.length - p.x,
			y: p1.y + tangent * p1p2.y / p1p2.length - p.y,
		}
		orth_p1p2.length = Math.sqrt((Math.pow(orth_p1p2.x, 2) + Math.pow(orth_p1p2.y, 2)))

		let eAngle = Math.acos(orth_p1p2.x / orth_p1p2.length)
		if (orth_p1p2.y < 0) {
			eAngle = 2 * Math.PI - eAngle
		}

		let counterclockwise = false
		if ((sAangle > eAngle) && ((sAangle - eAngle) < Math.PI)) counterclockwise = true
  		if ((sAangle < eAngle) && ((eAngle - sAangle) > Math.PI)) counterclockwise = true

		this.arc(p.x, p.y, r, sAangle, eAngle, counterclockwise)

		return this
	}
	isPointInPath(x, y) {

		return this
	}









	scale(scalewidth, scaleheight) {
		let matrix = new Matrix
		matrix.scale(scalewidth, scaleheight)
		this._.context.transform(matrix)

		this._.matrix.multiply(matrix)

		return this
	}
	rotate(angle) {
		let matrix = new Matrix
		matrix.rotate(angle)
		this._.context.transform(matrix)

		this._.matrix.multiply(matrix)

		return this
	}
	translate(x, y) {
		let matrix = new Matrix
		matrix.translate(x, y)
		this._.context.transform(matrix)

		this._.matrix.multiply(matrix)

		return this
	}
	transform(a, b, c, d, e, f) {
		let matrix = new Matrix(a, b, c, d, e, f)
		this._.context.transform(matrix)

		this._.matrix.multiply(matrix)

		return this
	}
	setTransform(a, b, c, d, e, f) {
		this._.matrix.invert()
		this._.context.transform(this._.matrix)

		this._.matrix = new Matrix(a, b, c, d, e, f)
		this._.context.transform(this._.matrix)

		return this
	}









	get font() {
		return this._.font.describe
	}
	set font(value = '') {
		this._.font = Font.load(value)
	}

	get textAlign() {}
	set textAlign(value) {}

	get textBaseline() {}
	set textBaseline(value) {}

	fillText(text, x, y, maxWidth) {
		let layout = this._.font.layout(text, maxWidth)

		let colors =  this._.fillStyle.colors.sort((a, b) => {
			return a.pos - b.pos
		})

		for(let i = 0; i < colors.length; i++) {
			let start = i > 0 ? ~~((1 + colors[i - 1].pos - colors[i].pos) * text.length) : 0

			layout.setColor(start, text.length, colors[i])
		}

		this._.context.text(x, y, layout)

		return this
	}
	strokeText(text, x, y, maxWidth) {
		let layout = this._.font.layout(text, maxWidth)

		let colors =  this._.strokeStyle.colors.sort((a, b) => {
			return a.pos - b.pos
		})
		
		for(let i = 0; i < colors.length; i++) {
			let start = i > 0 ? ~~((colors[i].pos - colors[i - 1].pos) * text.length) : 0

			layout.setColor(start, text.length, colors[i])
		}

		this._.context.text(x, y, layout)

		return this
	}
	measureText(text) {
		let size = this._.font.layout(text).size

		return {
			width: size.w,
			height: size.h
		}
	}




	get imageSmoothingEnabled() {}
	set imageSmoothingEnabled(value) {}

	drawImage(img, sx, sy, swidth, sheight, x, y, width, height) {

		return this
	}






	createImageData(width, height, imageData) {

		return this
	}
	getImageData(x, y, width, height) {

		return this
	}
	putImageData(imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {

		return this
	}






	get globalAlpha() {
		return this._.globalAlpha >= 0 && this._.globalAlpha <= 1 ? this._.globalAlpha : 1
	}
	set globalAlpha(value = 1) {
		this._.globalAlpha = value
	}
 
	get globalCompositeOperation() {}
	set globalCompositeOperation(value) {}







	save() {
		this._.context.save()

		this._.states.save({
			strokeStyle: this.strokeStyle,
			fillStyle: this.fillStyle,
			lineCap: this.lineCap,
			lineJoin: this.lineJoin,
			lineWidth: this.lineWidth,
			miterLimit: this.miterLimit,
			globalAlpha: this.globalAlpha,
		})
	}
	restore() {
		this._.context.restore()

		this._.states.restore(this)
	}
}


module.exports = CanvasRenderingContext2D