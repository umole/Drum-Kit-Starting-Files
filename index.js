const myButtons = document.getElementsByClassName("drum");

for (const myButton of myButtons) {
    myButton.addEventListener('click', playAudio);
}

function playAudio() {
    const audio = new Audio('./sounds/crash.mp3');
    audio.play();
}