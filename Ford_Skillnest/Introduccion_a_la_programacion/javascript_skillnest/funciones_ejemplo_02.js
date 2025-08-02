// Ejemplos sobre el uso de condicionales en JavaScript

// Estructura general de if / else if / else
/*
if (condicional) {
    // Codigo que se ejecuta si la condicion se cumple
} else if (segundaCondicion) {
    // Codigo que se ejecuta si la segunda condicion se cumple
} else {
    // Codigo que se ejecuta si ninguna condicion anterior se cumple
}
*/

// Ejemplo 1: if / else simple
var edad = 17;

if (edad > 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// Resultado esperado:
// Como edad es 17 (no es mayor a 18), se ejecuta el bloque del else
// → Se imprime "Menor de edad"

// Ejemplo 2: if / else if / else encadenado
var edad = 17;

if (edad < 5) {
    console.log("Es un bebe");
} else if (edad < 11) {
    console.log("Es un nino");
} else if (edad < 18) {
    console.log("Es un adolescente");
} else if (edad < 59) {
    console.log("Es un adulto");
} else {
    console.log("Es una persona mayor");
}

// Resultado esperado:
// Como edad es 17, se cumple la condicion edad < 18
// → Se imprime "Es un adolescente"
// No se evaluan las condiciones siguientes porque ya se cumplio una

