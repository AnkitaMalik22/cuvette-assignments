const incrementBtn = document.querySelector('#increment-btn');
const resetBtn = document.querySelector('#reset-btn');
const counterDisplay = document.querySelector('#counter-display');

let counter = 0;


//event listeners
incrementBtn.addEventListener('click', increment);
resetBtn.addEventListener('click', reset);


//functions

function increment() {
    counter++;
    counterDisplay.textContent = counter;
    

}

function reset() {
    counter = 0;
    counterDisplay.textContent = counter;

}
