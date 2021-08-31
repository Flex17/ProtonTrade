"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formsCheck = formsCheck;
exports.sendForm = sendForm;

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

function sendForm(formBlockSelector, formSelector, successWindowSelector, successWindowBtnSelector) {
  (0, _jquery["default"])(formSelector).submit(function (e) {
    e.preventDefault();

    _jquery["default"].ajax({
      type: "POST",
      url: "/mailer/smart.php",
      data: (0, _jquery["default"])(this).serialize()
    }).done(function () {
      (0, _jquery["default"])(this).find('input').val('');
      var emailInput = document.querySelector('.contacts-form__emailInput');

      if (emailInput.classList.contains('valid')) {
        console.log(1);
        successForm(formBlockSelector, successWindowSelector, successWindowBtnSelector);
      }
    });

    return false;
  });

  function successForm(formBlockSelector, successWindowSelector, successWindowBtnSelector) {
    var form = document.querySelector(formBlockSelector),
        successWindow = document.querySelector(successWindowSelector),
        successBtn = document.querySelector(successWindowBtnSelector);
    (0, _jquery["default"])(form).fadeOut();
    (0, _jquery["default"])(successWindow).fadeIn('slow');
    successWindow.classList.remove('hide');
    successBtn.addEventListener('click', function () {
      (0, _jquery["default"])(successWindow).fadeOut();
    });
  }
}