let frequencyOne = document.querySelector('#frequency1');
let frequencyTwo = document.querySelector('#frequency2');
let durationOne = document.querySelector('#duration1');
let durationTwo = document.querySelector('#duration2');
let btnOne = document.querySelector('#btn-one');
let btnTwo = document.querySelector('#btn-two');

function playSound(frequency, duration) {
    if(!frequency || !duration) return;

    const context = new AudioContext();

    const oscillator = context.createOscillator();

    oscillator.type = "sine";

    oscillator.frequency.value = frequency;
    
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(0);

    gainNode.gain.linearRampToValueAtTime(0.0001, context.currentTime + duration);
    oscillator.stop(context.currentTime + duration);
};

btnOne.addEventListener('click', playFirstSound);
btnTwo.addEventListener('click', playSecondSound);

function playFirstSound() {
    playSound(frequencyOne.value, durationOne.value);
};

function playSecondSound() {
    playSound(frequencyTwo.value, durationTwo.value);
}

