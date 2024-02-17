function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        console.log("Los dos numeros son iguales");
    }
    // return (a > b) ? a : b;

}

let mayor = cualEsMayor(10, 5);

console.log(mayor);