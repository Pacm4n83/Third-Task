let oscillator, gain, context;
let playContainer, stopContainer;

playContainer = document.querySelector(".play");
stopContainer = document.querySelector(".stop");

playContainer.addEventListener("click", () => {
  context = new AudioContext();
  startOscillator(50);
});

stopContainer.addEventListener("click", () => {
  context = new AudioContext();
  stopOscillator();
});

function startOscillator(frequency) {
  // Create sound source
  oscillator = context.createOscillator();
  // sine wave
  oscillator.type = 0;
  // Frequency value (hz) is passed from the button
  oscillator.frequency.value = frequency;
  // Play sound instantly
  oscillator.start(0);

  // Create gainNode
  gain = context.createGain();
  // Set gain to full volume
  gain.gain.value = 1;

  // Connect oscillator to gain
  oscillator.connect(gain);
  // Connect gain to the output
  gain.connect(context.destination);
}

function stopOscillator() {
  // Stopped after 0 sec
  oscillator.stop(0);
  oscillator.disconnect();
}
