"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tablero_1 = require("./tablero");
const tablero = new tablero_1.Tablero(10, 10); // Crea un tablero de 10x10
tablero.colocarMinasAleatorias(); // Coloca minas aleatoriamente con un 20% de cobertura
