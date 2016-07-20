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
			draw: (canvas) => {
				let ctx = canvas.getContext('2d')
				
				ctx.fillStyle = '#FD0'
				ctx.fillRect(0, 0, 75, 75)

				ctx.fillStyle = '#6C0'
				ctx.fillRect(75, 0, 75, 75)

				ctx.fillStyle = '#09F'
				ctx.fillRect(0, 75, 75, 75)

				ctx.fillStyle = '#F30'
				ctx.fillRect(75, 75, 75, 75)

				ctx.fillStyle = '#FFF'

				// set transparency value
				ctx.globalAlpha = 0.2

				// Draw semi transparent circles
				for (var i = 0; i < 7; i++) {
					ctx.beginPath()
					ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
					ctx.fill()
				}
			},
		},
	},
})