const luffy = document.querySelector('.luffy');
const gameBoard = document.querySelector(".game-board");

const jump = () => {
  luffy.classList.add('jump');
  setTimeout(() => luffy.classList.remove('jump'),1500);
   
}

document.addEventListener('keydown', function(event) {
  if(event.key === 'ArrowUp') {
    jump();
  }
});         