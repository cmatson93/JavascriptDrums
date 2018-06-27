window.addEventListener('keydown', function(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio){return}//stops function
    
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');

})

window.addEventListener('keyup', function(e){

    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    key.classList.remove('playing');

})