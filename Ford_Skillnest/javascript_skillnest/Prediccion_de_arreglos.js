
/*
Tarea: Con la ayuda de Diagramas T, predice el resultado de los siguientes bloques de código.

Instrucciones:

Para cada bloque de código, crea un Diagrama T
Guarda todo en un solo documento (o captura de imagen), recuerda incluir los 3 Diagramas de T.
Comprime el archivo y súbelo a la plataforma
*/

//-----------------------------------------------------------------------------------------


// Bloque 1: muestraPintor

function muestraPintor() {
    var infoContacto = ["Diego", "Rivera", "Guanajuato", "México", 812345678];

    console.log(infoContacto);
}

/*
Diagrama T - Bloque 1

| Variable      | Valor                                         |
|---------------|-----------------------------------------------|
| infoContacto  | Diego, Rivera, Guanajuato, Mexico, 812345678 |
*/

// Forma detallada por indice
// Indice | Valor
//--------|----------------
//   0    | Diego
//   1    | Rivera
//   2    | Guanajuato
//   3    | Mexico
//   4    | 812345678



//-----------------------------------------------------------------------------------------

//Bloque 2: muestraCompras

function muestraCompras() {
    var listaSupermercado = ["arroz", "frijoles", "lentejas", "pan"];
    var listaOficina = ["clips", "papel", "lapices"];

    listaOficina.push("Post-its");

    console.log(listaOficina);
}

/*
Diagrama T - Bloque 2

| Variable           | Valor                                |
|--------------------|----------------------------------------|
| listaSupermercado  | arroz, frijoles, lentejas, pan         |
| listaOficina       | clips, papel, lapices, Post-its        |
*/

// Forma detallada por indice
// Indice | Valor
//--------|----------------
//   0    | clips
//   1    | papel
//   2    | lapices
//   3    | Post-its

//-----------------------------------------------------------------------------------------

//Bloque 3: biblioteca

var biblioteca = ["Cien Años de Soledad", "Pedro Páramo", "La Casa de los Espíritus"];

biblioteca.push("El Laberinto de la Soledad");
biblioteca[1] = "El Llano en Llamas";

console.log(biblioteca);

/*
Diagrama T - Bloque 3

| Variable   | Valor                                                                              |
|------------|------------------------------------------------------------------------------------|
| biblioteca | Cien Anos de Soledad, El Llano en Llamas, La Casa de los Espiritus, El Laberinto de la Soledad |
*/

// Forma detallada por indice
// Indice | Valor
//--------|-----------------------------
//   0    | Cien Anos de Soledad
//   1    | El Llano en Llamas
//   2    | La Casa de los Espiritus
//   3    | El Laberinto de la Soledad
