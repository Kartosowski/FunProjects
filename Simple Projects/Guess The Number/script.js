"use strict";

const numberText = document.querySelector("#number");
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let pause = false;

document.querySelector("#check").addEventListener("click", function () {
  const message = document.querySelector("#message");
  const guess = Number(document.querySelector("#guess").value);
  const highscoreText = document.querySelector("#highscore");
  if (!pause) {
    if (!guess) {
      message.textContent = "No number!";
    } else if (number === guess) {
      message.textContent = "You guessed!";
      numberText.textContent = "Number: " + number;
      document.querySelector("body").style.backgroundColor = "#ACFA70";

      pause = true;
      if (score > highscore) {
        highscoreText.textContent = "Highscore: " + score;
        highscore = score;
      }
    } else if (guess > number) {
      if (check()) {
        message.textContent = "Lower!";
      } else {
        message.textContent = "You lost!";
        pause = true;
      }
    } else if (guess < number) {
      if (check()) {
        message.textContent = "Higher!";
      } else {
        message.textContent = "You lost!";
        pause = true;
      }
    }
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  restartgame();
});

function restartgame() {
  const message = document.querySelector("#message");
  const scoreText = document.querySelector("#score");

  message.textContent = "Start guessing...";
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreText.textContent = "Score: " + score;
  numberText.textContent = "Number: ?";
  document.querySelector("body").style.backgroundColor = "#FFF";

  pause = false;
}

function check() {
  const scoreText = document.querySelector("#score");

  if (score > 1) {
    score--;
    scoreText.textContent = "Score: " + score;
    return true;
  } else {
    scoreText.textContent = "Score: " + 0;
    return false;
  }
}
