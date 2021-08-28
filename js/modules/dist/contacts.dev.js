"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function contacts(inputSelector, counterSelector, maxLength) {
  var input = document.querySelector(".".concat(inputSelector)),
      counter = document.querySelector(".".concat(counterSelector));
  input.addEventListener('input', function () {
    var length = input.value.length;

    if (length >= maxLength) {
      input.value = input.value.slice(0, 600);
    } else {
      counter.textContent = "\n                ".concat(length, "/").concat(maxLength, "\n            ");
    }
  });
}

var _default = contacts;
exports["default"] = _default;