// ========================
// Teoria sobre el uso de return en JavaScript
// ========================

// console.log permite a los desarrolladores visualizar lo que esta pasando en el codigo,
// pero su funcionalidad termina ahi. Solo imprime en consola.
// En cambio, return devuelve informacion al invocar una funcion y finaliza la ejecucion de esa funcion.

// Si una funcion fuera una pasteleria, console.log seria como decir que el pastel esta listo,
// mientras que return es lo que entrega el pastel para usarlo en otra parte del programa.

// ========================
// Ejemplo 1: return sin console.log
// ========================

function crearArreglo() {
    var nuevoArreglo = ["a", "e", "i", "o", "u"];
    return nuevoArreglo;
}

var vocales = crearArreglo(); // vocales ahora contiene el arreglo devuelto por la funcion

// ========================
// Ejemplo 2: funcion basica que devuelve un valor numerico
// ========================

function obtenerEdad() {
    var edad = 20;
    return edad;
}

// ========================
// Ejemplo 3: funcion con parametros
// ========================

function calculaAreaRectangulo(largo, ancho) {
    var area = largo * ancho;
    return area;
}

console.log(calculaAreaRectangulo(10, 20)); // Imprime 200

// ========================
// Comentario adicional:
// ========================
// - En JavaScript y Python, 'return' termina la funcion y devuelve un valor.
// - Si no se usa return, la funcion devuelve undefined (JS) o None (Python).
