function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    return SOMA;
}

console.log("O valor final de SOMA é:", calcularSoma());
