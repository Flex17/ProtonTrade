import $ from 'jquery';
import 'jquery-validation';

function formsCheck(formSelector) {
    try{
        $(formSelector).validate({
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                message: "required",
            }, 
        });
    } catch{}
}

function sendForm(formBlockSelector, formSelector, successWindowSelector, successWindowBtnSelector) {
    $(formSelector).submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');

            const emailInput = document.querySelector('.contacts-form__emailInput');

            if (emailInput.classList.contains('valid')) {
                console.log(1);
                successForm(formBlockSelector, successWindowSelector, successWindowBtnSelector);
            } 
        });
        return false;
    });

    function successForm(formBlockSelector, successWindowSelector, successWindowBtnSelector) {
        const form = document.querySelector(formBlockSelector),
              successWindow = document.querySelector(successWindowSelector),
              successBtn = document.querySelector(successWindowBtnSelector);

        $(form).fadeOut();

        $(successWindow).fadeIn('slow');
        successWindow.classList.remove('hide');

        successBtn.addEventListener('click', () => {
            $(successWindow).fadeOut();
        });
    }
}



export {formsCheck};
export {sendForm};