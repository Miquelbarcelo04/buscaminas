// casella.ts
class Casella {
  teMina: boolean;
  esMostrada: boolean;
  esMarcada: boolean;
  fila: number;
  columna: number;

  constructor(fila: number, columna: number) {
    this.teMina = false;
    this.esMostrada = false;
    this.esMarcada = false;
    this.fila = fila;
    this.columna = columna;
  }
}
