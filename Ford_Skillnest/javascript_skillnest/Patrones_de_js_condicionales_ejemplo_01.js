// Ejemplo sobre el uso de condicionales en JavaScript

// Estado inicial de la television:
// Definimos una variable llamada teleEncendida que representa si la television esta encendida.
// Por defecto, comenzamos asumiendo que esta apagada (false).
var teleEncendida = false;

// Funcion que simula hacer clic en el boton para encender o apagar la television.
function clicAlBotonParaEncender() {
    
    // Usamos una estructura condicional "if...else" para decidir que hacer
    // Si la television esta encendida (es true), entonces la apagamos (la ponemos en false)
    if (teleEncendida == true) {
        console.log("La television esta encendida. Vamos a apagarla.");
        teleEncendida = false;
    } else {
        // Si la television esta apagada (es false), entonces la encendemos (la ponemos en true)
        console.log("La television esta apagada. Vamos a encenderla.");
        teleEncendida = true;
    }

    // Mostramos el nuevo estado de la television
    console.log("¿La television esta encendida?:", teleEncendida);
}

// Llamamos varias veces a la funcion para ver como cambia el estado
clicAlBotonParaEncender(); // Primera llamada → encender
clicAlBotonParaEncender(); // Segunda llamada → apagar
clicAlBotonParaEncender(); // Tercera llamada → encender
