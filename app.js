$(document).ready(function() {
    $(document).on("click", "#finish", function() {
        $('h2').hide();
        $('.container').hide();
        $('.prompt').show();
        $('.prompt').addClass('animated shake');


    })

});