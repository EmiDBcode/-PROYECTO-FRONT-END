


// Esta función determina si un usuario puede obtener su licencia de conducir
function puedotenerlicencia (edadUsuario){
    // Verificamos si la edad es mayor a 17
    if (edadUsuario>17){
        // Si es mayor, se muestra un mensaje de aprobación
        console.log("¡Listo para obtener la licencia de  conducir!")
    } 
    // Si no es mayor, se muestra un mensaje de rechazo
    else {
        console.log("“Disculpa, debes esperar más años para conseguir tu licencia")
        
    }
}
// Declaramos la edad del usuario (podés cambiar el valor para probar distintos casos)
var edadUsuario=18;
// Llamamos a la función pasando la edad como argumento
puedotenerlicencia(edadUsuario);