const button = document.querySelector('.final_button');
const buttonD = document.querySelector('.final_buttonD');
const form = document.querySelector('.login-form');
const formD = document.querySelector('.buttonBack');
const spanTimer = document.querySelector('.timerkey');

button.removeAttribute('disabled');
buttonD.removeAttribute('disabled');

const handleSubmit = (event) => {
    event.preventDefault();
    window.location = 'game.html';
}

const handleSubmitD = (event) => {
    event.preventDefault();
    window.location = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    let elements = []
    let container = document.querySelector('#container')
    // Add each row to the array
    container.querySelectorAll('.row').forEach(el => elements.push(el))
    // Clear the container
    container.innerHTML = ''
    // Sort the array from highest to lowest
    elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
    // Put the elements back into the container
    elements.forEach(e => container.appendChild(e))
  })

form.addEventListener('submit', handleSubmit);
formD.addEventListener('submit', handleSubmitD);

window.onload = () => {

    spanTimer.innerHTML = localStorage.getItem('timerkey');
    const music = new Audio('../musicas/Comemoração.mp3');
    music.play();

}