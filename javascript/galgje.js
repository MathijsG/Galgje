
// Woorden-array
var wordList  = ["Bananendoos", "Theelepel", "Herbivoor", "Kaassoufle", "Sjaggeraar", "Komkommerbedrijf", "Telecommunicatiewetgeving", "Fluviatiel", "Coniferenhaag"];

// Kies een random woord uit de array
let word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
console.log("Het woord is: " + word);
var amountOfTries = 5;
let letterOutput = document.querySelector("#letterOutput"); // Div waar de letters worden gerenderd
var submitButton = document.querySelector("#submit"); // Submit-knop
var indexOfCorrectLetters = []; // Array met geraden letters
//submitButton.addEventListener("click", function(){ checkLetter();});

window.onload = function()
{
    renderLetters(word);
    //submitButton.addEventListener("click", function(){ checkLetter();});
    //var submittedLetter = document.querySelector("#letterInput").value;
    //checkLetter(submittedLetter);
}

function renderLetters(word)
{
    let content = "";
    for (let i=0; i < word.length ; i++)
    {
        let element = document.createElement("div");
        if (word[i] === "a")
        {
            content = document.createTextNode(word[i]);
        }
        else
        {
            content = document.createTextNode("_");
        }
        
        element.appendChild(content);
        element.classList.add("letter","p-3", "m-1", "badge", "badge-secondary");
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
    var letter = document.querySelector("#letterInput").value.toLowerCase();
    console.log("Letter is: " + letter);
    var letterArray = [];
    var count = 0;
    for (i=0; i < wordLength; i++)
    {
        console.log("De waarde van de letter op plek "+ i + " is: " + word.charAt(i));
        if (letter == word.charAt(i))
        {
            indexOfCorrectLetters.push(i);
            count = count + 1;
        }
        console.log(word[i]);
    }
    console.log("De ingevoerde letter '" + letter + "' komt " + count + " keer voor in " + word);
    console.log("Dit is de index van goede letters: " + indexOfCorrectLetters);
    //console.log("Indexgrootte: " + indexOfCorrectLetters.length);
    renderLetters(word, wordLength);
}