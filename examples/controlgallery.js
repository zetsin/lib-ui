'use strict'

const UI = require('..')

const globals = {}

new UI.Menu({
	text: 'xx',
	children: [
		{
			text: 'yy',	
			on: {
				clicked: (window, self) => {
					console.log(window)
					console.log(self.checked)
				},
			},
		},
		{
			type: 'quit'
		},
	],
})

new UI.Window({
	title: 'libui Control Gallery',
	menu: true,
	on: {
		created: function() {
			globals.win = this
			this.center()
			this.show()
			// UI.App.main()
		},
		closing: function() {
			UI.App.quit()
		},
	},
	children: {
		name: 'tab',
		children: [
			{
				title: 'Basic Controls',
				name: 'vbox',
				children: [
					{
						name: 'hbox',
						children: [
							{
								name: 'button',
								text: 'Button'
							},
							{
								name: 'checkbox',
								text: 'Checkbox'
							},
						],
					},
					{
						name: 'label',
						text: 'This is a label. Right now, labels can only span one line.',
					},
					{
						name: 'hseparator',
					},
					{
						stretchy: true,
						name: 'group',
						text: 'Entries',
						children: [{
							name: 'form',
							children: [
								{
									label: 'Entry',
									name: 'entry'
								},
								{
									label: 'Password Entry',
									name: 'entry',
									type: 'Password'
								},
								{
									label: 'Search Entry',
									name: 'entry',
									type: 'search'
								},
								{
									label: 'Multiline Entry',
									stretchy: true,
									name: 'multilineentry',
								},
								{
									label: 'Multiline Entry No Wrap',
									stretchy: true,
									name: 'multilineentry',
									wrap: false,
								},
							],
						}],
					},
				],
			},
			{
				title: 'Numbers and Lists',
				name: 'hbox',
				children: [
					{
						stretchy: true,
						name: 'group',
						text: 'Numbers',
						children: [{
							name: 'vbox',
							children: [
								{
									name: 'spinbox',
									on: {
										created: function() {
											globals.spinbox = this
										},
										changed: function() {
											globals.slider.value = this.value
											globals.progressbar.value = this.value
										},
									},
								},
								{
									name: 'slider',
									on: {
										created: function() {
											globals.slider = this
										},
										changed: function() {
											globals.spinbox.value = this.value
											globals.progressbar.value = this.value
										},
									},
								},
								{
									name: 'progressbar',
									on: {
										created: function() {
											globals.progressbar = this
										},
									},
								},
								{
									name: 'progressbar',
									on: {
										created: function() {
											this.value = 100
										},
									},
								},
							],
						}],
					},
					{
						stretchy: true,
						name: 'group',
						text: 'Lists',
						children: [{
							name: 'vbox',
							children: [
								{
									name: 'combobox',
									on: {
										created: function() {
											this.selected = 0
										},
									},
									children: [
										'Combobox Item 1',
										'Combobox Item 2',
										'Combobox Item 3'
									],
								},
								{
									name: 'editablecombobox',
									on: {
										created: function() {
											this.text = 'Editable Item 1'
										},
									},
									children: [
										'Editable Item 1',
										'Editable Item 2',
										'Editable Item 3',
									],
								},
								{
									name: 'radiobuttons',
									on: {
										created: function() {
											this.selected = 0
										},
									},
									children: [
										'Radio Button 1',
										'Radio Button 2',
										'Radio Button 3',
									],
								},
								{
									name: 'vbox',
								}
							],
						}],
					}
				]
			},
			{
				title: 'Data Choosers',
				name: 'hbox',
				children: [
					{
						name: 'vbox',
						children: [
							{
								name: 'datepicker'
							},
							{
								name: 'timepicker'
							},
							{
								name: 'datetimepicker'
							},
						],
					},
					{
						name: 'vseparator',
					},
					{
						stretchy: true,
						name: 'vbox',
						children: [{
							name: 'grid',
							children: [
								{
									name: 'button',
									text: 'Open File',
									on: {
										clicked: function() {
											let filename = globals.win.openfile()
											globals.openFileEntry.text = filename || '(cancelled)'
										},
									},
								},
								{
									name: 'entry',
									hexpand: true,
									left: 1,
									on: {
										created: function() {
											globals.openFileEntry = this
										},
									},
								},
								{
									name: 'button',
									text: 'Save File',
									top: 1,
									on: {
										clicked: function() {
											let filename = globals.win.savefile()
											globals.saveFileEntry.text = filename || '(cancelled)'
										},
									},
								},
								{
									name: 'entry',
									hexpand: true,
									left: 1,
									top: 1,
									on: {
										created: function() {
											globals.saveFileEntry = this
										},
									},
								},
								{
									name: 'grid',
									top: 2,
									xspan: 2,
									halign: 'center',
									valign: 'start',
									children: [
										{
											name: 'button',
											text: 'Message Box',
											on: {
												clicked: function() {
													globals.win.message('This is a normal message box.', 'More detailed information can be shown here.')
												},
											},
										},
										{
											name: 'button',
											text: 'Error Box',
											left: 1,
											on: {
												clicked: function() {
													globals.win.error('This message box describes an error.', 'More detailed information can be shown here.')
												},
											},
										},
									],
								},
							],
						}]
					},
				],
			},
			{
				title: 'Area',
				name: 'vbox',
				children: [{
					name: 'area',
					on: {
						draw: (canvas) => {
							let ctx = canvas.getContext('2d')
							ctx.fillStyle = "#ff0000";
							ctx.moveTo(100, 10);
							ctx.lineTo(40, 180);
							ctx.lineTo(190, 60);
							ctx.lineTo(10,60);
							ctx.lineTo(160,180);
							ctx.closePath();
							ctx.fill('evenodd');
						}
					},
				}],
			},
		],
	},
})

