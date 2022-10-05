const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector ('.timer');
const button = document.querySelector('.reset_button');
const form = document.querySelector('.login-form');

button.removeAttribute('disabled');

const handleSubmit = (event) => {
    event.preventDefault();
    location.reload();
    loadGame();
    window.location = 'game.html';
}

const characters = [
    'card_um',
    'card_dois',
    'card_tres',
    'card_quatro',
    'card_cinco',
    'card_seis',
    'card_sete',
    'card_oito',
    'card_nove',
    'card_dez',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        const music = new Audio('../musicas/Comemoração.mp3');
        music.play();
        //alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi ${timer.innerHTML} segundos.`);
        localStorage.setItem('timerkey', timer.innerHTML);
        window.location = 'final.html';
    }
}

const checkCards = () => {
 const firstCharacter = firstCard.getAttribute('data-character');
 const secondCharacter = secondCard.getAttribute('data-character');

 if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    const music = new Audio('../musicas/RespostaCorreta.mp3');
    music.play();

    checkEndGame();
    
 } else  {

    setTimeout(()=>{

    firstCard.classList.remove('reveal-card');
    secondCard.classList.remove('reveal-card');

    firstCard = '';
    secondCard = '';

    const music = new Audio('../musicas/RespostaErrada.mp3');
    music.play();


    },800);
 }
}


const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
     return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    
      } else if (secondCard === '') {
    
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const creatCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')` ;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character',character);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ... characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort(()=> Math.random()- 0.5);

    shuffledArray.forEach((character)=> {
        const card = creatCard(character);
        grid.appendChild(card);
    });

}

const startTimer = () => {
    this.loop = setInterval(()=>{

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000)

}


form.addEventListener('submit', handleSubmit);

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer ();
    loadGame();
}


