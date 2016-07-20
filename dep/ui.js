var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var c_ui_h_Ea = exports.c_ui_h_Ea = {
	uiDrawBrushTypeSolid: 0,
	uiDrawBrushTypeLinearGradient: 1,
	uiDrawBrushTypeRadialGradient: 2,
	uiDrawBrushTypeImage: 3,
}

var voit = exports.voit = ref.types.void
var uiInitOptions = exports.uiInitOptions = voit
var ulong = exports.ulong = ref.types.ulong
var size_t = exports.size_t = ulong
var uiInitOptions = exports.uiInitOptions = Struct({
	Size: size_t,
})
var string = exports.string = ref.types.CString
var uiInitOptions_ptr = exports.uiInitOptions_ptr = ref.refType(uiInitOptions)
var int32 = exports.int32 = ref.types.int32
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uiControl = exports.uiControl = voit
var uint32 = exports.uint32 = ref.types.uint32
var uint32_t = exports.uint32_t = uint32
var uiControl = exports.uiControl = Struct({
	Signature: uint32_t,
	OSSignature: uint32_t,
	TypeSignature: uint32_t,
	Destroy: voit_ptr,
	Handle: voit_ptr,
	Parent: voit_ptr,
	SetParent: voit_ptr,
	Toplevel: voit_ptr,
	Visible: voit_ptr,
	Show: voit_ptr,
	Hide: voit_ptr,
	Enabled: voit_ptr,
	Enable: voit_ptr,
	Disable: voit_ptr,
})
var uiControl_ptr = exports.uiControl_ptr = ref.refType(uiControl)
var uintptr_t = exports.uintptr_t = ulong
var uiWindow = exports.uiWindow = voit
var uiWindow_ptr = exports.uiWindow_ptr = ref.refType(uiWindow)
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var uiButton = exports.uiButton = voit
var uiButton_ptr = exports.uiButton_ptr = ref.refType(uiButton)
var uiBox = exports.uiBox = voit
var uiBox_ptr = exports.uiBox_ptr = ref.refType(uiBox)
var uiCheckbox = exports.uiCheckbox = voit
var uiCheckbox_ptr = exports.uiCheckbox_ptr = ref.refType(uiCheckbox)
var uiEntry = exports.uiEntry = voit
var uiEntry_ptr = exports.uiEntry_ptr = ref.refType(uiEntry)
var uiLabel = exports.uiLabel = voit
var uiLabel_ptr = exports.uiLabel_ptr = ref.refType(uiLabel)
var uiTab = exports.uiTab = voit
var uiTab_ptr = exports.uiTab_ptr = ref.refType(uiTab)
var uiGroup = exports.uiGroup = voit
var uiGroup_ptr = exports.uiGroup_ptr = ref.refType(uiGroup)
var uiSpinbox = exports.uiSpinbox = voit
var uiSpinbox_ptr = exports.uiSpinbox_ptr = ref.refType(uiSpinbox)
var uiSlider = exports.uiSlider = voit
var uiSlider_ptr = exports.uiSlider_ptr = ref.refType(uiSlider)
var uiProgressBar = exports.uiProgressBar = voit
var uiProgressBar_ptr = exports.uiProgressBar_ptr = ref.refType(uiProgressBar)
var uiSeparator = exports.uiSeparator = voit
var uiSeparator_ptr = exports.uiSeparator_ptr = ref.refType(uiSeparator)
var uiCombobox = exports.uiCombobox = voit
var uiCombobox_ptr = exports.uiCombobox_ptr = ref.refType(uiCombobox)
var uiEditableCombobox = exports.uiEditableCombobox = voit
var uiEditableCombobox_ptr = exports.uiEditableCombobox_ptr = ref.refType(uiEditableCombobox)
var uiRadioButtons = exports.uiRadioButtons = voit
var uiRadioButtons_ptr = exports.uiRadioButtons_ptr = ref.refType(uiRadioButtons)
var uiDateTimePicker = exports.uiDateTimePicker = voit
var uiDateTimePicker_ptr = exports.uiDateTimePicker_ptr = ref.refType(uiDateTimePicker)
var uiMultilineEntry = exports.uiMultilineEntry = voit
var uiMultilineEntry_ptr = exports.uiMultilineEntry_ptr = ref.refType(uiMultilineEntry)
var uiMenuItem = exports.uiMenuItem = voit
var uiMenuItem_ptr = exports.uiMenuItem_ptr = ref.refType(uiMenuItem)
var uiMenu = exports.uiMenu = voit
var uiMenu_ptr = exports.uiMenu_ptr = ref.refType(uiMenu)
var uiArea = exports.uiArea = voit
var uiAreaHandler = exports.uiAreaHandler = voit
var uiAreaDrawParams = exports.uiAreaDrawParams = voit
var uiAreaMouseEvent = exports.uiAreaMouseEvent = voit
var uiAreaKeyEvent = exports.uiAreaKeyEvent = voit
var uiDrawContext = exports.uiDrawContext = voit
var uiAreaHandler = exports.uiAreaHandler = Struct({
	Draw: voit_ptr,
	MouseEvent: voit_ptr,
	MouseCrossed: voit_ptr,
	DragBroken: voit_ptr,
	KeyEvent: voit_ptr,
})
var uiArea_ptr = exports.uiArea_ptr = ref.refType(uiArea)
var double = exports.double = ref.types.double
var uiAreaHandler_ptr = exports.uiAreaHandler_ptr = ref.refType(uiAreaHandler)
var uiDrawContext_ptr = exports.uiDrawContext_ptr = ref.refType(uiDrawContext)
var uiAreaDrawParams = exports.uiAreaDrawParams = Struct({
	Context: uiDrawContext_ptr,
	AreaWidth: double,
	AreaHeight: double,
	ClipX: double,
	ClipY: double,
	ClipWidth: double,
	ClipHeight: double,
})
var uiDrawPath = exports.uiDrawPath = voit
var uiDrawBrush = exports.uiDrawBrush = voit
var uiDrawStrokeParams = exports.uiDrawStrokeParams = voit
var uiDrawMatrix = exports.uiDrawMatrix = voit
var uiDrawBrushGradientStop = exports.uiDrawBrushGradientStop = voit
var uiDrawBrushType = exports.uiDrawBrushType = uint32
var uiDrawLineCap = exports.uiDrawLineCap = uint32
var uiDrawLineJoin = exports.uiDrawLineJoin = uint32
var uiDrawFillMode = exports.uiDrawFillMode = uint32
var uiDrawMatrix = exports.uiDrawMatrix = Struct({
	M11: double,
	M12: double,
	M21: double,
	M22: double,
	M31: double,
	M32: double,
})
var uiDrawBrushGradientStop_ptr = exports.uiDrawBrushGradientStop_ptr = ref.refType(uiDrawBrushGradientStop)
var uiDrawBrush = exports.uiDrawBrush = Struct({
	Type: uiDrawBrushType,
	R: double,
	G: double,
	B: double,
	A: double,
	X0: double,
	Y0: double,
	X1: double,
	Y1: double,
	OuterRadius: double,
	Stops: uiDrawBrushGradientStop_ptr,
	NumStops: size_t,
})
var uiDrawBrushGradientStop = exports.uiDrawBrushGradientStop = Struct({
	Pos: double,
	R: double,
	G: double,
	B: double,
	A: double,
})
var double_ptr = exports.double_ptr = ref.refType(double)
var uiDrawStrokeParams = exports.uiDrawStrokeParams = Struct({
	Cap: uiDrawLineCap,
	Join: uiDrawLineJoin,
	Thickness: double,
	MiterLimit: double,
	Dashes: double_ptr,
	NumDashes: size_t,
	DashPhase: double,
})
var uiDrawPath_ptr = exports.uiDrawPath_ptr = ref.refType(uiDrawPath)
var uiDrawBrush_ptr = exports.uiDrawBrush_ptr = ref.refType(uiDrawBrush)
var uiDrawStrokeParams_ptr = exports.uiDrawStrokeParams_ptr = ref.refType(uiDrawStrokeParams)
var uiDrawMatrix_ptr = exports.uiDrawMatrix_ptr = ref.refType(uiDrawMatrix)
var uiDrawFontFamilies = exports.uiDrawFontFamilies = voit
var uiDrawFontFamilies_ptr = exports.uiDrawFontFamilies_ptr = ref.refType(uiDrawFontFamilies)
var uiDrawTextLayout = exports.uiDrawTextLayout = voit
var uiDrawTextFont = exports.uiDrawTextFont = voit
var uiDrawTextFontDescriptor = exports.uiDrawTextFontDescriptor = voit
var uiDrawTextFontMetrics = exports.uiDrawTextFontMetrics = voit
var uiDrawTextWeight = exports.uiDrawTextWeight = uint32
var uiDrawTextItalic = exports.uiDrawTextItalic = uint32
var uiDrawTextStretch = exports.uiDrawTextStretch = uint32
var uiDrawTextFontDescriptor = exports.uiDrawTextFontDescriptor = Struct({
	Family: string,
	Size: double,
	Weight: uiDrawTextWeight,
	Italic: uiDrawTextItalic,
	Stretch: uiDrawTextStretch,
})
var uiDrawTextFontMetrics = exports.uiDrawTextFontMetrics = Struct({
	Ascent: double,
	Descent: double,
	Leading: double,
	UnderlinePos: double,
	UnderlineThickness: double,
})
var uiDrawTextFont_ptr = exports.uiDrawTextFont_ptr = ref.refType(uiDrawTextFont)
var uiDrawTextFontDescriptor_ptr = exports.uiDrawTextFontDescriptor_ptr = ref.refType(uiDrawTextFontDescriptor)
var uiDrawTextFontMetrics_ptr = exports.uiDrawTextFontMetrics_ptr = ref.refType(uiDrawTextFontMetrics)
var uiDrawTextLayout_ptr = exports.uiDrawTextLayout_ptr = ref.refType(uiDrawTextLayout)
var uiModifiers = exports.uiModifiers = uint32
var ulonglong = exports.ulonglong = ref.types.ulonglong
var uint64_t = exports.uint64_t = ulonglong
var uiAreaMouseEvent = exports.uiAreaMouseEvent = Struct({
	X: double,
	Y: double,
	AreaWidth: double,
	AreaHeight: double,
	Down: int32,
	Up: int32,
	Count: int32,
	Modifiers: uiModifiers,
	Held1To64: uint64_t,
})
var uiExtKey = exports.uiExtKey = uint32
var char = exports.char = ref.types.char
var uiAreaKeyEvent = exports.uiAreaKeyEvent = Struct({
	Key: char,
	ExtKey: uiExtKey,
	Modifier: uiModifiers,
	Modifiers: uiModifiers,
	Up: int32,
})
var uiFontButton = exports.uiFontButton = voit
var uiFontButton_ptr = exports.uiFontButton_ptr = ref.refType(uiFontButton)
var uiColorButton = exports.uiColorButton = voit
var uiColorButton_ptr = exports.uiColorButton_ptr = ref.refType(uiColorButton)
var uiForm = exports.uiForm = voit
var uiForm_ptr = exports.uiForm_ptr = ref.refType(uiForm)
var uiAlign = exports.uiAlign = uint32
var uiAt = exports.uiAt = uint32
var uiGrid = exports.uiGrid = voit
var uiGrid_ptr = exports.uiGrid_ptr = ref.refType(uiGrid)

