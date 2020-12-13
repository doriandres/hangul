export const languages = {};

function setUpVoices(){
    languages.korean = speechSynthesis.getVoices().find(v => v.lang === "ko-KR")
}

speechSynthesis.onvoiceschanged = () => setUpVoices();

export function speak(text, voice, rate = 1, pitch = 1) {
    if (text && voice) {
        const utter = new SpeechSynthesisUtterance(text);        
        utter.voice = voice;
        utter.rate = rate;
        utter.pitch = pitch;
        speechSynthesis.speak(utter);        
    }
}

setUpVoices();
[...document.querySelectorAll('.silabo')].forEach(silabo => {
    silabo.addEventListener('click', () => {
        speak(silabo.textContent, languages.korean);
    });
})