
// Woorden-array
var wordList = ["Bananendoos", "Theelepel", "Herbivoor", "Kaassoufle", "Sjaggeraar", "Komkommerbedrijf", "Telecommunicatiewetgeving", "Fluviatiel", "Coniferenhaag"];

// Kies een random woord uit de array
let word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
console.log("Het woord is: " + word);
var amountOfTries = 5;

var indexOfCorrectLetters = []; // Array met geraden letters
//submitButton.addEventListener("click", function(){ checkLetter();});

var guessedLetter = [""]; // Array met geraden letters

// Koppel eventlisteners als DOM geladen is aan bewuste elementen
window.onload = function ()
{
    let letterOutput = document.querySelector("#letterOutput"); // Div waar de letters worden gerenderd
    var submitButton = document.querySelector("#submit"); // Submit-knop
    letterInput = document.querySelector("#letterInput");
    letterInput.addEventListener('change', function () { enableSubmit(this.value, submitButton); });
    submitButton.disabled = false;
    renderLetters(word);
    //submitButton.addEventListener("click", function(){ checkLetter();});
    //var submittedLetter = document.querySelector("#letterInput").value;
    //checkLetter(submittedLetter);
}

function enableSubmit(input, button)
{
    if (input == "")
    {
        button.disabled = true;
    }
    else
    {
        button.disabled = false;
    }
}

function renderLetters(word, guessedLetter)
{
    let content = "";

    // Itereer door alle letters van het woord
    for (let i = 0; i < word.length; i++)
    {
        let element = document.createElement("div");

        // Als gekozen letter in het woord valt, render dan de letter
        if (word[i].includes("e"))
        {
            content = document.createTextNode(word[i]);
        }
        // Zo niet, render dan een streepje
        else
        {
            content = document.createTextNode("_");
        }

        element.appendChild(content);
        element.classList.add("letter", "p-3", "m-1", "badge", "badge-secondary");
        letterOutput.appendChild(element);

        // // Als er juiste woorden zijn geraden
        // if (indexOfCorrectLetters.length > 0)
        // {
        //     for (i=0; i < indexOfCorrectLetters.length; i++)
        //     {
        //         if (indexOfCorrectLetters[i].value == i)
        //         {
        //             console.log("De check conditie klopt");
        //             let content = document.createTextNode(word.charAt(i));
        //         }
        //     }
        //     content = document.createTextNode(word.charAt(i));
        // }
        // else
        // {
        //     content = document.createTextNode("_");
        // }
    }
}

function checkLetter()
{
    guessedLetter.push();
    console.log("Door de speler gekozen letter is: " + guessedLetter);
    var letterArray = [];
    var count = 0;
    for (i = 0; i < word.length; i++)
    {
        console.log("De waarde van de letter op plek " + i + " is: " + word.charAt(i));
        if (guessedLetter == word.charAt(i))
        {
            indexOfCorrectLetters.push(i);
            count = count + 1;
        }
        console.log(word[i]);
    }
    console.log("De ingevoerde letter '" + guessedLetter + "' komt " + count + " keer voor in " + word);
    console.log("De geraden letters staan op plek: " + indexOfCorrectLetters);
    //console.log("Indexgrootte: " + indexOfCorrectLetters.length);
    renderLetters(word, guessedLetter);

    console.log(guessedLetter);
}