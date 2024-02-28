// Casilla.ts

export enum EstadoCasilla {
    Abierta,
    Cerrada,
    Marcada
  }
  
  export interface Casilla {
    tieneMina: boolean;
    estado: EstadoCasilla;
    minasAdyacentes: number;
  }
  