// ========================
// Ejemplo 1: funcion basica con return
// ========================

// En JavaScript, igual que en Python, una funcion puede devolver un valor usando la palabra clave "return"
// Esto permite que el resultado pueda ser almacenado o utilizado por otras partes del programa.

function obtenerEdad() {
    var edad = 20;

  // El valor de la variable 'edad' se devuelve al lugar donde se llama la funcion.
  // Equivalente en Python:
  // def obtener_edad():
  //     edad = 20
  //     return edad
    return edad;
}

// ========================
// Ejemplo 2: funcion con parametros y return
// ========================

// Esta funcion recibe dos parametros: largo y ancho.
// Luego, calcula el area multiplicando ambos valores y lo devuelve con "return".
// Es muy parecido a una funcion en Python que calcule area.

function calculaAreaRectangulo(largo, ancho) {
  var area = largo * ancho;

  // Devuelve el resultado de la multiplicacion.
  // Equivalente en Python:
  // def calcula_area_rectangulo(largo, ancho):
  //     area = largo * ancho
  //     return area
    return area;
}

// ========================
// Ejemplo de uso
// ========================

// Llamamos a la funcion con los valores 10 y 20.
// Aunque no usamos console.log() en esta linea, la funcion retorna el resultado.
// Para verlo en pantalla deberiamos hacer:
console.log(calculaAreaRectangulo(10, 20)); // Imprime: 200

// ========================
// Comentario adicional:
// ========================
// En ambos lenguajes (Python y JavaScript):
// - La palabra clave 'return' termina la funcion y envia un valor de vuelta.
// - Si no se usa 'return', la funcion no devuelve nada (o devuelve undefined en JS y None en Python).
