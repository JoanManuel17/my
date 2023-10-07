// Challenge 1:

// La sintaxis de la funciones de felcha: () => {} es una forma más corta de escribir funciones en JavaScript.
// En la funciones de flecha no se les asigna un this propio sino que heredan el this del contexto global en el que se encuentran.
// Las funciones de flecha no pueden ser utilizadas como constructores y no tienen un prototipo.
// Las funciones de flecha no tienen argumentos ni objeto arguments.
// Las funciones de flecha no pueden ser llamadas con new.

//Funcion regular
function functionRegular(number) {
    if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
functionRegular(10);

//Funcion flecha
const functionArrow = (number) => {
    if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
functionArrow(10);

