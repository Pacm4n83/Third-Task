let audioCtx = new AudioContext();
// oscillators
let oscillator1 = audioCtx.createOscillator();
let oscillator2 = audioCtx.createOscillator();

oscillator1.frequency.value = 450; // 

// playing position
setTimeout(() => oscillator1.frequency.value *= Math.pow(2, 1 / 12), 1000);
setTimeout(() => oscillator1.frequency.value *= Math.pow(2, 1 / 12), 2000);

oscillator2.frequency.value = 440; //the frequency
// playing position
setTimeout(() => oscillator2.frequency.value *= Math.pow(2, 1 / 12), 3000);
setTimeout(() => oscillator2.frequency.value *= Math.pow(2, 1 / 12), 4000);


//for the 1st
oscillator1.connect(audioCtx.destination);
oscillator1.start();
oscillator1.stop(audioCtx.currentTime + 7); //7sec play 

//for the 2nd 
oscillator2.connect(audioCtx.destination);
oscillator2.start();
oscillator2.stop(audioCtx.currentTime + 10); //10 sec play