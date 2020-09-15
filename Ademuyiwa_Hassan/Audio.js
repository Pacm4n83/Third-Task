document.getElementById('play').addEventListener('click', function() {
  functionName(startOsc);
});

document.getElementById('stop').addEventListener('click',function(){
	functionName(off);
});

function startOsc(frequency){
var context = new AudioContext();
     oscillator = context.createOscillator();
     gainNode = context.createGain();

oscillator.type = "sine";
oscillator.connect(gainNode);
gainNode.connect(context.destination);
gainNode.gain.value = 0.3;
oscillator.start(0);
}

function off() {
	oscillator.stop(0); 
    oscillator.disconnect(); 
}
