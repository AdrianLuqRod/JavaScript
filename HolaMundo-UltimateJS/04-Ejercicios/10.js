let longitud = 7;

function crearArray(n) {
    let numeros = [];
    numeros.length = n;
    for (let index = 0; index < numeros.length; index++) {
        numeros[index] = index + 1;

    }
    return numeros;
}

let resultado = crearArray(longitud);
console.log(resultado);