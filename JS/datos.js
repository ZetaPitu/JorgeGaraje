var origen_datos = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTIl-NnHei5KXkg3vN6Nu5olufroVcH3FtqKOpj_UwZBftjVzB6diHMAv2hXIuolVQnFn3R8E6MlR1q/pub?output=tsv';
var datos_leidos;
var Contenido;


function Leer_Tabla() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos_leidos = this.responseText.split('\r\n',100);
            for (x = 0; x < datos_leidos.length; x++) {
                datos_leidos[x] = datos_leidos[x].split('\t', 20);
                
            }

            //Contenido = datos_leidos;
            Poner_Enlaces();

        }
    };
    xhttp.open("GET",origen_datos, true);
    xhttp.send();



}
var tmrReady = setInterval(isPageFullyLoaded, 100);

 function isPageFullyLoaded() {

            tmrReady = setInterval(isPageFullyLoaded, 100);
       
        
            if (document.readyState == "loaded" || document.readyState == "interactive" || document.readyState == "complete") {
                 
                  clearInterval(tmrReady);            
           
            
        
    }
    
}

$(document).ready(function () {

    Leer_Tabla();
 

});

function Poner_Enlaces() {
    var medio = mobiliar = prensa = expoxin = descarga= fotos=botones1="";

    for (x = 2; x < datos_leidos.length; x++) {
        if (datos_leidos[x - 1][0]==='P-1')
            medio += Rellenar_Producto(x-1,datos_leidos[x - 1]);
        if (datos_leidos[x - 1][0] === 'M-1')
            mobiliar += Rellenar_Producto(x - 1, datos_leidos[x - 1]);
        if (datos_leidos[x - 1][0] === 'P-2')
            prensa += Rellenar_Producto(x - 1, datos_leidos[x - 1]);
        if (datos_leidos[x - 1][0] === 'E-1')
            expoxin += Rellenar_Producto(x - 1, datos_leidos[x - 1]);
        if (datos_leidos[x - 1][0] === 'D-1')
            descarga += Rellenar_Producto(x - 1, datos_leidos[x - 1]);
        if (datos_leidos[x - 1][0] === 'F-1') {
            var result = Rellenar_Inicio(x - 1, datos_leidos[x - 1]);
            fotos += result[0];
            botones1 += result[1];               

        }

    }
    Contenido = datos_leidos;
    $("#Producto").html(medio);
    $("#Mobiliario").html(mobiliar);
    $("#Prensa").html(prensa);
    $("#Exposiciones").html(expoxin);
    $("#Descargas").html(descarga);
    $("#fotoinicio").html(fotos);
    $("#botones").html(botones1);

    $('a.enlace-es').off('click');
    $('a.enlace-en').off('click');
    $('div.mySlides').off('click');
    $('span.rayas').off('click');

    showSlides2('1');
    $('div.mySlides').on('click', function () {       
        cambiafoto('2');
    });
    $('span.rayas').on('click', function () {
        slideIndex = parseInt($(this).attr('id'));
        despacito = true;
        showSlides2(slideIndex);
      
    });
    $('a.enlace-es').on('click', function () {

        Cambiar_Modal($(this));
        $("#button-modal").click();
    });
    $('a.enlace-en').on('click', function () {

        Cambiar_Modal($(this));
        $("#button-modal").click();
    });


    var idioma = getCookie('idioma');
    var color = getCookie('color');
    if (idioma === 'english') {
        $("a.enlace-es").css('display', 'none');
        $("a.enlace-en").css('display', 'block');
    } else {
        $("a.enlace-en").css('display', 'none');
        $("a.enlace-es").css('display', 'block');
    }
    if (color !== 'oscuro') {
        $('.final').removeClass("oscuro");
        $('.final').addClass("claro");
    }
    else {
        $('.final').removeClass("claro");
        $('.final').addClass('oscuro');

    }
    }

function Cambiar_Modal(obj) {
    var titulo = 0;
    var spain = 3;
    var ingles = 4;
    var foto = 6;
    var descripcion;
 
    var orden = parseInt(obj.parent().attr('id'));
    orden;
    //alert(orden);
    var idioma = getCookie('idioma');
    if (idioma === 'english') {
        descripcion = Contenido[orden][ingles];
    }
    else {
        descripcion = Contenido[orden][spain];
    }
    var cad = obj.text().split('2', 1);
    $('#nombrepro').text(cad);
    $('#img-modal').attr('src', datos_leidos[orden][foto]);
    $('#img-modal1').attr('src', datos_leidos[orden][foto + 1]);
    $('#img-modal2').attr('src', datos_leidos[orden][foto + 2]);
    $('#descripcion-modal').text(descripcion);
    if (datos_leidos[orden][10] === 'Si') $(".modal-footer a").css('visibility', 'visible'); else $(".modal-footer a").css('visibility', 'hidden') ;
}

function Rellenar_Producto(valor,datos) {

    if (datos[0] === "P-1" || datos[0] === 'M-1') {
        return '<div id=' + valor + ' class="div-img"  >' +
            '<a class="enlaces enlace-es"><p class="div-img-c">' + datos[1] + '</p><span class="final">' + datos[5] + '</span></a>' +
            '<a class="enlaces enlace-en"><p class="div-img-c">' + datos[2] + '</p><span class="final">' + datos[5] + '</span></a>' +
            '</div>';
    } else {
       
        return '<div class="div-img"><a class="enlaces enlace-pc" target="_blank" href='+ datos[3] +' title=' + '"Ver "' + datos[1]+'>' +
                '<p class="div-img-c">'+datos[1]+'</p><span class="final">'+datos[5]+'</span></a></div>';

    }

}

function Rellenar_Inicio(valor, datos) {
    var resultado =["",""];
  
    for (y = 1; y < datos.length; y++){

        if (datos[y].length > 10) {
            resultado[0] += '<div class="mySlides"><img src="' + datos[y] + '" class="img-inicio"></div>';
            resultado[1] += '<span id="000' + y+'" class="rayas">-</span>';
        }


    }
    return resultado;
  


}

