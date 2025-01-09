function inverterString(string) {
    let invertida = "";

    for (const char of string) {
        invertida = char + invertida;
    }

    return invertida;
}

// Exemplo de entrada:
const texto = "Desenvolvimento";
console.log(`String invertida: ${inverterString(texto)}`);
