// -------------------------------------------------------------
// Este archivo explora el uso de variables con "var" y los tipos de datos en JavaScript
// -------------------------------------------------------------

// NUMERO:
// Los números pueden ser enteros o decimales (floats)
var primerNumero = 50;
var segundoNumero = 27;
console.log(primerNumero + segundoNumero); // 77

// CADENA:
// Una cadena es texto encerrado entre comillas
var cadena = "¡Hola soy Frida y tengo 47 años!";
console.log(cadena); // ¡Hola soy Frida y tengo 47 años!

// Diferencia entre cadena numérica y número:
var edadCadena = "47"; // Esto es un texto
var edadNumero = 47;   // Esto es un número
// No se pueden hacer sumas con edadCadena como si fuera número

// UNDEFINED:
// Cuando una variable es declarada pero no se le asigna valor
var nuevaVariable;
console.log(nuevaVariable); // undefined

// NULL:
// Es un valor intencionalmente vacío
var sinValor = null;
console.log(sinValor); // null

// BOOLEANO:
// Solo puede ser true o false
var estaEncendido = true;
var estaApagado = false;
console.log(estaEncendido); // true