// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSelect = document.getElementById('horn-select');// declare the element
  var audio = document.querySelector('audio');//audio
  var displayButton = document.querySelector('button');//button
  
  
  hornSelect.addEventListener('change', (event) => {

    var image = document.getElementsByTagName('img')[0];
    var input = event.target.value;//create input value

    if(input == 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
      console.log(audio);
    }
    else if(input == 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'asserts/audio/car-horn.mp3';
    }
    else if(input == 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  
  });

  //play audio
  const jsConfetti = new JSConfetti();
  displayButton.addEventListener('click', () => {
    audio.play();
    if(hornSelect.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  })
  
}