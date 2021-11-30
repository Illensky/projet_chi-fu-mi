const shiFuMi = ["Shi", "Fu", "Mi"];
const buttons = document.getElementsByTagName("img");
const whoWinDiv = document.querySelector("#whoWin");

let equality = 0;
let pcWin = 0;
let userWin = 0;


for (let button of buttons) {
    button.addEventListener("click", function () {
        const userChoice = button.id;
        const pcChoice = shiFuMi[Math.floor(Math.random() * 3)];

        const imgChoice = document.createElement("img");
        imgChoice.src = "assets/img/" + pcChoice +".png";
        imgChoice.alt = pcChoice;
        imgChoice.style.display = "block"
        imgChoice.style.margin = "auto"
        imgChoice.id = "pcPlayed";
        imgChoice.classList.add("choice")

        if (document.querySelector("#pcPlayed")){
            document.querySelector("#pcPlayed").remove();
        }

        document.querySelector("#choixPc").appendChild(imgChoice);

        if (userChoice === pcChoice) {
            whoWinDiv.innerHTML = "C'est une égalité";
            equality++;
        }
        if (userChoice === "Shi" && pcChoice === "Fu") {
            whoWinDiv.innerHTML = "Le PC as gagné";
            pcWin++;
        }
        if (userChoice === "Shi" && pcChoice === "Mi") {
            whoWinDiv.innerHTML = "Vous avez gagné";
            userWin++;
        }
        if (userChoice === "Fu" && pcChoice === "Shi") {
            whoWinDiv.innerHTML = "Vous avez gagné";
            userWin++;
        }
        if (userChoice === "Fu" && pcChoice === "Mi") {
            whoWinDiv.innerHTML = "Le PC as gagné";
            pcWin++;
        }
        if (userChoice === "Mi" && pcChoice === "Fu") {
            whoWinDiv.innerHTML = "Vous avez gagné";
            userWin++;
        }
        if (userChoice === "Mi" && pcChoice === "Shi") {
            whoWinDiv.innerHTML = "Le PC as gagné";
            pcWin++;
        }

        document.querySelector("#winCounter").innerHTML = "Le pc as gagner " + pcWin.toString() + " fois, vous avez gagné " + userWin.toString() + " fois et il y as eu " + equality.toString() + " égalités."
    })
}