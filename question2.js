function isFibonacci(num) {
    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        [a, b] = [b, a + b];
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Exemplo de entrada:
const numero = 21; // Troque pelo número desejado
console.log(isFibonacci(numero));
