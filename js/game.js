const catArea = document.getElementById("cat-area");
const scoreboard = document.getElementById("scoreboard");
const timerDisplay = document.getElementById("timer");
const meowSound = document.getElementById("meow-sound");

let score = 0;
let timeLeft = 30;
let gameInterval;
let catTimer;

function spawnCat() {
  const cat = document.createElement("div");
  cat.classList.add("cat");


  const x = Math.random() * (catArea.clientWidth - 80);
  const y = Math.random() * (catArea.clientHeight - 80);

  cat.style.left = `${x}px`;
  cat.style.top = `${y}px`;

  cat.addEventListener("click", () => {
    score++;
    scoreboard.textContent = `Score: ${score}`;
    meowSound.currentTime = 0;
    meowSound.play();
    cat.remove();
  });

  catArea.appendChild(cat);

  setTimeout(() => {
    cat.remove();
  }, 1000);
}

function startGame() {
  gameInterval = setInterval(spawnCat, 800);
  catTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(catTimer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  alert(`Time's up! You caught ${score} cats! 🐾`);
}

startGame();
