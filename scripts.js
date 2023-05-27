//Papel vence a piedra.
//Piedra vence a tijeras.
//Tijeras vence a papel.
// Piedra = 0, Papel = 1, tijera = 2

//var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;
var eleccionUsuario;
let cuentaYO = 0;
let cuentaPC = 0;
let cuentaEmpate = 0;
let l_valor = 0;


function aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function puntosMios(l_valor) {
    document.getElementById("MisPuntos").innerHTML = l_valor;
    return true
}

function puntosPC(l_valor) {
    document.getElementById("PCPuntos").innerHTML = l_valor;
    return true
}


function usuario(eleccionUsuario) {

    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0, 2);

    if (eleccionUsuario == 0) { //el usuario eligio piedra
        if (opciones[eleccionMaquina] == 1) {//si la maquina eligio papel
            cuentaPC = cuentaPC + 1;
            document.getElementById("efecto").innerHTML = "<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>";

        } else {
            if (opciones[eleccionMaquina] == 2) {
                cuentaYO = cuentaYO + 1;
                document.getElementById("efecto").innerHTML = "<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>";

            } else {
                if (opciones[eleccionMaquina] == 0) {
                    cuentaEmpate = cuentaEmpate + 1;
                    document.getElementById("efecto").innerHTML = "<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>";
                }
            }
        }
    }

    if (eleccionUsuario == 1) {//el usuario eligio papel 
        if (opciones[eleccionMaquina] == 2) {
            cuentaPC = cuentaPC + 1;
            document.getElementById("efecto").innerHTML = "<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>";
        } else {
            if (opciones[eleccionMaquina] == 0) {
                cuentaYO = cuentaYO + 1;
                document.getElementById("efecto").innerHTML = "<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>";

            } else {
                if (opciones[eleccionMaquina] == 1) {
                    cuentaEmpate = cuentaEmpate + 1;
                    document.getElementById("efecto").innerHTML = "<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>";
                }
            }
        }
    }

    if (eleccionUsuario == 2) {//el usuario eligio tijera 
        if (opciones[eleccionMaquina] == 1) {
            cuentaYO = cuentaYO + 1;
            document.getElementById("efecto").innerHTML = "<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>";

        } else {
            if (opciones[eleccionMaquina] == 0) {
                cuentaPC = cuentaPC + 1;
                document.getElementById("efecto").innerHTML = "<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>";
            } else {
                if (opciones[eleccionMaquina] == 2) {
                    cuentaEmpate = cuentaEmpate + 1;
                    document.getElementById("efecto").innerHTML = "<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>";
                }
            }
        }

    }
    document.getElementById("efecto").style.display = "";
    puntosMios(cuentaYO);
    puntosPC(cuentaPC);
}

function quitarEfecto() {
    document.getElementById("efecto").style.display = "none";
}
