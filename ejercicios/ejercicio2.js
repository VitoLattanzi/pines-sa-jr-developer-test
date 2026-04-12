// Ejercicio 2
// Dada una matriz de 6 filas por 6 columnas, se solicita desarrollar un programa en cualquier lenguaje de programación o en pseudo código que realice lo siguiente:
// Asigne al azar letras de la A a la Z en todo el contenido de la matriz (la asignación debe hacerse por código en el programa sin pedir los datos por pantalla). Luego calcule e informe por pantalla cuantas veces se repite cada letra en la matriz.

const filas = 6;
const columnas = 6;
const matriz = [];
const contador = {};

//bloque de generador de la matriz 
for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++) {
        // Genera una letra aleatoria entre A y Z usando códigos ASCII
        const letra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        matriz [i] [j] = letra;
    }
}
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        const letra = matriz[i][j];
        contador[letra] = (contador[letra] || 0) + 1;
    }
}
//imprimir la matriz generada
console.log("Matriz generada:");
console.log(matriz);
console.log("Contador de letras:");
for (let letra in contador) {
    console.log(letra + ": " + contador[letra]);
}
