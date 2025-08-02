// OPERADORES EN JAVASCRIPT
// En JavaScript utilizamos operaciones matemáticas como:
// suma (+), resta (-), multiplicación (*) y división (/).
// También existen otros operadores útiles como el módulo (%).

// --------------------------------------
// MÓDULO (%)
// --------------------------------------
// Devuelve el residuo o resto de una división.

console.log(21 % 2); // Imprime 1
console.log(10 % 5); // Imprime 0
console.log(13 % 3); // Imprime 1

// --------------------------------------
// ELIMINACIÓN DE DECIMALES
// --------------------------------------
// JavaScript nos ofrece varias funciones para eliminar o redondear decimales.
// Vamos a ver cuatro formas: round, floor, ceil y trunc.

// --------------------------------------
// Math.round()
// --------------------------------------
// Redondea al número entero más cercano.
// Si el decimal es 0.5 o mayor, redondea hacia arriba.

console.log(Math.round(3.5));   // Imprime 4
console.log(Math.round(2.1));   // Imprime 2
console.log(Math.round(-1.9));  // Imprime -2
console.log(Math.round(-1.2));  // Imprime -1

// --------------------------------------
// Math.floor()
// --------------------------------------
// Redondea siempre hacia abajo (al entero menor).

console.log(Math.floor(3.5));   // Imprime 3
console.log(Math.floor(2.1));   // Imprime 2
console.log(Math.floor(-1.9));  // Imprime -2
console.log(Math.floor(-1.2));  // Imprime -2

// --------------------------------------
// Math.ceil()
// --------------------------------------
// Redondea siempre hacia arriba (al entero mayor).

console.log(Math.ceil(3.5));    // Imprime 4
console.log(Math.ceil(2.1));    // Imprime 3
console.log(Math.ceil(-1.9));   // Imprime -1
console.log(Math.ceil(-1.2));   // Imprime -1

// --------------------------------------
// Math.trunc()
// --------------------------------------
// Elimina los decimales sin redondear (solo corta la parte decimal).

console.log(Math.trunc(3.25));  // Imprime 3
console.log(Math.trunc(2.95));  // Imprime 2
console.log(Math.trunc(-1.9));  // Imprime -1
console.log(Math.trunc(-1.2));  // Imprime -1

// --------------------------------------
// FUNCIONES INTEGRADAS
// --------------------------------------
// Estas funciones como Math.floor(), Math.round(), Math.ceil(), Math.trunc()
// vienen ya incorporadas en el lenguaje y se llaman funciones integradas (built-in).
// Se pueden usar sin necesidad de definirlas, y están disponibles para trabajar con números.

// Podemos verlas como herramientas ya listas para ayudarnos en cálculos comunes.

// Por ejemplo:
// - "floor" significa "piso", redondea hacia abajo.
// - "ceil" significa "techo", redondea hacia arriba.
// - "trunc" viene de "truncate", cortar.
// - "round" significa "redondear".

// Estas herramientas son útiles para resolver tareas matemáticas, cálculos, validaciones de edad,
// precios, porcentajes, entre otras muchas aplicaciones prácticas.
