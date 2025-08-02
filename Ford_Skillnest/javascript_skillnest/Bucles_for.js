// ========================
// Bucles en JavaScript
// ========================

// ========================
// Ejemplo 1: Contador con console.log repetido (forma no óptima)
// ========================

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Aunque funciona, no es práctico para contar hasta números grandes.

// ========================
// Ejemplo 2: Bucle for como contador
// ========================

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

/*
Desglose del bucle:
1. var i = 0        -> Se declara e inicia el contador
2. i <= 5           -> Condición que debe cumplirse
3. console.log(i)   -> Se ejecuta si la condición es verdadera
4. i++              -> Se incrementa el valor de i en 1
5. Se repite el ciclo hasta que i > 5
*/

// ======== Diagrama T ========
// Variable | Valor
//----------|------
// i        | 0 -> 5 (se imprime cada valor)

// ========================
// Ejemplo 3: Bucle for con arreglo
// ========================

var arreglo = [5, 10, 15, 20];

for (var indice = 0; indice < arreglo.length; indice++) {
    console.log(indice);           // Muestra el índice
    console.log(arreglo[indice]); // Muestra el valor en esa posición
}

/*
Notas:
- Se usa < en lugar de <= porque los índices empiezan en 0.
- arreglo.length da 4, pero los índices van de 0 a 3.
- Se imprime tanto el índice como el valor correspondiente.
*/

// ======== Diagrama T ========
// Variable | Valor
//----------|-----------------
// indice  | 0 → 1 → 2 → 3
// arreglo | [5, 10, 15, 20]
// arreglo[indice] | 5 → 10 → 15 → 20

// ========================
// Nota final y comparación con Python
// ========================

/*
En Python, el bucle for también puede recorrer arreglos (listas) de forma similar:

Ejemplo en Python:
------------------
arreglo = [5, 10, 15, 20]
for elemento in arreglo:
    print(elemento)

Esto se asemeja al uso de 'for...of' en JavaScript:
------------------
for (var valor of arreglo) {
    console.log(valor);
}

En ambos lenguajes:
- El bucle 'for' es ideal para recorrer listas o arreglos.
- No necesita una condición de ruptura (como sí requiere un bucle while).
- Tiene un punto de inicio y un punto final bien definido.

Por eso, el bucle 'for' es la mejor opción cuando sabemos cuántas veces queremos repetir algo o cuántos elementos queremos recorrer.
*/
