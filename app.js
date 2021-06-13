const qwerty = document.getElementById('qwerty');
const phraseUL = document.getElementById('phrase');
const scoreboard = document.getElementById('scoreboard');
let missed = 0;

const startButton = document.getElementById('start_btn');
const btn = document.getElementsByTagName('button');
const phrasesArray = [
    'A Cold Day in July',
    'Cry Wolf',
    'Fish Out Of Water',
    'Drive Me Nuts',
    'Right Out of the Gate'
]
// const phrasesArray = [
//     'A a a',

// ]
const phrase = getRandomPhraseAsArray(phrasesArray);


function getRandomPhraseAsArray(arr) {
    //do stuff to any arr that is passed in 
    const randomPhrase = phrasesArray[getRandomInt(phrasesArray.length)];

    for (let i = 0; i < randomPhrase.length; i++) {

        return randomPhrase.split("");

    }

}

function addPhraseToDisplay(array) {
    // Loop through the array

    for (let i = 0; i < phrase.length; i++) {
        var letter = array[i];
        const li = document.createElement('li');
        li.textContent = letter;
        phraseUL.append(li);

        if (letter === " ") {
            li.className = "space";

        } else {
            li.className = "letter";

        }

    }
    // Append item to list item

}


function checkletter(target) {
    let found = null;
    let li = document.querySelectorAll('li');
    for (let i = 0; i < phrase.length; i++) {
        var letter = phrase[i].toLowerCase();

        const buttonLetter = target.textContent;

        if (buttonLetter === letter) {
            target.className = "chosen";
            target.disabled = true;

            li[i].classList.add('show');
            found = true;

        } else {

            // disable the button if wrong
        }

    }
    return found;


}

function checkWin() {
    const show = document.getElementsByClassName('show');
    const letters = document.getElementsByClassName('letter');
    // check if game has won or lost
    
    if (letters.length === show.length) {
        overlay.className = "win";
        overlay.style.display = "flex"
        startButton.textContent = "Restart Game";

    } else if (missed >= 5) {
        overlay.style.display = "flex";
        overlay.className = "lose";
        startButton.textContent = "Restart Game";

    }
    // if show class === letters class mean a win
    // If misses is greater than 5, show overlay with class lose.
}





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    const ol = scoreboard.children[0];
    const liList = ol.children;
    // Check to see if the target is a button
    // The function should loop over the letters and check if they match
    let letterFound = checkletter(button);
    if (button.tagName === 'BUTTON') {
        // check to see if letterFound is false

        if (letterFound === null && liList.length > 0) {
            liList[0].remove();
            missed += 1;

            
        }
        checkWin();
    }


});

startButton.addEventListener('click', (e) => {
    const button = e.target;
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('start');
    overlay.style.display = 'none'
    e.preventDefault;
    console.log('button clicked');
});


addPhraseToDisplay(phrase);