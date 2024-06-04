//NextNumber Task
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentIndex = 0;
document.getElementById('nxtButton').addEventListener('click', ()=> {
    const numberDisplay = document.querySelector('.nxtDisplay');
    numberDisplay.innerHTML = numbers[currentIndex];
    currentIndex = (currentIndex + 1) % numbers.length;
});