function distribuirCartas() {
    const numPessoas = document.getElementById('num-pessoas').value;
    const cartasDistribuidas = document.getElementById('cartas-distribuidas');
    cartasDistribuidas.innerHTML = ''; // Limpar resultados anteriores

    if (numPessoas <= 0) {
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    // Simular as cartas
    const cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let distribuidas = [];

    for (let i = 0; i < numPessoas; i++) {
        // Distribuir aleatoriamente as cartas
        let carta = cartas[Math.floor(Math.random() * cartas.length)];
        distribuidas.push(carta);
    }

    // Exibir as cartas distribuídas
    distribuidas.forEach(carta => {
        const divCarta = document.createElement('div');
        divCarta.classList.add('card');
        divCarta.innerText = carta;
        cartasDistribuidas.appendChild(divCarta);
    });
}
