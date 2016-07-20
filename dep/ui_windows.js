var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uiWindowsSizing = exports.uiWindowsSizing = voit
var uiWindowsControl = exports.uiWindowsControl = voit
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uiWindowsControl = exports.uiWindowsControl = Struct({
	c: int32,
	parent: int32_ptr,
	enabled: int32,
	visible: int32,
	SyncEnableState: voit_ptr,
	SetParentHWND: voit_ptr,
	MinimumSize: voit_ptr,
	MinimumSizeChanged: voit_ptr,
	LayoutRect: voit_ptr,
	AssignControlIDZOrder: voit_ptr,
	ChildVisibilityChanged: voit_ptr,
})
var uiWindowsSizing = exports.uiWindowsSizing = Struct({
	BaseX: int32,
	BaseY: int32,
	InternalLeading: int32,
})

FFI.Library('libui', {
}, exports)