<?php
//echo "100 Mb";
$GLOBALS['tamano']=0;
listar_directorios_ruta();

function listar_directorios_ruta($ruta="../"){
    // abrir un directorio y listarlo recursivo

    if (is_dir($ruta)) {
        if ($dh = opendir($ruta)) {
            while (($file = readdir($dh)) !== false) {
                //esta línea la utilizaríamos si queremos listar todo lo que hay en el directorio
                //mostraría tanto archivos como directorios
                if (!is_dir($ruta . $file) && $file!="." && $file!=".."){
                    //solmente si es un archivo valido mira su tamaño y se lo suma a GLOBAL
                    //aqui se podria tambien espacificar solo archivos de imagen por ejemplo los archivos .png , .jpg , .gif
                    $GLOBALS['tamano']=$GLOBALS['tamano'] + filesize($ruta.$file);

                }
                if (is_dir($ruta . $file) && $file!="." && $file!=".."){
                    //solo si el archivo es un directorio, distinto que "." y ".."
                    //
                    listar_directorios_ruta($ruta . $file . "/");
                }
            }
            closedir($dh);
        }
    }else
        echo "<br>No es ruta valida";

}
$megas =$GLOBALS['tamano']/1048576;
$gigas =$GLOBALS['tamano']/1073741824;
echo     number_format (  $megas , 2 , $dec_point = "," , $thousands_sep = "." )  . "Mb / ";
echo     number_format (  $gigas , 2 , $dec_point = "," , $thousands_sep = "." )  . "Gb";

?>



