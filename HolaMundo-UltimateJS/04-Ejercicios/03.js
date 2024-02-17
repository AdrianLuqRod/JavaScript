function getByIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return "Elemento inexistente";
    }
    return arr[idx];
}

let resultado = getByIdx([1, 2], 1);
console.log(resultado);