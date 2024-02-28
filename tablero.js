"use strict";
// Tablero.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
const casilla_1 = require("./casilla");
class Tablero {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
        this.casillas = this.generarCasillas();
    }
    generarCasillas() {
        const tablero = new Array(this.alto);
        for (let y = 0; y < this.alto; y++) {
            tablero[y] = new Array(this.ancho);
            for (let x = 0; x < this.ancho; x++) {
                tablero[y][x] = {
                    tieneMina: false,
                    estado: casilla_1.EstadoCasilla.Cerrada,
                    minasAdyacentes: 0
                };
            }
        }
        return tablero;
    }
    colocarMinasAleatorias(porcentajeMinas = 20) {
        const totalCasillas = this.ancho * this.alto;
        const totalMinas = Math.ceil(totalCasillas * (porcentajeMinas / 100));
        let minasColocadas = 0;
        while (minasColocadas < totalMinas) {
            const y = Math.floor(Math.random() * this.alto);
            const x = Math.floor(Math.random() * this.ancho);
            if (!this.casillas[y][x].tieneMina) {
                this.casillas[y][x].tieneMina = true;
                minasColocadas++;
            }
        }
    }
}
exports.Tablero = Tablero;
