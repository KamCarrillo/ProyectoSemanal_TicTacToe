var jugadorActual = "X";
        var celdas = document.getElementsByClassName("cell");
        var ganador = false;

        for (var i = 0; i < celdas.length; i++) {
            celdas[i].addEventListener("click", function () {
                if (!ganador && this.innerHTML === "") {
                    this.innerHTML = jugadorActual;
                    comprobarVictoria();
                    cambiarJugador();
                }
            });
        }

        function cambiarJugador() {
            if (jugadorActual === "X") {
                jugadorActual = "O";
            } else {
                jugadorActual = "X";
            }
        }
        function comprobarVictoria() {
            // Comprobación horizontal
            if (comprobarCeldas(0, 1, 2) || comprobarCeldas(3, 4, 5) || comprobarCeldas(6, 7, 8)) {
                ganador = true;
            }
            if (comprobarCeldas(0, 3, 6) || comprobarCeldas(1, 4, 7) || comprobarCeldas(2, 5, 8)) {
                ganador = true;
            }
            if (comprobarCeldas(0, 4, 8) || comprobarCeldas(2, 4, 6)) {
                ganador = true;
            }
            if (ganador) {
                alert("¡Jugador " + jugadorActual + " gana!");
            }
        }
        function comprobarCeldas(celda1, celda2, celda3) {
            if (celdas[celda1].innerHTML === jugadorActual && celdas[celda2].innerHTML === jugadorActual && celdas[celda3].innerHTML === jugadorActual) {
                return true;
            } else {
                return false;
            }
        }