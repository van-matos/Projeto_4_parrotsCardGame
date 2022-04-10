const cardNumber = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14.");

const parrotGif = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];

let parrotArray = [];

if (cardNumber < 4 || cardNumber > 14 || (cardNumber % 2) !== 0) {
    cardNumber = prompt ("Número de cartas inválido! Escolha um número par entre 4 e 14.");
} else {
    parrotSelection(cardNumber);
    addCards(cardNumber);
}

function parrotSelection(cardNumber) {
    for (let i = 0; i < cardNumber; i++) {
        if (i % 2 === 0) {
            parrotArray.push(parrotGif[i]);
        } else {
            parrotArray.push(parrotGif[i - 1]);
        }
    }
    parrotArray.sort(comparador)
    console.log(parrotArray);
}

function comparador() { 
	return Math.random() - 0.5; 
}

function addCards(cardNumber) {
    for (let i = 0; i < (cardNumber); i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card-front"></div><div class="card-back"><img src="${parrotArray[i]}"/></div>`;
        document.querySelector(".content").appendChild(newCard);
        
    }
    document.querySelector(".content").style.width = `${(cardNumber / 2) * 150}px`;
}