// Ejemplo de uso de arreglos en JavaScript con explicaciones detalladas

// Los arreglos o arrays son estructuras que permiten almacenar multiples valores en una sola variable.
// Cada valor dentro del arreglo se identifica por un numero llamado "indice" o "subindice".

// ⚠️ Importante:
// Los indices en JavaScript comienzan desde 0 (cero).
// Es decir, el primer elemento del arreglo esta en la posicion 0, el segundo en la posicion 1, y asi sucesivamente.

// ========================
// Parte 1: Creación de arreglos
// ========================

// Lista del supermercado con elementos de tipo string
var listaSupermercado = ["arroz", "frijoles", "lentejas", "pan"];
console.log("Lista del supermercado:", listaSupermercado);

// Gastos como números
var gastos = [100, 142, 231];
console.log("Lista de gastos:", gastos);

// Información de contacto mezclada (strings y número)
var infoContacto = ["Diego", "Rivera", "Guanajuato", "México", 812345678];
console.log("Info de contacto:", infoContacto);

// ========================
// Parte 2: Explicación del subíndice o índice
// ========================

// Cada elemento en un arreglo tiene una posición (índice) que comienza en 0.
// Por ejemplo:
console.log("Primer elemento de listaSupermercado:", listaSupermercado[0]); // "arroz"
console.log("Último elemento de infoContacto:", infoContacto[4]); // 812345678

// Podemos acceder directamente a cada elemento del array usando el nombre + índice

// ========================
// Parte 3: Modificación y gestión de arreglos
// ========================

// Creamos un arreglo que representa a un pintor
var pintor = ["David Alfaro", "Siqueiros", "Camargo"];
console.log("Arreglo inicial del pintor:", pintor);

// ========================
// Método .push()
// ========================
// Agrega un nuevo elemento al final del arreglo
pintor.push("México");
console.log("Después de .push('México'):", pintor);
// Resultado: ["David Alfaro", "Siqueiros", "Camargo", "México"]

// ========================
// Método .pop()
// ========================
// Elimina el último elemento del arreglo
pintor.pop();
console.log("Después de .pop():", pintor);
// Resultado: ["David Alfaro", "Siqueiros", "Camargo"]

// ========================
// Acceder a valores con índices
// ========================
// Accedemos al índice 0 (primer elemento)
console.log("Nombre del pintor:", pintor[0]); // "David Alfaro"

// ========================
// Actualizar un valor por índice
// ========================
pintor[1] = "Orozco"; // Cambiamos el segundo valor
console.log("Después de actualizar el índice 1:", pintor);
// Resultado: ["David Alfaro", "Orozco", "Camargo"]

// ========================
// Longitud del arreglo
// ========================
// La propiedad .length indica cuántos elementos tiene un arreglo
console.log("Cantidad de elementos:", pintor.length); // 3

// Eliminamos un elemento
pintor.pop();
console.log("Cantidad tras eliminar uno:", pintor.length); // 2

// Nota final:
// Si venis de Python, vas a notar muchas similitudes entre los arreglos (arrays) en JavaScript y las listas en Python.
// Ambas estructuras:
// - Se declaran con corchetes []
// - Pueden contener cualquier tipo de dato
// - Se accede a los elementos por indice (empezando en 0)
// - Tienen metodos similares como .push() (equivalente a .append() en Python) y .length (equivalente a len())
// Esto facilita el aprendizaje si ya tenias experiencia previa en Python
