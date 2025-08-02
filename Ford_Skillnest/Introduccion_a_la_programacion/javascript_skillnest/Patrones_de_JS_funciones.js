// Esta funcion representa una accion que ocurre cuando se hace clic en un boton
// Suponemos que el boton es parte de una interfaz de control (como un control remoto o una app)

// Al ejecutar esta funcion, cambia el estado de una variable que simula si una tele esta encendida

// Declaramos la funcion con la palabra clave function, seguida del nombre y los parentesis vacios
function clicAlBotonParaEncender() {
    
    // Cambiamos el valor de la variable teleEncendida a true
    // Esto simula que la tele se encendio
    teleEncendida = true;

    // En un programa real, esta variable podria usarse para mostrar una pantalla,
    // reproducir sonido o habilitar otras funciones
}

// ------------------------------------------------------
// NUEVO BLOQUE: Variables y tipos de datos en JavaScript
// ------------------------------------------------------

// Usamos la palabra clave `var` para crear una variable
// Las variables pueden contener distintos tipos de datos: texto, números, etc.

var nombre = "Frida";     // tipo texto (string)
var apellido = "Kahlo";   // tipo texto (string)
var edad = 47;            // tipo número entero (number)
var altura = 1.6;         // tipo número decimal (float)

console.log(nombre);      // Muestra "Frida" en la consola
console.log("Apellido:", apellido);     // Muestra: Apellido: Kahlo
console.log("Edad:", edad);             // Muestra: Edad: 47
console.log("Altura:", altura);         // Muestra: Altura: 1.6
// Este bloque muestra cómo guardar información en la memoria del programa
// para usarla después. Se llaman "variables" porque su valor puede cambiar.
