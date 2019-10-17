
// Woorden-array
let wordList = ["Bananendoos", "Theelepel", "Herbivoor", "Kaassoufle", "Sjaggeraar", "Komkommerbedrijf", "Telecommunicatiewetgeving", "Fluviatiel", "Coniferenhaag", "Xylofoondocent", "Pittoresk"];
// Kies een random woord uit de array en zet deze naar geheel lowercase
let word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();

console.log("Het spelwoord is: '" + word + "'");
// Hoeveel keer je een letter fout mag hebben
let amountOfTries = 6;

// Set object met letters. Bevat unieke letters
let guessedLetters = new Set();

// DOM koppeling
let counterElement = document.querySelector("#counter"); // Beurtenteller
let letterInputElement = document.querySelector("#letterInput");
let letterOutputElement = document.querySelector("#letterOutput"); // Div waar de letters worden gerenderd
let submitButton = document.querySelector("#submit"); // Submit-knop
let gameImage = document.querySelector(".gameImage");

document.querySelector(".rule").innerHTML = amountOfTries;

// Zet counter op aantal beurten vanaf het begin
counterElement.innerHTML = amountOfTries;

let letterInput = letterInputElement.value;
// Wanneer de input veranderd van het letterveld draai de submitcheck
letterInputElement.oninput = submitCheck;

renderLetters(word);

// Koppel eventlisteners als DOM geladen is aan bewuste elementen

// Functie die submitknop enabled en disabled
function submitCheck()
{
    let letterInput = letterInputElement.value;
    // Wanneer letterinput niet leeg is én er nog beurten over zijn en er nog niet gewonnen is
    if (letterInput !== "" && amountOfTries > 0)
    {
        // Enable submiknop
        submitButton.disabled = false;
    }
    // Anders de boel uitschakelen
    else
    {
        // Schakel submitknop uit
        submitButton.disabled = true;
    }
}

function renderLetters(word, letter)
{
    let content = document.createTextNode("");

    // Als er eerder geraden is, en dus het woord al eens is gerenderd, haal het woord dan weg.
    if (arguments.length > 1)
    {
        // Haal de div leeg
        letterOutputElement.innerHTML = "";
    }

    let amountofGuessedLetters = 0;

    // Itereer door alle letters van het spelwoord
    for (let i = 0; i < word.length; i++)
    {
        // Maak in elk geval per letter een div aan
        let element = document.createElement("div");

        // Als er een geraden letter in de set zit.
        if (guessedLetters.size > 0)
        {
            // Als de bewuste letter van het woord in de geraden letters zit
            if (guessedLetters.has(word[i]))
            {
                // Render dan de letter in plaats van een streepje
                content = document.createTextNode(word[i]);
                amountofGuessedLetters++;

                if (amountofGuessedLetters == word.length)
                {
                    gameWon();
                }
            }
            // Zo niet, render dan een streepje
            else
            {
                content = document.createTextNode("_");
            }
        }
        // Als er geen geraden letter in de set zit, render dan sowieso een streepje
        else
        {
            content = document.createTextNode("_");
        }
        element.appendChild(content);
        element.classList.add("letter", "p-3", "m-1", "badge", "badge-light", "shadow");
        letterOutputElement.appendChild(element);
    }
}

function checkLetter()
{
    // Koppel letiable aan DOM-element en converteer de uitvoer naar kleine letters
    letterInput = letterInputElement.value.toLowerCase();

    // Check of de ingevoerde letter voor komt in het woord en of je aantal beurten nog toestaan dat je een letter invoert
    if (word.includes(letterInput) == true && amountOfTries > 1)
    {
        // voeg huidige gekozen letter toe aan set van geraden letters
        guessedLetters.add(letterInput);
    }
    else
    {
        // Zo niet, gaat er een punt af van de hoeveelheid beurten
        if (amountOfTries > 1)
        {
            amountOfTries--;
            changeImage();
        }
        else
        {
            amountOfTries--;
            // Verloren
            gameLost();
        }
        counterElement.innerHTML = amountOfTries;
    }
    renderLetters(word, letterInput);

    letterInputElement.value = "";
}

function changeImage()
{
    // Maak object van CSS-eigenschappen van gameImage
    let computedStyle = window.getComputedStyle(gameImage);

    // Pak de horizontale background-positie van gameImage
    let previousPosition = computedStyle.getPropertyValue('background-position-x');
    // Converteer die CSS-waarde naar een getal
    previousPosition = parseFloat(previousPosition, 10);

    // Haal 200px af van deze waarde
    let newPosition = previousPosition - 200; // Breedte per afbeelding in de sprite

    // Stel de nieuwe waarde in
    gameImage.style.backgroundPositionX = newPosition + "px";
}

function gameWon()
{
    alert("Hoera, je hebt de galg overleefd");
}

function gameLost()
{
    counterElement.innerHTML = amountOfTries;
    submitCheck();
    changeImage();
    alert("Je bent gestorven aan de galg");
}