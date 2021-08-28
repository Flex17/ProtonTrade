import $ from 'jquery';

function scroll() {
    try {
        $(document).ready(function(){
            $('[href^="#"]').on('click', function(event){
                if ($(this).attr('hash') !== "") {
                event.preventDefault();
                let hash = $(this).prop('hash');
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function(){
                });
                }
            });
        });
    } catch {}
}

export default scroll;