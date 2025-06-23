// script.js
const inputText = document.getElementById('input-text');
const speakBtn = document.getElementById('speak-btn');

let speechSynthesis = window.speechSynthesis;

speakBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
});