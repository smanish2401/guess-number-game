let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    } else if (guess < 1) {
        alert(`Please enter a number greater than 1`)
    } else if (guess > 100) {
        alert(`Please enter a number less than 100`)
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            dispalyMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        } else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayGuess(guess);
        dispalyMessage(`You guessed it right (🎉🎉!!You Won!!🎉🎉)`);
        endGame()
    } else if(guess < randomNumber){
        dispalyMessage(`Number is too low`)
    } else if(guess > randomNumber){
        dispalyMessage(`Number is too high`) 
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function dispalyMessage(messsage) {
    lowOrHi.innerHTML = `<h3>${messsage}</h3>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<p id='newGame'>Start New Game</p>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()


}

function newGame() {
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        
        guessSlot.innerHTML='';
        
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
