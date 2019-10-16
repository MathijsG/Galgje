
// Woorden-array
var wordList = ["Bananendoos", "Theelepel", "Herbivoor", "Kaassoufle", "Sjaggeraar", "Komkommerbedrijf", "Telecommunicatiewetgeving", "Fluviatiel", "Coniferenhaag"];
// Kies een random woord uit de array en zet deze naar geheel lowercase
let word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
console.log("Het spelwoord is: '" + word + "'");

// Hoeveel keer je een letter fout mag hebben
var amountOfTries = 5;

// Set object met letters. Bevat unieke letters
var guessedLetters = new Set();


// DOM koppeling
var counterElement = document.querySelector("#counter");
var letterInputElement = document.querySelector("#letterInput");
let letterOutputElement = document.querySelector("#letterOutput"); // Div waar de letters worden gerenderd
let submitButton = document.querySelector("#submit"); // Submit-knop


var letterInput = letterInputElement.value;
// Wanneer de input veranderd van het letterveld draai de submitcheck
letterInputElement.oninput = submitCheck;

renderLetters(word);

// Koppel eventlisteners als DOM geladen is aan bewuste elementen

// Functie die submitknop enabled en disabled
function submitCheck()
{
    var letterInput = letterInputElement.value;
    // Wanneer er geen letter is ingegeven
    if (letterInput == "")
    {
        // Disable submiknop
        submitButton.disabled = true;
    }
    // Wanneer er wel een letter is ingegeven
    else
    {
        // Schakel submitknop in
        submitButton.disabled = false;
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
        element.classList.add("letter", "p-3", "m-1", "badge", "badge-secondary", "shadow");
        letterOutputElement.appendChild(element);
    }
}

function checkLetter()
{
    letterInput = letterInputElement.value.toLowerCase();

    // Check of de ingevoerde letter voor komt in het woord
    if (word.includes(letterInput) == true)
    {
        // voeg huidige gekozen letter toe aan set van geraden letters
        guessedLetters.add(letterInput);
    }
    else
    {
        // Zo niet, gaat er een punt af van de hoeveelheid beurten
        if (amountOfTries > 0)
        {
            amountOfTries--;
        }
        else
        {
            alert("DOOD!");
        }

        counterElement.innerHTML = amountOfTries;
    }
    renderLetters(word, letterInput);

    letterInputElement.value = "";
    //console.log("word: " + word + " letterInput: " + letterInput);
}