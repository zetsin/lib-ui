'use strict'

let ui = {
	require(name) {
		return require('./dep/' + name)
	},
	class(name) {
		return require('./lib/' + name)
	},
	get App() {
		return require('./lib/App')
	},
	get Window() {
		return require('./lib/Window')
	},
	get Button() {
		return require('./lib/Button')
	},
	get HBox() {
		return require('./lib/HBox')
	},
	get VBox() {
		return require('./lib/VBox')
	},
	get Checkbox() {
		return require('./lib/Checkbox')
	},
	get Entry() {
		return require('./lib/Entry')
	},
	get Label() {
		return require('./lib/Label')
	},
	get Tab() {
		return require('./lib/Tab')
	},
	get Group() {
		return require('./lib/Group')
	},
	get Spinbox() {
		return require('./lib/Spinbox')
	},
	get Slider() {
		return require('./lib/Slider')
	},
	get ProgressBar() {
		return require('./lib/ProgressBar')
	},
	get HSeparator() {
		return require('./lib/HSeparator')
	},
	get VSeparator() {
		return require('./lib/VSeparator')
	},
	get Combobox() {
		return require('./lib/Combobox')
	},
	get EditableCombobox() {
		return require('./lib/EditableCombobox')
	},
	get RadioButtons() {
		return require('./lib/RadioButtons')
	},
	get DateTimePicker() {
		return require('./lib/DateTimePicker')
	},
	get DatePicker() {
		return require('./lib/DatePicker')
	},
	get TimePicker() {
		return require('./lib/TimePicker')
	},
	get MultilineEntry() {
		return require('./lib/MultilineEntry')
	},
	get Menu() {
		return require('./lib/Menu')
	},
	get Form() {
		return require('./lib/Form')
	},
	get Grid() {
		return require('./lib/Grid')
	},
	get Area() {
		return require('./lib/Area')
	},
}

module.exports = ui