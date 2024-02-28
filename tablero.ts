// Tablero.ts

import { Casilla, EstadoCasilla } from './casilla';

export class Tablero {
  casillas: Casilla[][];

  constructor(public ancho: number, public alto: number) {
    this.casillas = this.generarCasillas();
  }

  private generarCasillas(): Casilla[][] {
    const tablero = new Array(this.alto);

    for (let y = 0; y < this.alto; y++) {
      tablero[y] = new Array(this.ancho);
      for (let x = 0; x < this.ancho; x++) {
        tablero[y][x] = {
          tieneMina: false,
          estado: EstadoCasilla.Cerrada,
          minasAdyacentes: 0
        };
      }
    }

    return tablero;
  }

  public colocarMinasAleatorias(porcentajeMinas: number = 20) {
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
