


$(document).ready(function () {
    $('html, body').css({
    'overflow-x': 'hidden',
    'height': 'auto'
     });
 
  
    inicio();
   
    Tamano_Web();

 
    $('#spain').click(function () {
        //alert('España');
        setCookie('idioma', 'spain');
        $('#inicio').css('display', 'none');
        $('#original').css('display', 'block');
        spain();
    });
    $('#english').click(function () {
        //alert('Ingles');
        setCookie('idioma', 'english');
        $('#inicio').css('display', 'none');
        $('#original').css('display', 'block');
        $('#original').css('display', 'block');
        ingles();
    });
    $('#titulo').click(function () {
        //alert('Ingles');
        setCookie('idioma','', -1);
        $('body').removeClass("oscuro");
        $('body').addClass("claro");
        $('.final').removeClass("oscuro");
        $('.final').addClass("claro");
        setCookie('color', 'claro', -1);
        setCookie('idioma', 'spain', -1);       
        $('#inicio').css('display', 'block');
        $('#original').css('display', 'none');
        PonerLogosNegros();
    });
    $('#cambiacolor').click(function () {
        
        CambiaColor();       

    });
    $('a.enlace-es').click(function () {

        Cambiar_Modal($(this));
        $("#button-modal").click();
    });
    $('a.enlace-en').click(function () {

        Cambiar_Modal($(this));
        $("#button-modal").click();
    });
    

});

function Tamano_Web() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByClassName('peso-porta')[0].innerText = this.responseText ;
            document.getElementsByClassName('peso-porta')[1].innerText = this.responseText ;

        }
    };
    xhttp.open("GET", "../php/tamano.php", true);
    xhttp.send();




}



function Ano_copy() {

    var fecha = new Date();
    var ano = fecha.getFullYear();
    $('.ano-copy').text(ano);


}
function ingles(){

    $('#titulo-2').css('display', 'none');
    $('#titulo-4').css('display', 'block');
    $('#titulo-3').css('display', 'none');
    $('#titulo-5').css('display', 'block');
    $("a.enlace-es").css('display', 'none');
    $("a.enlace-en").css('display', 'block');
    $("span.enlace-es").css('display', 'none');
    $("span.enlace-en").css('display', 'block');
    $("div.enlace-es").css('display', 'none');
    $("div.enlace-en").css('display', 'block');
    CambiarBarraCode();


   //  doGTranslate('en|en');

}
function spain() {

    $('#titulo-4').css('display', 'none');
    $('#titulo-2').css('display', 'block');
    $('#titulo-5').css('display', 'none');
    $('#titulo-3').css('display', 'block');
    $("a.enlace-en").css('display', 'none');
    $("a.enlace-es").css('display', 'block');
    $("span.enlace-en").css('display', 'none');
    $("span.enlace-es").css('display', 'block');
    $("div.enlace-en").css('display', 'none');
    $("div.enlace-es").css('display', 'block');
    CambiarBarraCode();
 //   doGTranslate('es|es');
}






