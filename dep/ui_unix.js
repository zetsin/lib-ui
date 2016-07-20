var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uiUnixControl = exports.uiUnixControl = voit
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uiUnixControl = exports.uiUnixControl = Struct({
	c: int32,
	parent: int32_ptr,
	addedBefore: int32,
	SetContainer: voit_ptr,
})

FFI.Library('libui', {
}, exports)