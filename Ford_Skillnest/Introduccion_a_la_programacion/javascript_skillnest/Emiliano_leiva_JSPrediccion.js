// Prediccion 1:
// Va a imprimir "Tengo: 25 años"
function miEdad() {
    console.log("Tengo: " + 25 + " años");
}

// Prediccion 2:
// Si enviamos como variable edad el numero 25, se imprimira "Tengo: 25 años"
function miEdadConParametro(edad) {
    console.log("Tengo: " + edad + " años");
}

// Prediccion 3:
// Deberia mostrar:
// ¡Restemos los numeros!
// primerNumero es: 50
// segundoNumero es: 27
// 23
function restar(primerNumero, segundoNumero) {
    console.log("¡Restemos los numeros!");
    console.log("primerNumero es: " + primerNumero);
    console.log("segundoNumero es: " + segundoNumero);

    var resultado = primerNumero - segundoNumero;
    console.log(resultado);
}

// La funcion main es el lugar donde se agrupan todas las llamadas principales del programa.
// Sirve para tener todo el flujo del programa en un solo lugar, bien organizado.
function main() {
    miEdad(); // Llama a la prediccion 1

    var edad = 25;
    miEdadConParametro(edad); // Llama a la prediccion 2

    restar(50, 27); // Llama a la prediccion 3
}

// Llamada a la funcion principal
main();

// Nota final:
// Decidi agrupar todas las llamadas de funciones dentro de una funcion llamada main
// porque lo asocio con Python, lenguaje que conozco y donde se suele organizar el flujo
// principal del programa dentro de una funcion llamada def main()
// Esto me ayuda a mantener el codigo mas claro, ordenado y facil de entender
// Agrupe llamadas en una funcion main para mantener el orden, siguiendo la logica de Python que conozco