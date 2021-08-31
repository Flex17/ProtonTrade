"use strict";

var _nav = _interopRequireDefault(require("./modules/nav"));

var _contacts = _interopRequireDefault(require("./modules/contacts"));

var _forms = require("./modules/forms");

var _scroll = _interopRequireDefault(require("./modules/scroll"));

var _menu = _interopRequireDefault(require("./modules/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _nav["default"])(".nav-burger", "burger__active", ".menu", "menu__active");
  (0, _menu["default"])(".menu-list__item", '.menu', 'menu__active', '.nav-burger', 'burger__active');
  (0, _contacts["default"])("contacts-form__messageInput", "contacts-form__messageBlockCounter", 600);
  (0, _forms.formsCheck)('.contacts-form');
  (0, _forms.sendForm)('.contacts', '.contacts-form', '.success', ".success-block__btn");
  (0, _scroll["default"])();
});