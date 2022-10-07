function noBug() {
    const div = document.createElement("div");
    div.classList.add("noBug");
    document.body.appendChild(div);
    setTimeout(() => hideBug(), 300);
}

function hideBug() {
    const bugs = document.getElementsByClassName("noBug");
    if (bugs.length) {
        bugs[0].remove ();
    }
}

function showLoading() {

    const div = document.createElement("div");
    div.classList.add("loading");

    const divB = document.createElement("div");
    divB.id = "timerB";
    divB.textContent =5;

    const divC = document.createElement("div");
    divC.classList.add("divC");
    divC.textContent = "O JOGO vai começar em ..."

    const label = document.createElement("label");

    divC.appendChild(divB);
    div.appendChild(divC);
    div.appendChild(label);

    document.body.appendChild(div);

   startTimerRegre();

    setTimeout(() => hideLoading(), 7500); 
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove ();
    }
}

const startTimerRegre = () => {

    this.loop = setInterval(()=>{

        const currentTime = +timerB.innerHTML;
        timerB.innerHTML = currentTime - 1;

        const music = new Audio('../musicas/TimerContador.mp3');
        music.play();


    }, 1500)
}
