// tablero.ts

class Tablero {
  columnas: number;
  filas: number;
  tablero: Casilla[][] = [];
  minas: number;

  constructor(f: number, c: number) {
    this.filas = f;
    this.columnas = c;
    // Calcular número de minas (20% del total de casillas)
    this.minas = Math.floor((f * c) * 0.20);
    this.inicializarTablero();
  }

  inicializarTablero() {
    // Inicializar el tablero con casillas vacías
    for (let fila = 0; fila < this.filas; fila++) {
      this.tablero[fila] = [];
      for (let columna = 0; columna < this.columnas; columna++) {
        this.tablero[fila][columna] = new Casilla(fila, columna);
      }
    }
    // Colocar minas aleatoriamente
    this.colocarMinas();
    this.mostrarTablero();
    console.table(this.tablero);
  }

  colocarMinas() {
    let minasColocadas = 0;
    while (minasColocadas < this.minas) {
      const fila = Math.floor(Math.random() * this.filas);
      const columna = Math.floor(Math.random() * this.columnas);
      if (!this.tablero[fila][columna].tieneMina) {
        this.tablero[fila][columna].tieneMina = true;
        minasColocadas++;
      }
    }
  }

  mostrarTablero() {
    let tablaHTML = '<table style="border-collapse: collapse;">';
    for (let fila = 0; fila < this.filas; fila++) {
      tablaHTML += '<tr>';
      for (let columna = 0; columna < this.columnas; columna++) {
        // Añadir un id único a cada casilla
        tablaHTML += `<td id="casilla-${fila}-${columna}" style="padding: 0; margin: 0;"><img src="/img/square.gif" alt="casilla" style="display: block; width: 20px; height: 20px;"></td>`;
      }
      tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';
    document.body.innerHTML = tablaHTML;
  
    // Añadir EventListener después de que el tablero se haya añadido al DOM
    for (let fila = 0; fila < this.filas; fila++) {
      for (let columna = 0; columna < this.columnas; columna++) {
        const casillaElemento = document.getElementById(`casilla-${fila}-${columna}`);
        casillaElemento?.addEventListener('click', () => {
          this.revelarCasilla(fila, columna);
        });
  
        // EventListener para clic derecho
        casillaElemento?.addEventListener('contextmenu', (event) => {
          event.preventDefault(); // Evitar que aparezca el menú contextual
          this.marcarCasilla(fila, columna); // Marcar la casilla como mina
        });
      }
    }
  }
  
  marcarCasilla(fila: number, columna: number) {
    const casilla = this.tablero[fila][columna];
    if (!casilla.esMostrada && !casilla.esmMarcada) {
      casilla.esmMarcada = true;
      const casillaElemento = document.getElementById(`casilla-${fila}-${columna}`);
      casillaElemento.innerHTML = '<img src="/img/flag.png" alt="mina marcada" style=" padding: 0; margin: 0 display: block width: 22px; height: 22px;">';
    }
  }  

}
