// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() { 
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const button = document.getElementsByTagName('button')[0]; 
  const image = document.getElementsByTagName('img')[0];
  
  function speak() {
    const utterance = new SpeechSynthesisUtterance(textBox.value);
    const selected = voiceSelect.selectedOptions[0].getAttribute('data-name');

    utterance.addEventListener('start', () => {
      image.setAttribute('src', 'assets/images/smiling-open.png');
    });
    utterance.addEventListener('end', () => {
      image.setAttribute('src', 'assets/images/smiling.png');
    })

    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selected) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
  }

  function populate(){
    // Source: MDN
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
    button.addEventListener('click', speak);
  }
  var voices = [];
  synth.addEventListener('voiceschanged', populate);
}