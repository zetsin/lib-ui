'use strict'

const UI = require('../..')

new UI.Window({
	on: {
		created: function() {
			this.center()
			this.show()
		},
		closing: function() {
			UI.App.quit()
		},
	},
	children: {
		name: 'area',
		on: {
			created: function() {
			},
			draw: function(canvas) {
				let ctx = canvas.getContext('2d')
				ctx.fillStyle = '#f00'
				ctx.rect(0, 0, 100, 50)
				ctx.arc(50, 50, 50, 0, 2 * Math.PI)
				ctx.fill('evenodd')
			},
		},
	},
})