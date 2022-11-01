// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById('horn-select'); // declare the element
  var audio = document.querySelector('audio'); // audio
  var displayButton = document.querySelector('button'); // button
  var volume = document.getElementById('volume'); // volume slider

  volume.addEventListener('change', (event) => {
    console.log(volume.value);
    var image = document.getElementsByTagName('img')[1];

    audio.volume = volume.value / 100;

    if(volume.value == 0) {
      image.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume.value >= 1 && volume.value < 33) {
      image.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume.value >= 33 && volume.value < 67) {
      image.src = 'assets/icons/volume-level-2.svg';
    }
    else if(volume.value >= 67) {
      image.src = 'assets/icons/volume-level-3.svg';
    }
  });
  
  hornSelect.addEventListener('change', (event) => {

    var image = document.getElementsByTagName('img')[0];
    var input = event.target.value; // create input value

    if(input == 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
      
    }
    else if(input == 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(input == 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // play audio
  const jsConfetti = new JSConfetti();
  displayButton.addEventListener('click', () => {
    audio.play();
    if(hornSelect.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
  
}