FFI.Library('libui', {
	uiInit: [ string, [ uiInitOptions_ptr, ] ],
	uiUninit: [ voit, [ ] ],
	uiFreeInitError: [ voit, [ string, ] ],
	uiMain: [ voit, [ ] ],
	uiMainSteps: [ voit, [ ] ],
	uiMainStep: [ int32, [ int32, ] ],
	uiQuit: [ voit, [ ] ],
	uiQueueMain: [ voit, [ voit_ptr, voit_ptr, ] ],
	uiOnShouldQuit: [ voit, [ voit_ptr, voit_ptr, ] ],
	uiFreeText: [ voit, [ string, ] ],
	uiControlDestroy: [ voit, [ uiControl_ptr, ] ],
	uiControlHandle: [ uintptr_t, [ uiControl_ptr, ] ],
	uiControlParent: [ uiControl_ptr, [ uiControl_ptr, ] ],
	uiControlSetParent: [ voit, [ uiControl_ptr, uiControl_ptr, ] ],
	uiControlToplevel: [ int32, [ uiControl_ptr, ] ],
	uiControlVisible: [ int32, [ uiControl_ptr, ] ],
	uiControlShow: [ voit, [ uiControl_ptr, ] ],
	uiControlHide: [ voit, [ uiControl_ptr, ] ],
	uiControlEnabled: [ int32, [ uiControl_ptr, ] ],
	uiControlEnable: [ voit, [ uiControl_ptr, ] ],
	uiControlDisable: [ voit, [ uiControl_ptr, ] ],
	uiAllocControl: [ uiControl_ptr, [ size_t, uint32_t, uint32_t, string, ] ],
	uiFreeControl: [ voit, [ uiControl_ptr, ] ],
	uiControlVerifySetParent: [ voit, [ uiControl_ptr, uiControl_ptr, ] ],
	uiControlEnabledToUser: [ int32, [ uiControl_ptr, ] ],
	uiUserBugCannotSetParentOnToplevel: [ voit, [ string, ] ],
	uiWindowTitle: [ string, [ uiWindow_ptr, ] ],
	uiWindowSetTitle: [ voit, [ uiWindow_ptr, string, ] ],
	uiWindowPosition: [ voit, [ uiWindow_ptr, int32_ptr, int32_ptr, ] ],
	uiWindowSetPosition: [ voit, [ uiWindow_ptr, int32, int32, ] ],
	uiWindowCenter: [ voit, [ uiWindow_ptr, ] ],
	uiWindowOnPositionChanged: [ voit, [ uiWindow_ptr, voit_ptr, voit_ptr, ] ],
	uiWindowContentSize: [ voit, [ uiWindow_ptr, int32_ptr, int32_ptr, ] ],
	uiWindowSetContentSize: [ voit, [ uiWindow_ptr, int32, int32, ] ],
	uiWindowFullscreen: [ int32, [ uiWindow_ptr, ] ],
	uiWindowSetFullscreen: [ voit, [ uiWindow_ptr, int32, ] ],
	uiWindowOnContentSizeChanged: [ voit, [ uiWindow_ptr, voit_ptr, voit_ptr, ] ],
	uiWindowOnClosing: [ voit, [ uiWindow_ptr, voit_ptr, voit_ptr, ] ],
	uiWindowBorderless: [ int32, [ uiWindow_ptr, ] ],
	uiWindowSetBorderless: [ voit, [ uiWindow_ptr, int32, ] ],
	uiWindowSetChild: [ voit, [ uiWindow_ptr, uiControl_ptr, ] ],
	uiWindowMargined: [ int32, [ uiWindow_ptr, ] ],
	uiWindowSetMargined: [ voit, [ uiWindow_ptr, int32, ] ],
	uiNewWindow: [ uiWindow_ptr, [ string, int32, int32, int32, ] ],
	uiButtonText: [ string, [ uiButton_ptr, ] ],
	uiButtonSetText: [ voit, [ uiButton_ptr, string, ] ],
	uiButtonOnClicked: [ voit, [ uiButton_ptr, voit_ptr, voit_ptr, ] ],
	uiNewButton: [ uiButton_ptr, [ string, ] ],
	uiBoxAppend: [ voit, [ uiBox_ptr, uiControl_ptr, int32, ] ],
	uiBoxDelete: [ voit, [ uiBox_ptr, int32, ] ],
	uiBoxPadded: [ int32, [ uiBox_ptr, ] ],
	uiBoxSetPadded: [ voit, [ uiBox_ptr, int32, ] ],
	uiNewHorizontalBox: [ uiBox_ptr, [ ] ],
	uiNewVerticalBox: [ uiBox_ptr, [ ] ],
	uiCheckboxText: [ string, [ uiCheckbox_ptr, ] ],
	uiCheckboxSetText: [ voit, [ uiCheckbox_ptr, string, ] ],
	uiCheckboxOnToggled: [ voit, [ uiCheckbox_ptr, voit_ptr, voit_ptr, ] ],
	uiCheckboxChecked: [ int32, [ uiCheckbox_ptr, ] ],
	uiCheckboxSetChecked: [ voit, [ uiCheckbox_ptr, int32, ] ],
	uiNewCheckbox: [ uiCheckbox_ptr, [ string, ] ],
	uiEntryText: [ string, [ uiEntry_ptr, ] ],
	uiEntrySetText: [ voit, [ uiEntry_ptr, string, ] ],
	uiEntryOnChanged: [ voit, [ uiEntry_ptr, voit_ptr, voit_ptr, ] ],
	uiEntryReadOnly: [ int32, [ uiEntry_ptr, ] ],
	uiEntrySetReadOnly: [ voit, [ uiEntry_ptr, int32, ] ],
	uiNewEntry: [ uiEntry_ptr, [ ] ],
	uiNewPasswordEntry: [ uiEntry_ptr, [ ] ],
	uiNewSearchEntry: [ uiEntry_ptr, [ ] ],
	uiLabelText: [ string, [ uiLabel_ptr, ] ],
	uiLabelSetText: [ voit, [ uiLabel_ptr, string, ] ],
	uiNewLabel: [ uiLabel_ptr, [ string, ] ],
	uiTabAppend: [ voit, [ uiTab_ptr, string, uiControl_ptr, ] ],
	uiTabInsertAt: [ voit, [ uiTab_ptr, string, int32, uiControl_ptr, ] ],
	uiTabDelete: [ voit, [ uiTab_ptr, int32, ] ],
	uiTabNumPages: [ int32, [ uiTab_ptr, ] ],
	uiTabMargined: [ int32, [ uiTab_ptr, int32, ] ],
	uiTabSetMargined: [ voit, [ uiTab_ptr, int32, int32, ] ],
	uiNewTab: [ uiTab_ptr, [ ] ],
	uiGroupTitle: [ string, [ uiGroup_ptr, ] ],
	uiGroupSetTitle: [ voit, [ uiGroup_ptr, string, ] ],
	uiGroupSetChild: [ voit, [ uiGroup_ptr, uiControl_ptr, ] ],
	uiGroupMargined: [ int32, [ uiGroup_ptr, ] ],
	uiGroupSetMargined: [ voit, [ uiGroup_ptr, int32, ] ],
	uiNewGroup: [ uiGroup_ptr, [ string, ] ],
	uiSpinboxValue: [ int32, [ uiSpinbox_ptr, ] ],
	uiSpinboxSetValue: [ voit, [ uiSpinbox_ptr, int32, ] ],
	uiSpinboxOnChanged: [ voit, [ uiSpinbox_ptr, voit_ptr, voit_ptr, ] ],
	uiNewSpinbox: [ uiSpinbox_ptr, [ int32, int32, ] ],
	uiSliderValue: [ int32, [ uiSlider_ptr, ] ],
	uiSliderSetValue: [ voit, [ uiSlider_ptr, int32, ] ],
	uiSliderOnChanged: [ voit, [ uiSlider_ptr, voit_ptr, voit_ptr, ] ],
	uiNewSlider: [ uiSlider_ptr, [ int32, int32, ] ],
	uiProgressBarValue: [ int32, [ uiProgressBar_ptr, ] ],
	uiProgressBarSetValue: [ voit, [ uiProgressBar_ptr, int32, ] ],
	uiNewProgressBar: [ uiProgressBar_ptr, [ ] ],
	uiNewHorizontalSeparator: [ uiSeparator_ptr, [ ] ],
	uiNewVerticalSeparator: [ uiSeparator_ptr, [ ] ],
	uiComboboxAppend: [ voit, [ uiCombobox_ptr, string, ] ],
	uiComboboxSelected: [ int32, [ uiCombobox_ptr, ] ],
	uiComboboxSetSelected: [ voit, [ uiCombobox_ptr, int32, ] ],
	uiComboboxOnSelected: [ voit, [ uiCombobox_ptr, voit_ptr, voit_ptr, ] ],
	uiNewCombobox: [ uiCombobox_ptr, [ ] ],
	uiEditableComboboxAppend: [ voit, [ uiEditableCombobox_ptr, string, ] ],
	uiEditableComboboxText: [ string, [ uiEditableCombobox_ptr, ] ],
	uiEditableComboboxSetText: [ voit, [ uiEditableCombobox_ptr, string, ] ],
	uiEditableComboboxOnChanged: [ voit, [ uiEditableCombobox_ptr, voit_ptr, voit_ptr, ] ],
	uiNewEditableCombobox: [ uiEditableCombobox_ptr, [ ] ],
	uiRadioButtonsAppend: [ voit, [ uiRadioButtons_ptr, string, ] ],
	uiRadioButtonsSelected: [ int32, [ uiRadioButtons_ptr, ] ],
	uiRadioButtonsSetSelected: [ voit, [ uiRadioButtons_ptr, int32, ] ],
	uiRadioButtonsOnSelected: [ voit, [ uiRadioButtons_ptr, voit_ptr, voit_ptr, ] ],
	uiNewRadioButtons: [ uiRadioButtons_ptr, [ ] ],
	uiNewDateTimePicker: [ uiDateTimePicker_ptr, [ ] ],
	uiNewDatePicker: [ uiDateTimePicker_ptr, [ ] ],
	uiNewTimePicker: [ uiDateTimePicker_ptr, [ ] ],
	uiMultilineEntryText: [ string, [ uiMultilineEntry_ptr, ] ],
	uiMultilineEntrySetText: [ voit, [ uiMultilineEntry_ptr, string, ] ],
	uiMultilineEntryAppend: [ voit, [ uiMultilineEntry_ptr, string, ] ],
	uiMultilineEntryOnChanged: [ voit, [ uiMultilineEntry_ptr, voit_ptr, voit_ptr, ] ],
	uiMultilineEntryReadOnly: [ int32, [ uiMultilineEntry_ptr, ] ],
	uiMultilineEntrySetReadOnly: [ voit, [ uiMultilineEntry_ptr, int32, ] ],
	uiNewMultilineEntry: [ uiMultilineEntry_ptr, [ ] ],
	uiNewNonWrappingMultilineEntry: [ uiMultilineEntry_ptr, [ ] ],
	uiMenuItemEnable: [ voit, [ uiMenuItem_ptr, ] ],
	uiMenuItemDisable: [ voit, [ uiMenuItem_ptr, ] ],
	uiMenuItemOnClicked: [ voit, [ uiMenuItem_ptr, voit_ptr, voit_ptr, ] ],
	uiMenuItemChecked: [ int32, [ uiMenuItem_ptr, ] ],
	uiMenuItemSetChecked: [ voit, [ uiMenuItem_ptr, int32, ] ],
	uiMenuAppendItem: [ uiMenuItem_ptr, [ uiMenu_ptr, string, ] ],
	uiMenuAppendCheckItem: [ uiMenuItem_ptr, [ uiMenu_ptr, string, ] ],
	uiMenuAppendQuitItem: [ uiMenuItem_ptr, [ uiMenu_ptr, ] ],
	uiMenuAppendPreferencesItem: [ uiMenuItem_ptr, [ uiMenu_ptr, ] ],
	uiMenuAppendAboutItem: [ uiMenuItem_ptr, [ uiMenu_ptr, ] ],
	uiMenuAppendSeparator: [ voit, [ uiMenu_ptr, ] ],
	uiNewMenu: [ uiMenu_ptr, [ string, ] ],
	uiOpenFile: [ string, [ uiWindow_ptr, ] ],
	uiSaveFile: [ string, [ uiWindow_ptr, ] ],
	uiMsgBox: [ voit, [ uiWindow_ptr, string, string, ] ],
	uiMsgBoxError: [ voit, [ uiWindow_ptr, string, string, ] ],
	uiAreaSetSize: [ voit, [ uiArea_ptr, int32, int32, ] ],
	uiAreaQueueRedrawAll: [ voit, [ uiArea_ptr, ] ],
	uiAreaScrollTo: [ voit, [ uiArea_ptr, double, double, double, double, ] ],
	uiNewArea: [ uiArea_ptr, [ uiAreaHandler_ptr, ] ],
	uiNewScrollingArea: [ uiArea_ptr, [ uiAreaHandler_ptr, int32, int32, ] ],
	uiDrawNewPath: [ uiDrawPath_ptr, [ uiDrawFillMode, ] ],
	uiDrawFreePath: [ voit, [ uiDrawPath_ptr, ] ],
	uiDrawPathNewFigure: [ voit, [ uiDrawPath_ptr, double, double, ] ],
	uiDrawPathNewFigureWithArc: [ voit, [ uiDrawPath_ptr, double, double, double, double, double, int32, ] ],
	uiDrawPathLineTo: [ voit, [ uiDrawPath_ptr, double, double, ] ],
	uiDrawPathArcTo: [ voit, [ uiDrawPath_ptr, double, double, double, double, double, int32, ] ],
	uiDrawPathBezierTo: [ voit, [ uiDrawPath_ptr, double, double, double, double, double, double, ] ],
	uiDrawPathCloseFigure: [ voit, [ uiDrawPath_ptr, ] ],
	uiDrawPathAddRectangle: [ voit, [ uiDrawPath_ptr, double, double, double, double, ] ],
	uiDrawPathEnd: [ voit, [ uiDrawPath_ptr, ] ],
	uiDrawStroke: [ voit, [ uiDrawContext_ptr, uiDrawPath_ptr, uiDrawBrush_ptr, uiDrawStrokeParams_ptr, ] ],
	uiDrawFill: [ voit, [ uiDrawContext_ptr, uiDrawPath_ptr, uiDrawBrush_ptr, ] ],
	uiDrawMatrixSetIdentity: [ voit, [ uiDrawMatrix_ptr, ] ],
	uiDrawMatrixTranslate: [ voit, [ uiDrawMatrix_ptr, double, double, ] ],
	uiDrawMatrixScale: [ voit, [ uiDrawMatrix_ptr, double, double, double, double, ] ],
	uiDrawMatrixRotate: [ voit, [ uiDrawMatrix_ptr, double, double, double, ] ],
	uiDrawMatrixSkew: [ voit, [ uiDrawMatrix_ptr, double, double, double, double, ] ],
	uiDrawMatrixMultiply: [ voit, [ uiDrawMatrix_ptr, uiDrawMatrix_ptr, ] ],
	uiDrawMatrixInvertible: [ int32, [ uiDrawMatrix_ptr, ] ],
	uiDrawMatrixInvert: [ int32, [ uiDrawMatrix_ptr, ] ],
	uiDrawMatrixTransformPoint: [ voit, [ uiDrawMatrix_ptr, double_ptr, double_ptr, ] ],
	uiDrawMatrixTransformSize: [ voit, [ uiDrawMatrix_ptr, double_ptr, double_ptr, ] ],
	uiDrawTransform: [ voit, [ uiDrawContext_ptr, uiDrawMatrix_ptr, ] ],
	uiDrawClip: [ voit, [ uiDrawContext_ptr, uiDrawPath_ptr, ] ],
	uiDrawSave: [ voit, [ uiDrawContext_ptr, ] ],
	uiDrawRestore: [ voit, [ uiDrawContext_ptr, ] ],
	uiDrawListFontFamilies: [ uiDrawFontFamilies_ptr, [ ] ],
	uiDrawFontFamiliesNumFamilies: [ int32, [ uiDrawFontFamilies_ptr, ] ],
	uiDrawFontFamiliesFamily: [ string, [ uiDrawFontFamilies_ptr, int32, ] ],
	uiDrawFreeFontFamilies: [ voit, [ uiDrawFontFamilies_ptr, ] ],
	uiDrawLoadClosestFont: [ uiDrawTextFont_ptr, [ uiDrawTextFontDescriptor_ptr, ] ],
	uiDrawFreeTextFont: [ voit, [ uiDrawTextFont_ptr, ] ],
	uiDrawTextFontHandle: [ uintptr_t, [ uiDrawTextFont_ptr, ] ],
	uiDrawTextFontDescribe: [ voit, [ uiDrawTextFont_ptr, uiDrawTextFontDescriptor_ptr, ] ],
	uiDrawTextFontGetMetrics: [ voit, [ uiDrawTextFont_ptr, uiDrawTextFontMetrics_ptr, ] ],
	uiDrawNewTextLayout: [ uiDrawTextLayout_ptr, [ string, uiDrawTextFont_ptr, double, ] ],
	uiDrawFreeTextLayout: [ voit, [ uiDrawTextLayout_ptr, ] ],
	uiDrawTextLayoutSetWidth: [ voit, [ uiDrawTextLayout_ptr, double, ] ],
	uiDrawTextLayoutExtents: [ voit, [ uiDrawTextLayout_ptr, double_ptr, double_ptr, ] ],
	uiDrawTextLayoutSetColor: [ voit, [ uiDrawTextLayout_ptr, int32, int32, double, double, double, double, ] ],
	uiDrawText: [ voit, [ uiDrawContext_ptr, double, double, uiDrawTextLayout_ptr, ] ],
	uiFontButtonFont: [ uiDrawTextFont_ptr, [ uiFontButton_ptr, ] ],
	uiFontButtonOnChanged: [ voit, [ uiFontButton_ptr, voit_ptr, voit_ptr, ] ],
	uiNewFontButton: [ uiFontButton_ptr, [ ] ],
	uiColorButtonColor: [ voit, [ uiColorButton_ptr, double_ptr, double_ptr, double_ptr, double_ptr, ] ],
	uiColorButtonSetColor: [ voit, [ uiColorButton_ptr, double, double, double, double, ] ],
	uiColorButtonOnChanged: [ voit, [ uiColorButton_ptr, voit_ptr, voit_ptr, ] ],
	uiNewColorButton: [ uiColorButton_ptr, [ ] ],
	uiFormAppend: [ voit, [ uiForm_ptr, string, uiControl_ptr, int32, ] ],
	uiFormDelete: [ voit, [ uiForm_ptr, int32, ] ],
	uiFormPadded: [ int32, [ uiForm_ptr, ] ],
	uiFormSetPadded: [ voit, [ uiForm_ptr, int32, ] ],
	uiNewForm: [ uiForm_ptr, [ ] ],
	uiGridAppend: [ voit, [ uiGrid_ptr, uiControl_ptr, int32, int32, int32, int32, int32, uiAlign, int32, uiAlign, ] ],
	uiGridInsertAt: [ voit, [ uiGrid_ptr, uiControl_ptr, uiControl_ptr, uiAt, int32, int32, int32, uiAlign, int32, uiAlign, ] ],
	uiGridPadded: [ int32, [ uiGrid_ptr, ] ],
	uiGridSetPadded: [ voit, [ uiGrid_ptr, int32, ] ],
	uiNewGrid: [ uiGrid_ptr, [ ] ],
}, exports)