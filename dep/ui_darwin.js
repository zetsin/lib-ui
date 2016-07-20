var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uiDarwinControl = exports.uiDarwinControl = voit
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uiDarwinControl = exports.uiDarwinControl = Struct({
	c: int32,
	parent: int32_ptr,
	enabled: int32,
	visible: int32,
	SyncEnableState: voit_ptr,
	SetSuperview: voit_ptr,
	BOOL: [object Object],
	ChildEdgeHuggingChanged: voit_ptr,
	NSLayoutPriority: [object Object],
	SetHuggingPriority: voit_ptr,
	ChildVisibilityChanged: voit_ptr,
})

FFI.Library('libui', {
}, exports)