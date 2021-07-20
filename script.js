document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase()) // Evento de click para a tela inteira, convertido para lowercase para utilização nos parametros.     
})

document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value; // mesmo que document.getElementByID

    if(song){
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active'); //Metodo para adicionar uma classe CSS a um elemento,

        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait)
        wait += 250;
    }
}