<?php

//Registro de variables
$contador = 0;

// Obtener informacion de cantidad de lineas en archivo.txt
$filered = fopen("archivo.txt", "r");
while(!feof($filered)) {
  $linea = fgets($filered);
  $contador++;
}
fclose($filered);

// Disminuir la ultima linea
$contador--;

// Imprimir el contador para enviarlo a la solicitud GET
echo $contador;

?>