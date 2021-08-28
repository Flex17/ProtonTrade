"use strict";

var _nav = _interopRequireDefault(require("./modules/nav"));

var _contacts = _interopRequireDefault(require("./modules/contacts"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _scroll = _interopRequireDefault(require("./modules/scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _nav["default"])(".nav-burger", "burger__active", ".menu", "menu__active");
  (0, _contacts["default"])("contacts-form__messageInput", "contacts-form__messageBlockCounter", 600);
  (0, _forms["default"])('.contacts-form');
  (0, _scroll["default"])();
});