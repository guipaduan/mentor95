$( document ).ready(function() {
    $('.tag-cloud input').on('change', function() {
        $('#form-next-btn').removeClass('disabled');
     });

    $('#form-next-btn').on( "click", function() {
        $('.form-step').removeClass( "active" );
        $('.user-infos').addClass( "active" );
    });

    $('#form-prev-btn').on( "click", function() {
        $('.form-step').removeClass( "active" );
        $('.tag-cloud').addClass( "active" );
    });

    //Validação simples
    $("#formRegister").validate();

});