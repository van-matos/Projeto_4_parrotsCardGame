const cardNumber = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14.");

const parrotGif = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];

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
            parrotArray.push(parrotGif[i / 2]);
        } else {
            parrotArray.push(parrotGif[(i -1) /2]);
        }
    }
    parrotArray.sort(comparador)
}

function comparador() { 
	return Math.random() - 0.5; 
}

function addCards(cardNumber) {
    for (let i = 0; i < (cardNumber); i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card-front" data-name="${parrotArray[i]}" onclick="cardFlip(this)"></div><div class="card-back hidden"><img src="images/${parrotArray[i]}parrot.gif"/></div>`;
        document.querySelector(".content").appendChild(newCard);
    }
    document.querySelector(".content").style.width = `${(cardNumber / 2) * 150}px`;
}

let selectionCounter = 0;
let globalCounter = 0;
let pairsFound = 0
let firstCard = "";
let secondCard = "";

function cardFlip(cardSelection) {
    if (selectionCounter < 2) {
        selectionCounter++;
        globalCounter++;
        if (selectionCounter === 1) {
            cardSelection.classList.add("hidden");
            cardSelection.nextElementSibling.classList.remove("hidden")
            cardSelection.nextElementSibling.classList.add("selected")
            firstCard = cardSelection.dataset.name;
        } else {
            cardSelection.classList.add("hidden");
            cardSelection.nextElementSibling.classList.remove("hidden")
            cardSelection.nextElementSibling.classList.add("selected")
            secondCard = cardSelection.dataset.name;
        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                const sameCards = document.querySelectorAll(".selected");
                for (let card of sameCards) {
                    card.classList.add("correct");
                }
                const inactiveCards = document.querySelectorAll (".card-front.hidden");
                for (let card of inactiveCards) {
                    card.classList.add("out-of-play");
                }
                pairsFound++
            } else {
                const timeout = setTimeout(resetCards, 1000);
                function resetCards () {
                    const differentCards = document.querySelectorAll(".selected");
                    for (let card of differentCards) {
                        card.classList.remove("selected");
                    }
                    const resetCards = document.querySelectorAll(".card-front.hidden");
                    for(let card of resetCards) {
                        card.classList.remove("hidden");
                    }
                }
            }
            selectionCounter = 0;
            firstCard = "";
            secondCard = "";
        }
    }
    if (pairsFound === Number(cardNumber) / 2) {
        const victoryTimeout = setTimeout(finalize, 100);
        function finalize() {
            alert(`Você ganhou em ${globalCounter} jogadas!`)
        }
    }
}