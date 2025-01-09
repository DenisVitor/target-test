const faturamentoDiario = [0, 100, 200, 0, 300, 0, 150, 50, 0, 500, 0, 400];

function analisarFaturamento(faturamento) {
    const diasValidos = faturamento.filter(valor => valor > 0);

    const menor = Math.min(...diasValidos);
    const maior = Math.max(...diasValidos);
    const mediaMensal = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;

    const diasAcimaMedia = diasValidos.filter(valor => valor > mediaMensal).length;

    return { menor, maior, diasAcimaMedia };
}

const { menor, maior, diasAcimaMedia } = analisarFaturamento(faturamentoDiario);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);
