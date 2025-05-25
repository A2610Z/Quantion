// Select DOM elements
const increaseBtn = document.querySelector(".counterButtonIncrease");
const decreaseBtn = document.querySelector(".counterButtonDecrease");
const resetBtn = document.querySelector(".counterResetButton");
const counterValueEl = document.querySelector(".counterValue");
const counterContainer = document.querySelector(".counter");

// Constants for limits
const MAX_VALUE = 10;
const MIN_VALUE = 0;

/**
 * Update the displayed counter value and toggle the limit CSS class.
 * @param {number} value - New counter value
 */
function updateCounter(value) {
  counterValueEl.textContent = value;
  if (value >= MAX_VALUE) {
    counterContainer.classList.add("counter-limit");
  } else {
    counterContainer.classList.remove("counter-limit");
  }
}

/**
 * Increase counter value by 1 without exceeding MAX_VALUE.
 */
function incrementCounter() {
  const currentValue = Number(counterValueEl.textContent);
  const newValue = Math.min(currentValue + 1, MAX_VALUE);
  updateCounter(newValue);
}

/**
 * Decrease counter value by 1 without going below MIN_VALUE.
 */
function decrementCounter() {
  const currentValue = Number(counterValueEl.textContent);
  const newValue = Math.max(currentValue - 1, MIN_VALUE);
  updateCounter(newValue);
}

/**
 * Reset the counter value to 0.
 */
function resetCounter() {
  updateCounter(0);
}

// Attach event listeners
increaseBtn.addEventListener("click", incrementCounter);
decreaseBtn.addEventListener("click", decrementCounter);
resetBtn.addEventListener("click", resetCounter);

// Keyboard support: increment on ArrowUp or Enter keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "Enter") {
    incrementCounter();
  }
});