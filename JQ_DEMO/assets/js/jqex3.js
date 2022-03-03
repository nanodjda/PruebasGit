// Cuando obtenemos que el documento está listo, osea, que ya cargó, cargamos nuestro documento de JavaScript

$(document).ready(function () {

    let seccion = $("section.tiles");
    let tile = $("article:first")[0].outerHTML;

    $('.agregar-articulo').click(function () {
        seccion.append(tile);
    })

    $('.borrar-articulo').click(function () {
        console.log($("article").length);
        if ($("article").length > 1) {
            $("article:last").remove();
        }
    })
});

/* $(document).ready(function () {

    let seccion = $("section.tiles");
    let tile = $("article:first").clone();

    $('.agregar-articulo').click(function(){

        let tile = $("article:first").clone();
        seccion.append(tile);

    })

    $('.borrar-articulo').click(function(){
        console.log($("article").length);
        if($("article").length > 1){
            $("article:last").remove();
        }
    })
}); */