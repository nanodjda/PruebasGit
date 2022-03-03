// Cuando obtenemos que el documento está listo, osea, que ya cargó, cargamos nuestro documento de JavaScript

$(document).ready(function () {

    $('.mostrar-menu').click(function () {

        $('.navegacion-principal').slideToggle(500);

        if ($(this).text() == '△')
            $(this).text("▽");
        else
            $(this).text("△");

    })

});