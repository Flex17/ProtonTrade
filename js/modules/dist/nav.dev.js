"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function nav(burgerSelector, burgerActiveClass, menuSelector, menuActiveClass) {
  var burger = document.querySelector(burgerSelector),
      menu = document.querySelector(menuSelector);
  burger.addEventListener('click', function () {
    burger.classList.toggle(burgerActiveClass);
    menu.classList.toggle(menuActiveClass);
  });
}

var _default = nav;
exports["default"] = _default;