export const languages = {};

speechSynthesis.onvoiceschanged = () => {
    languages.korean = speechSynthesis.getVoices().find(v => v.lang === "ko-KR")
}

export function speak(text, voice, rate = 1, pitch = 1) {
    if (text && voice) {
        const utter = new SpeechSynthesisUtterance(text);        
        utter.voice = voice;
        utter.rate = rate;
        utter.pitch = pitch;
        speechSynthesis.speak(utter);        
    }
}

[...document.querySelectorAll('.silabo')].forEach(silabo => {
    silabo.addEventListener('click', () => {
        speak(silabo.textContent, languages.korean);
    });
})