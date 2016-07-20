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
				
				ctx.font = 'normal 16px Impact'

				ctx.textBaseline = 'top'

				ctx.fillStyle = '#000'
				ctx.fillText('English: Some text in Impact.', 10, 10)
				ctx.fillText('Japanese: 図書館の中では、静かにする。', 10, 30)
				ctx.fillText('Arabic: اللغة العربية هي أكثر اللغات تحدثا ضمن', 10, 50)
				ctx.fillText('Korean: 모타는사라미 못하는 사람이', 10, 70)
			},
		},
	},
})