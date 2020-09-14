let context = null;

let playButton = null;
let volumeControl = null;

let oscNode1 = null;
let oscNode2 = null;
let oscNode3 = null;
let constantNode = null;
let gainNode1 = null;
let gainNode2 = null;
let gainNode3 = null;

let playing = false;

function setup() {
  context = new (window.AudioContext || window.webkitAudioContext)();

  playButton = document.querySelector("#playButton");
  volumeControl = document.querySelector("#volumeControl");

  playButton.addEventListener("click", togglePlay, false);
  volumeControl.addEventListener("input", changeVolume, false);

  gainNode1 = context.createGain();
  gainNode1.gain.value = 0.5;
 
  gainNode2 = context.createGain();
  gainNode3 = context.createGain();
  gainNode2.gain.value = gainNode1.gain.value;
  gainNode3.gain.value = gainNode1.gain.value;
  volumeControl.value = gainNode1.gain.value;

  constantNode = context.createConstantSource();
  constantNode.connect(gainNode2.gain);
  constantNode.connect(gainNode3.gain);
  constantNode.start();

  gainNode1.connect(context.destination);
  gainNode2.connect(context.destination);
  gainNode3.connect(context.destination);
}


function togglePlay(event) {
  if (playing) {
    playButton.innerHTML = "▶️";
    stopOscillators();
  } else {
    playButton.innerHTML = "⏸";
    startOscillators();
  }
}

function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}

function startOscillators() {
  oscNode1 = context.createOscillator();
  oscNode1.type = "sine";
  oscNode1.frequency.value = 261.625565300598634; // middle C
  oscNode1.connect(gainNode1);

  oscNode2 = context.createOscillator();
  oscNode2.type = "sine";
  oscNode2.frequency.value = 329.627556912869929; // E
  oscNode2.connect(gainNode2);

  oscNode3 = context.createOscillator();
  oscNode3.type = "sine";
  oscNode3.frequency.value = 391.995435981749294 // G
  oscNode3.connect(gainNode3);

  oscNode1.start();
  oscNode2.start();
  oscNode3.start();
 
  playing = true;
}


function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
  playing = false;
}
window.addEventListener("load", setup, false);