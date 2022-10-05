const button = document.querySelector('.final_button');
const form = document.querySelector('.login-form');
const spanTimer = document.querySelector('.timerkey');

button.removeAttribute('disabled');


const handleSubmit = (event) => {
    event.preventDefault();
    window.location = 'game.html';
}

form.addEventListener('submit', handleSubmit);

window.onload = () => {

    spanTimer.innerHTML = localStorage.getItem('timerkey');

}
