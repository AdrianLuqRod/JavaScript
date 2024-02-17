let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe",
}, {
    id: 3,
    name: "Chanchito",
}];

function toPairs(arr) {
    let pairs = [];
    for (const key in arr) {
        let elemento = arr[key];
        pairs[key] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);