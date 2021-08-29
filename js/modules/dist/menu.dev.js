"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function menu(menuItemsSelector, menuSelector, menuActiveClass, burgerSelector, burgerActiveClass) {
  var items = document.querySelectorAll(menuItemsSelector),
      menu = document.querySelector(menuSelector),
      burger = document.querySelector(burgerSelector);
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      menu.classList.remove(menuActiveClass);
      burger.classList.toggle(burgerActiveClass);
    });
  });
}

var _default = menu;
exports["default"] = _default;