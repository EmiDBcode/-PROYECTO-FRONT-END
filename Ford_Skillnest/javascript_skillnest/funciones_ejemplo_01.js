// Una funcion es un bloque de codigo reutilizable
// que se define una vez y se puede ejecutar muchas veces.

// Esta es la estructura basica de una funcion:
function nombreDeFuncion() {
    // Codigo que se ejecuta al llamar a la funcion
}

// Para ejecutar (invocar) una funcion, se escribe su nombre seguido de parentesis:
nombreDeFuncion();

// Ejemplo real de una funcion:
function saluda() {
    console.log("Hola!");
}

saluda(); // Ejecuta la funcion saluda
saluda(); // Se vuelve a ejecutar la misma funcion

// Las funciones pueden incluir muchas instrucciones
// y se ejecutan solo cuando las invocamos (es decir, cuando las llamamos).

// Tambien se pueden usar funciones para tareas especificas como encender un televisor:
function clicAlBotonParaEncender() {
    teleEncendida = true; // Simula que se enciende la tele
}

// Otra funcion vacia, que puede usarse de base para luego escribir su contenido:
function nombreDeFuncion() {
    // Instrucciones que se agregaran mas adelante
}

// Otra vez la funcion saluda, ejecutada dos veces:
function saluda() {
    console.log("Hola!");
}

saluda(); // Muestra "Hola!" en la consola
saluda(); // Muestra "Hola!" de nuevo
