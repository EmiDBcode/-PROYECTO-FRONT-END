
// Ejemplo 1
var num1 = 20;
var num2 = 5;

// Diagrama de T (inicial)
// num1 | 20
// num2 |  5

if (num1 < num2) {
  num2 = num2 * num1;
  // num2 = 5 * 20 → 100
  // Diagrama de T
  // num1 | 20
  // num2 | 100
} else {
    num1 = num1 / num2;
  // num1 = 20 / 5 → 4

  // Diagrama de T
  // num1 | 4
  // num2 | 5

    if (num1 < num2) {
    num1 = num1 * 2;
    // num1 = 4 * 2 → 8

    // Diagrama de T
    // num1 | 8
    // num2 | 5

    } else if (num1 == num2) {
    num2 = num1 * num2;
    // (no se ejecuta)
    } else {
    num2 = num2 * 2;
    // num2 = 5 * 2 → 10

    // Diagrama de T
    // num1 | 8
    // num2 | 10
    }
}

console.log(num1); // 8
console.log(num2); // 10

//----------------------------
//----------------------------

// Ejemplo 2
var x = 50;
var y = 10;

// Diagrama de T (inicial)
// x | 50
// y | 10

if (x < y) {
  y = x * y;
  // (no se ejecuta)
} else {
  x = x / y;
  // x = 50 / 10 → 5

  // Diagrama de T
  // x | 5
  // y | 10

    if (x < y) {
    x = x * 4;
    // x = 5 * 4 → 20

    // Diagrama de T
    // x | 20
    // y | 10

    } else if (x == y) {
    y = x * y;
    // (no se ejecuta)
    } else {
    y = y * 4;
    // (no se ejecuta)
    }
}

console.log(x); // 20
console.log(y); // 10

