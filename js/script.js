function calcularCusto() {
    const valorAposta = parseFloat(document.getElementById('valorAposta').value);
    const dezenas = parseInt(document.getElementById('dezenas').value);
    const quantidadeJogos = parseInt(document.getElementById('quantidadeJogos').value);
    const cotas = parseInt(document.getElementById('cotas').value);

    if (dezenas < 7 || dezenas > 15) {
        document.getElementById('error-dezenas').innerText = "Escolha entre 7 e 15 números.";
        return;
    }

    // Tabela de Preços
    const tabelaPrecos = {
        7: 2.50,
        8: 20.00,
        9: 90.00,
        10: 300.00,
        11: 825.00,
        12: 1980.00,
        13: 4290.00,
        14: 8580.00,
        15: 16087.50
    };

    // Obtém o valor da aposta baseado na quantidade de números
    const valorPorJogo = tabelaPrecos[dezenas];

    // Calcula o custo total
    const custoTotal = valorPorJogo * quantidadeJogos;
    const custoPorCota = custoTotal / cotas;

    document.getElementById('resultado').innerHTML = `
        <p><b>Custo Total:</b> R$ ${custoTotal.toFixed(2)}</p>
        <p><b>Custo por Cota:</b> R$ ${custoPorCota.toFixed(2)}</p>
    `;
}

function calcularTeimosinha() {
    const concursos = parseInt(document.getElementById('concursosConsecutivos').value);
    const valorAposta = parseFloat(document.getElementById('valorAposta').value);
    const custoTeimosinha = valorAposta * concursos;

    document.getElementById('resultado').innerHTML = `
        <p><b>Custo para ${concursos} concursos consecutivos:</b> R$ ${custoTeimosinha.toFixed(2)}</p>
    `;
}

// Atualiza o valor da aposta com base na quantidade de números escolhidos
document.getElementById("dezenas").addEventListener("change", function () {
    const tabelaPrecos = {
        7: "R$ 2,50",
        8: "R$ 20,00",
        9: "R$ 90,00",
        10: "R$ 300,00",
        11: "R$ 825,00",
        12: "R$ 1.980,00",
        13: "R$ 4.290,00",
        14: "R$ 8.580,00",
        15: "R$ 16.087,50"
    };

    const quantidadeNumeros = this.value;
    document.getElementById("valorAposta").value = tabelaPrecos[quantidadeNumeros].replace("R$ ", "").replace(",", ".");
});
