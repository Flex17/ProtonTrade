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

export default formsCheck;