// ========================================
// BUCLES WHILE EN JAVASCRIPT
// ========================================

// ======================
// Estructura básica de while
// ======================
// while (condición) {
//   // Código que se ejecuta mientras la condición sea verdadera
// }

// ======================
// Ejemplo 1: Contador básico con while
// ======================

var numero = 0; // Valor inicial

while (numero <= 5) {
  console.log(numero); // Imprime el valor actual de numero
  numero++; // Incrementa numero en 1
}

// ======== Diagrama T ========
// Variable  | Valor
//-----------|------
// numero    | 0 → 1 → 2 → 3 → 4 → 5 (se imprime cada uno)


// ======================
// Comparación entre while y for
// ======================
// Ambos bucles sirven para repetir acciones, pero se usan en contextos distintos:
// - for: se usa cuando conocemos cuántas veces se va a repetir el bloque.
// - while: se usa cuando queremos repetir algo mientras se cumpla una condición.


// ======================
// Nota Final: Comparación con Python
// ======================
// En Python, la estructura de los bucles while y for es muy similar:
// - El bucle while en Python también repite mientras se cumpla una condición.
// - El bucle for en Python puede recorrer arreglos directamente (for item in lista),
//   sin necesidad de manejar índices o detenerse con una condición explícita.
//   Esto lo hace más simple para trabajar con colecciones.
// Además, en Python los bucles se cortan automáticamente cuando el rango se agota,
// mientras que en JavaScript debemos cuidar la condición o puede quedar infinito.

// ======================
// Fin del archivo
// ======================