function inicio() {
    Ano_copy();
    var idioma = getCookie('idioma');
    var color = getCookie('color');

    if (idioma === "") {
        $('#inicio').css('display', 'block');
        $('body').removeClass("oscuro");
        $('body').addClass("claro");
        $('.final').removeClass("oscuro");
        $('.final').addClass("claro");
        //alert('primera');
        setCookie('color', 'claro');
        setCookie('idioma', 'spain');
        idioma = getCookie('idioma');
        color = getCookie('color');
 
    }
    else {
        
        $('#original').css('display', 'block');
        $('body').removeClass("claro");
        $('body').removeClass("oscuro");
        $('.final').removeClass("oscuro");
        $('.final').removeClass("claro");
        $('body').addClass(color);
        $('.final').addClass(color);
    }
    if (color === 'claro') PonerLogosNegros(); else PonerLogosBlancos();
    if (idioma === 'english') ingles(); else spain();
    //$('#cambiacolor').click();
    CambiaColor();
    CambiaColor();

}
function CambiaColor() {
    var color = getCookie('color');
   // alert(color);
    if (color==='' || color==='claro') {
        $('body').removeClass("claro");
        $('body').addClass("oscuro");
        $('.final').removeClass("claro");
        $('.final').addClass("oscuro");
        
        setCookie('color', 'oscuro');
        PonerLogosBlancos();
    }
    else {
        $('body').removeClass("oscuro");
        $('body').addClass("claro");
        setCookie('color', 'claro');
        $('.final').removeClass("oscuro");
        $('.final').addClass("claro");
        setCookie('color', 'claro');
        PonerLogosNegros();
    }
}
function PonerLogosBlancos() {
    
   // alert("Blanco");
    $('#modal-title').attr('src', logonegroJG);
    $('#modal-content').attr('style', 'background-color:#222');
    $('#titulo').attr("src", logonegroJG);
    $('#cambiacolor').attr("src", logocolorb);
    $('#mail').attr("src", logowebblanco);
    $('#instagran').attr("src", logoIGblanco);
    $('#linkedin').attr("src", logolinkblanco);
    var idi = getCookie('idioma');
    if (idi === 'english') {
        $('#codigobarras').attr("src", barcoblancoin);
    }
    else {
        $('#codigobarras').attr("src", barcoblanco);
    }
}
function PonerLogosNegros() {
   // alert('negros');
    $('#modal-title').attr('src', logoblancoJG);
    $('#modal-content').attr('style','background-color:#eee');
    $('#titulo').attr("src", logoblancoJG);
    $('#cambiacolor').attr("src", logocolorn);
    $('#mail').attr("src", logowebnegro);
    $('#instagran').attr("src",logoIGnegro);
    $('#linkedin').attr("src", logolinknegro);
    var idi = getCookie('idioma');
    if (idi === 'english') {
        $('#codigobarras').attr("src", barconegroin);
    }
    else {
        $('#codigobarras').attr("src", barconegro);
    }
}
function CambiarBarraCode() {
    var idi = getCookie('idioma');
    

        if (idi === 'english') {
            $('#codigobarras').attr("src", barconegroin);
        }
        else {
            $('#codigobarras').attr("src", barconegro);
        }

    

}

var anterior = "inicio";
function muestra_oculta(id) {
   
    if ((anterior === 'Proyectos') &&  (id==='Producto' || id==='Mobiliario')) {
        
    }
    else {
        if (document.getElementById) { //se obtiene el id

            var el = document.getElementById(anterior); //se define la variable "el" igual a nuestro div
            el.style.display = 'none'//damos un atributo display:none que oculta el div
        }
        }

    if (anterior !== id) {

        if (document.getElementById) { //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = 'block' //damos un atributo display:none que oculta el div
        }
        anterior = id;
    }
    else {

        if (document.getElementById) { //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = 'none' //damos un atributo display:none que oculta el div
        }
        anterior = 'inicio';
    }
   
    }




    function getname()
    {/*
        var myObject, name;
        myObject = new ActiveXObject("Scripting.FileSystemObject");
        name = myObject.GetFileName("C:\Users\Francisco\Desktop\Web JorgeGarage\Web\HTML\hola.html");
        alert("The file name is:" + name);*/
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var a = fso.getname("C:\Users\Francisco\Desktop\Web JorgeGarage\Web\HTML\hola.html", true);
        /*a.WriteLine("This is a test.");
        a.Close();*/
        alert("The file name is:" + a);
  }


function setCookie(cname, cvalue, exdays=3000) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


//SLIDES DE IMAGENES

var slideIndex = 1;
var despacito = false;
var fotoret = setInterval(showS, 2000);
var deprisa = false;
var rapido = false;
function showS() {
    if ($("#inicio").css('display') === 'none') return;
    if (despacito) {
        clearInterval(fotoret);
        fotoret = setInterval(showS, 15000);
        despacito = false;
        rapido = true;
        showSlides2(slideIndex);
        slideIndex++;
        return;
    }
    if (rapido) {
        clearInterval(fotoret);
        fotoret = setInterval(showS, 2000);
        despacito = false;
        rapido = false;
    }


    showSlides2(slideIndex);
    slideIndex++;

}




function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
    try {
          slides[slideIndex-1].style.display = "block"; 
    }
    catch (err) {
          
    }
 //  slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " active";
}
function cambiafoto(sun) {
    if (sun === '2') {
        slideIndex++;
        showSlides2(slideIndex);
        despacito = true;
    }
    else {

         showSlides2(slideIndex);
    }
  //  fotoret = setInterval(showS, 5000);
   // alert(slideIndex);
}