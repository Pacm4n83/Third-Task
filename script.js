// Browser support
window.AudioContext = window.AudioContext || window.webkitAudioContext;

// Initialize audio context
var context = new AudioContext();

// Destination
var destination = context.destination;

// Sound Url
var soundUrl = 'http://........';

// Buffer
var soundBuffer;

// Create request to load the song from address
var request = new XMLHttpRequest();
request.open('GET', soundUrl, true);

// Obtain as buffer array
request.responseType = 'arraybuffer';

// Send request and save it
request.onload = function() {
  context.decodeAudioData(request.response, function(buffer) {
    soundBuffer = buffer;
  });
};

request.send();

// Play sound
function play() {
  // Create AudioBufferSource and attach buffer
  var source = context.createBufferSource();
  source.buffer = soundBuffer;
  source.connect(context.destination);

  // Play the source
  source.start(0);
}

// Send request and save it
request.onload = function() {
  context.decodeAudioData(request.response, function(buffer) {
    soundBuffer = buffer;
    play();
  });
};
<audio id="myAudioTag" controls>
    <source src="music.ogg" type='audio/ogg; codecs=vorbis' />
</audio>

// Get the element from the DOM
var audioElement = document.getElementById('myAudioTag');

// Create a node based on the element
source = context.createMediaElementSource(audioElement);
source.connect(context.destination);

// Create oscillator and set up attributes
var oscillator = context.createOscillator();
oscillator.frequency.value = 261.63;
oscillator.type = 'square';

// Attach to destination
oscillator.connect(context.destination);

// Play oscillator
oscillator.start(0);

var frequencies = [261.63, 329.63, 392];

for (var i in frequencies) {
  // Create oscillator and set up attributes
  var oscillator = context.createOscillator();
  oscillator.frequency.value = frequencies[i];
  oscillator.type = 'square';

  // Attach to destination
  oscillator.connect(context.destination);

  // Play oscillator
  oscillator.start(0);
}
// Using one of the nodes of the previous examples
var webNode = getNodeFromPreviousExample();

// Create new GainNode
var gainNode = context.createGain();

// Attach webNode -&amp;gt; gainNode -&amp;gt; destination
webNode.connect(gainNode);
gainNode.connect(context.destination);

// Control the volume
gainNode.gain.value = 0.4;
