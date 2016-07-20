var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uiTableModel = exports.uiTableModel = voit
var uiTableModelHandler = exports.uiTableModelHandler = voit
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var uiTableModelHandler = exports.uiTableModelHandler = Struct({
	NumColumns: voit_ptr,
	uiTableModelColumnType: [object Object],
	NumRows: voit_ptr,
	CellValue: voit_ptr,
	SetCellValue: voit_ptr,
})
var uiTableCellLayout = exports.uiTableCellLayout = voit
var uiTableCellPart = exports.uiTableCellPart = voit
var uiTable = exports.uiTable = voit

FFI.Library('libui', {
}, exports)