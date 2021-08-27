"use strict";

var _nav = _interopRequireDefault(require("./modules/nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _nav["default"])(".nav-burger", "burger__active", ".menu", "menu__active");
});