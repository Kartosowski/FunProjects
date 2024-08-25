"use strict";

function roll() {
  const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  document.querySelector("#result").textContent = `Result: ${String(
    randomNumber
  )}`;
}
