// ===== VRAGEN =====
let vragen = [
    {
        vraag: "Wat is 2 + 2?",
        antwoorden: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        vraag: "Welke taal gebruiken we in de browser?",
        antwoorden: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    }
];

// ===== VARIABELEN =====
let huidigeVraag = 0;
let score = 0;


// ===== START KNOP =====
document.getElementById("start").onclick = function () {
    huidigeVraag = 0;
    toonVraag();
};


// ===== VRAAG TONEN =====
function toonVraag() {

    let vraagElement = document.getElementById("vraag");
    let antwoordenDiv = document.getElementById("antwoorden");

    // TODO: vraag tonen
    vraagElement.innerText = vragen[huidigeVraag].vraag;
    // TODO: antwoorden genereren (buttons!)
    antwoordenDiv.innerHTML = "";

    for (let i = 0; i < vragen[huidigeVraag].antwoorden.length; i++) {
        let antwoordButton = document.createElement("button");
        antwoordButton.innerText = vragen[huidigeVraag].antwoorden[i];
        antwoordButton.onclick = function () {
            controleerAntwoord(i);
        };
        antwoordenDiv.appendChild(antwoordButton);
    }

}


// ===== ANTWOORD CONTROLEREN =====
function controleerAntwoord(index) {
    
    let feedback = document.getElementById("feedback");
    // TODO: controleer of antwoord juist is
    if (index === vragen[huidigeVraag].correct) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
        score++;
        document.getElementById("score2").innerText = score;        
    } else {
        feedback.innerText = "Fout!";
        feedback.style.color = "red";
    }
    // TODO: feedback tonen
    
    document.getElementById("volgende").disabled = false;
    
}


// ===== VOLGENDE VRAAG =====
document.getElementById("volgende").onclick = function () {
    feedback.innerText = "";
    huidigeVraag++;

    if (huidigeVraag >= vragen.length) {
        alert("Einde van de quiz!");
        huidigeVraag = 0;
    }

    // TODO: nieuwe vraag tonen
    toonVraag();
    document.getElementById("button").disabled = false;
};
