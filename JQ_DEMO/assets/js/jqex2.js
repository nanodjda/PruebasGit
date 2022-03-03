// Cuando obtenemos que el documento está listo, osea, que ya cargó, cargamos nuestro documento de JavaScript

$(document).ready(function () {

    // Podemos declarar variables y almacenar objetos de html en ellos, esto mediante la búsqueda de dichos
    // Usamos $ para dar a entender que usaremos JQuery
    // Podemos buscar selectores, clases o IDs, así como la combinación de estos

    // # -> IDs
    // . -> Clases
    // Selectores no se necesita ningún prefijo tales como h1, p, header

    // En este caso, buscamos los elementos de tipo h1
    // y lo almacenamos en la variable seccion
    let seccion = $('h1');

    // Le indicamos a la sección, el remover y agregar las clases, cuando no indicamos un parámetro en el removeClass, este borrará todas las clases que estén relacionados al objeto,
    // en el caso de removeClass llevar un parámetro, este buscará dicha clase y la borrará del objeto en cuestión
    // en cuanto al agregar la clase, necesitaremos si o si una cadena como parámetro

    $('.cambiar-rojo').click(function () {

        seccion.removeClass();
        seccion.addClass("rojo");

    })

    $('.cambiar-azul').click(function () {

        seccion.removeClass();
        seccion.addClass("azul");

    })

    $('.cambiar-verde').click(function () {

        seccion.removeClass();
        seccion.addClass("verde");

    })

});