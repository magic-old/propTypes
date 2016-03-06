'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

/*
 * Color Types
 */
var isHexString = function isHexString(ele) {
  return typeof ele === 'string' && ele[0] === '#';
};

exports.isHexString = isHexString;
var hexStringType = function hexStringType(props, propName, componentName) {
  var prop = props[propName];
  var isHex = isHexString(prop);
  if (!isHex) {
    return new Error('Color is not a hex string: ' + prop);
  }
};

exports.hexStringType = hexStringType;
var colorType = _react.PropTypes.shape({
  r: _react.PropTypes.number,
  b: _react.PropTypes.number,
  g: _react.PropTypes.number,
  a: _react.PropTypes.number
});

exports.colorType = colorType;
var colorNames = {
  r: 'Red',
  g: 'Green',
  b: 'Blue',
  a: 'Alpha'
};

exports.colorNames = colorNames;
var headerType = _react.PropTypes.shape({
  height: _react.PropTypes.number.isRequired
}).isRequired;

exports.headerType = headerType;
var sidebarType = _react.PropTypes.shape({
  width: _react.PropTypes.number.isRequired
}).isRequired;

exports.sidebarType = sidebarType;
var layoutType = _react.PropTypes.shape({
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired,
  header: headerType,
  sidebar: sidebarType
}).isRequired;

exports.layoutType = layoutType;
/*
 * Pixel PropTypes
 */

var pixelType = _react.PropTypes.shape({
  color: colorType.isRequired,
  row: _react.PropTypes.number.isRequired,
  column: _react.PropTypes.number.isRequired,
  id: _react.PropTypes.number.isRequired,
  visible: _react.PropTypes.bool.isRequired
});

exports.pixelType = pixelType;
var pixelsType = _react.PropTypes.arrayOf(pixelType);

exports.pixelsType = pixelsType;
/*
 * ImageView PropTypes
 */

var imageViewType = _react.PropTypes.shape({
  rows: _react.PropTypes.number.isRequired,
  visibleColumns: _react.PropTypes.number.isRequired,
  totalColumns: _react.PropTypes.number.isRequired,
  color: colorType.isRequired
}).isRequired;

exports.imageViewType = imageViewType;
/*
 * TextView PropTypes
 */

var fontType = _react.PropTypes.shape({
  name: _react.PropTypes.string.isRequired
});

exports.fontType = fontType;
var textViewType = _react.PropTypes.shape({
  text: _react.PropTypes.string,
  fontId: _react.PropTypes.number,
  fonts: _react.PropTypes.arrayOf(fontType).isRequired
}).isRequired;

exports.textViewType = textViewType;
/*
 * SettingsView PropTypes
 */

var settingsViewType = _react.PropTypes.shape({
  protocol: _react.PropTypes.string.isRequired,
  host: _react.PropTypes.string.isRequired
}).isRequired;
exports.settingsViewType = settingsViewType;
