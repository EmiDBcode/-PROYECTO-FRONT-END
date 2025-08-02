// ======================================================
// FORMAS CONCISAS DE MODIFICAR VARIABLES EN JAVASCRIPT
// ======================================================

// Disminuir una variable por un valor específico

// Estas dos líneas hacen lo mismo
let contador = 10;
contador = contador - 3;
console.log("contador = ", contador); // 7

contador = 10;
contador -= 3;
console.log("contador = ", contador); // 7



// Aumentar una variable por un valor específico

// Estas dos líneas hacen lo mismo
let puntos = 10;
puntos = puntos + 4;
console.log("puntos = ", puntos); // 14

puntos = 10;
puntos += 4;
console.log("puntos = ", puntos); // 14



// Disminuir una variable en uno (3 métodos equivalentes)

let vida = 5;

vida = vida - 1;
console.log("vida = ", vida); // 4

vida = 5;
vida -= 1;
console.log("vida = ", vida); // 4

vida = 5;
vida--;
console.log("vida = ", vida); // 4



// Aumentar una variable en uno (3 métodos equivalentes)

let score = 7;

score = score + 1;
console.log("score = ", score); // 8

score = 7;
score += 1;
console.log("score = ", score); // 8

score = 7;
score++;
console.log("score = ", score); // 8



// =============================
// Diagrama T de resumen
// =============================
// Variable  |  Operación       | Resultado
//-----------|------------------|-----------
// contador  | -= 3             | 7
// puntos    | += 4             | 14
// vida      | --               | 4
// score     | ++               | 8
