let cardNumber = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14.");

while (cardNumber < 4 || cardNumber > 14 || (cardNumber % 2) !== 0) {
    cardNumber = prompt ("Número de cartas inválido! Escolha um número par entre 4 e 14.");
}

alert(cardNumber);