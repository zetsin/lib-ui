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
				setInterval(() => {
					this.redraw()
				}, 1000)
			},
			draw: function(canvas) {
				let ctx = canvas.getContext('2d')
				
				ctx.font = 'normal normal 50px Helvetica'

				ctx.fillText('Quo Vaids?', 0, 70)

				ctx.font = 'bold 50px Helvetica'
				ctx.fillText('Quo Vaids?', 0, 140)

				ctx.font = 'italic 50px Helvetica'
				ctx.fillText('Quo Vaids?', 0, 210)

				ctx.font = 'bold italic 50px Helvetica'
				ctx.fillText('Quo Vaids?', 0, 280)
			},
		},
	},
})