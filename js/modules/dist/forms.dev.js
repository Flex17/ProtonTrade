"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

require("jquery-validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function formsCheck(formSelector) {
  try {
    (0, _jquery["default"])(formSelector).validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true
        },
        message: "required"
      }
    });
  } catch (_unused) {}
}

var _default = formsCheck;
exports["default"] = _default;