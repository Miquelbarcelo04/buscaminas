// casilla.ts
class Casilla {
  tieneMina: boolean;
  esMostrada: boolean;
  esmMarcada: boolean;
  fila: number;
  columna: number;

  constructor(fila: number, columna: number) {
    this.tieneMina = false;
    this.esMostrada = false;
    this.esmMarcada = false;
    this.fila = fila;
    this.columna = columna;
  }
}
