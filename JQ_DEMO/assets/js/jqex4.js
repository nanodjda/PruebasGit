// Cuando obtenemos que el documento está listo, osea, que ya cargó, cargamos nuestro documento de JavaScript

$(document).ready(function () {

    // Podemos declarar variables y almacenar objetos de html en ellos, esto mediante la búsqueda de dichos
    // Usamos $ para dar a entender que usaremos JQuery
    // Podemos buscar selectores, clases o IDs, así como la combinación de estos

    // # -> IDs
    // . -> Clases
    // Selectores no se necesita ningún prefijo

    // En este caso, buscamos la sección "section" que tenga la clase "tiles"
    // section.tiles y lo almacenamos en la variable seccion
    let seccion = $('section.tiles');

    // Le indicamos a la sección, el implementar Toggle, esta funcion nos permite ocultar o mostrar (hide or show) dependiendo del valor en el que se encuentre
    // hide -> show
    // o
    // show -> hide

    // Y podemos indicar la velocidad en ms de ocultarse o mostrarse
    seccion.toggle();


    // Tomamos la clase .mostrar-seccion del html e indicamos que realizaremos una funcion anónima (funcion sin nombre) en el momento de que se de el evento "click" al elemento que contenga
    // dicha clase

    $('.mostrar-seccion').click(function () {

        // Usamos .html para modificar el contenido que se encuentre entre dichos tags 
        if ($('button').html() == "Ocultar seccion") {
            $('button').html("Mostrar seccion");
        } else {
            $('button').html("Ocultar seccion");
        }

        $('section.tiles').toggle(500);

    })

});