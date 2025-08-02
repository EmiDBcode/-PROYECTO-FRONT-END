/* 
--- Código original con errores (proporcionado en la consigna) ---
*/

function saluda() {
  return ";¡Hola mundo!";  // <-- Error: el punto y coma dentro del string no tiene sentido
}

var frase = saluda();

console.log();  // <-- Error: falta el argumento que se desea imprimir (frase)


/* 
--- Código corregido (después del proceso de depuración) ---
*/

function saluda() {
  return "¡Hola mundo!";  // Corrección: eliminamos el punto y coma dentro del string
}

var frase = saluda();

console.log(frase);  // Corrección: agregamos el argumento a imprimir


/* 
--- Explicación del proceso de depuración ---
*/

//
// El código contenía dos errores:
// 1. El texto devuelto por `return` tenía un símbolo innecesario (;) al inicio.
// 2. La función `console.log()` no estaba recibiendo ningún argumento, por lo que no mostraba nada.
//
// Pude identificar estos errores fácilmente gracias a mi experiencia previa depurando código en Thonny (Python),
// donde utilicé el depurador visual para analizar valores y errores.
// Aplicando esa lógica, comprendí cómo identificar errores de lógica y ejecución también en JavaScript.
//

/*
    Debug realizado en archivo: debug_ejercicio.js

    El codigo original contenia dos errores:
    1. El texto devuelto tenia un punto y coma innecesario al inicio: return ";Hola mundo!";
    2. La funcion console.log() no recibia argumento, por lo tanto no imprimia nada.

    Correccion:
    - Se elimino el ";" del return.
    - Se paso como argumento la variable 'frase' a console.log(frase);

    Como detecte el error:
    Gracias a mi experiencia con Thonny (Python), donde use varias veces el depurador visual,
    pude aplicar la misma logica en VS Code. Abri el depurador, coloque breakpoints
    y verifique el flujo del programa y los valores en consola.

    En VS Code:
    - Se uso la terminal con "node archivo.js" para ver errores en tiempo real.
    - Tambien se probo el boton "Run and Debug" para pausar el codigo y ver los valores paso a paso.
*/
