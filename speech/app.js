// script.js
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const outputDiv = document.getElementById('output');

let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;
recognition.continuous = true;

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.innerText = transcript;
};

recognition.onerror = (event) => {
    console.error('Error occurred:', event.error);
};

recognition.onend = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
};