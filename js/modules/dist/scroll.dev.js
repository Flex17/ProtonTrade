"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function scroll() {
  try {
    (0, _jquery["default"])(document).ready(function () {
      (0, _jquery["default"])('[href^="#"]').on('click', function (event) {
        if ((0, _jquery["default"])(this).attr('hash') !== "") {
          event.preventDefault();
          var hash = (0, _jquery["default"])(this).prop('hash');
          (0, _jquery["default"])('html, body').animate({
            scrollTop: (0, _jquery["default"])(hash).offset().top
          }, 1000, function () {});
        }
      });
    });
  } catch (_unused) {}
}

var _default = scroll;
exports["default"] = _default;