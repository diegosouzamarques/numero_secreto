const elementoChute = document.getElementById("chute");
var chutando = true;

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const exiberChute = (chute)=>{
    elementoChute.innerHTML = `
    
    <div>Você disse:</div>
    <span class="box">${chute}</span>

    `
}

const onSpeak = (evt) =>{
    const chute = evt.results[0][0].transcript;
    console.log(chute);
}

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => chutando && recognition.start());