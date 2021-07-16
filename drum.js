window.addEventListener('keydown', function (event) {
    const audio = document.querySelector('audio[data-key="'+event.keyCode+'"]')
    const button = document.querySelector('div[data-key="'+event.keyCode+'"]')
    
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
  })

  window.addEventListener('keyup', function (event) {
    const audio = document.querySelector('audio[data-key="'+event.keyCode+'"]')
    const button = document.querySelector('div[data-key="'+event.keyCode+'"]')
    
    button.classList.remove('playing');
  })