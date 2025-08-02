// ========================
// Ejemplo 1: funcion basica con return
// ========================

function obtenerEdad() {
    var edad = 20;
    return edad;
}

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// edad       | 20
// return     | 20

// ========================
// Ejemplo 2: funcion con parametros y return
// ========================

function calculaAreaRectangulo(largo, ancho) {
    var area = largo * ancho;
    return area;
}

console.log(calculaAreaRectangulo(10, 20));

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// largo      | 10
// ancho      | 20
// area       | 200
// return     | 200

// ========================
// Bloque 1
// ========================

function saluda() {
    console.log("¡Hola!");
}

saluda();
console.log("¿Como estas?");

// ======== Diagrama T ========
// Variable   | Valor
//------------|------------------------
// saluda()   | ejecuta console.log("¡Hola!")
// consola    | imprime "¡Hola!" y luego "¿Como estas?"

// ========================
// Bloque 2
// ========================

function saluda() {
    console.log("¡Hola!");
    return 50;
}

var resultado = saluda();
console.log("El resultado es:" + resultado);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// resultado  | 50

// ========================
// Bloque 3
// ========================

function suma(numero) {
    console.log("El numero es:" + numero);
    return numero + 20;
}

var resultado = suma(5);
console.log("El resultado es:" + resultado);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// numero     | 5
// resultado  | 25

// ========================
// Bloque 4
// ========================

var numero = 10;
console.log(numero);

function imprimeYRegresa(numero2) {
    console.log(numero2);
    return numero2;
}

var resultado = imprimeYRegresa(7);
console.log(resultado);
console.log(numero);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// numero     | 10
// numero2    | 7
// resultado  | 7

// ========================
// Bloque 5
// ========================

var numero = 10;
console.log(numero);

function alCuadrado(numero2) {
    console.log(numero2);
    return numero2 * numero2;
}

var resultado = alCuadrado(7);
console.log(resultado);
console.log(numero);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// numero     | 10
// numero2    | 7
// resultado  | 49

// ========================
// Bloque 6
// ========================

function alCuadrado(numero) {
    console.log("El numero es:" + numero);
    var cuadrado = numero * numero;
    return cuadrado;
}

var resultado = alCuadrado(2) + alCuadrado(5);
console.log("El resultado es:" + resultado);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// cuadrado1  | 4
// cuadrado2  | 25
// resultado  | 29

// ========================
// Bloque 7
// ========================

function sumatoria(numero1, numero2) {
    return numero1 + numero2;
}

console.log(sumatoria(4, 3));
console.log(sumatoria(2, 9));

// ======== Diagrama T ========
// Variable   | Valor
//--------------------|--------
// sumatoria(4,3)     | 7
// sumatoria(2,9)     | 11

// ========================
// Bloque 8
// ========================

function imprimirSumatoria(numero1, numero2) {
    console.log(numero1);
    return numero1 + numero2;
}

console.log(imprimirSumatoria(4, 3));
console.log(imprimirSumatoria(2, 9));

// ======== Diagrama T ========
// Variable   | Valor
//--------------------|--------
// numero1    | 4 -> 2
// resultado1 | 7
// resultado2 | 11

// ========================
// Bloque 9
// ========================

function sumatoria(numero1, numero2) {
    var suma = numero1 + numero2;
    console.log("La suma es:" + suma);
    return suma;
}

var resultado = sumatoria(4, 3) + sumatoria(2, 9);
console.log("El resultado es:" + resultado);

// ======== Diagrama T ========
// Variable   | Valor
//------------|--------
// suma1      | 7
// suma2      | 11
// resultado  | 18

// ========================
// Bloque 10
// ========================

function sumatoria(numero1, numero2) {
    var suma = numero1 + numero2;
    console.log("La suma es:" + suma);
    return suma;
}

var resultado = sumatoria(1,2) + sumatoria(3,sumatoria(4,1)) + sumatoria(sumatoria(2,3), sumatoria(4,1));
console.log("El resultado es:" + resultado);

// ======== Diagrama T ========
// Variable          | Valor
//------------------|--------
// sumatoria(4,1)    | 5
// sumatoria(2,3)    | 5
// sumatoria(3,5)    | 8
// sumatoria(5,5)    | 10
// sumatoria(1,2)    | 3
// resultado         | 21
