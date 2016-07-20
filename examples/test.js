'use strict'

const ui = require('..')

let menu = new ui.Menu
menu.append({
	text: 'xxx'
})

let win = new ui.Window
win.center()
win.margined = true
win.on('closing', (event) => {
	// event.preventDefault()
	ui.App.quit()
})

let vbx = new ui.VBox

let btn = new ui.Button
let ckb = new ui.Checkbox
let etr = new ui.Entry
let pwd = new ui.Entry({
	type: 'password'
})
let sch = new ui.Entry({
	type: 'search'
})
let lbl = new ui.Label
let tab = new ui.Tab
let grp = new ui.Group
let spb = new ui.Spinbox
let sld = new ui.Slider
let pgb = new ui.ProgressBar
pgb.value = 50
let hsp = new ui.HSeparator
let cbb = new ui.Combobox
cbb.append('a')
cbb.append('b')
cbb.select = 0
let ecb = new ui.EditableCombobox
ecb.append('c')
ecb.append('d')
let rdb = new ui.RadioButtons
rdb.append('a')
rdb.append('b')
let dtp = new ui.DateTimePicker
let mle = new ui.MultilineEntry
let grd = new ui.Grid

vbx.append(btn)
vbx.append(ckb)
vbx.append(etr)
vbx.append(pwd)
vbx.append(sch)
vbx.append(lbl)
vbx.append(tab)
vbx.append(grp)
vbx.append(spb)
vbx.append(sld)
vbx.append(pgb)
vbx.append(hsp)
vbx.append(cbb)
vbx.append(ecb)
vbx.append(rdb)
vbx.append(dtp)
vbx.append(mle)
vbx.append(grd)

win.child = vbx
win.show()

// win.message()

setInterval(() => {
	console.log(win.size)
}, 1000)