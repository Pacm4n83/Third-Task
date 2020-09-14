//using javascript, create a script for playing sound and controlling frequency using two oscillatora
//SOLUTION
//1. CREATE A FUNCTION TO GENERATE 2 SOUNDS
//2. ANOTHER FUNCTION TO  CONTROL THE PLAYBACK AND FREQUENCY

//NOT MY CODE, BUT I UNDERSTAND THE CODE, I MADE A FEW TWEAK TO FIT MY PERSPECTIVE & NARRATIVE




        //create Audiocontext
        const context = new AudioContext();

        document.querySelector("#play").addEventListener("mousedown", function() {
            let osc = context.createOscillator();
            osc.frequency.value = 450;
            osc.connect(context.destination);
            osc.start(0);

            let gain = context.createGain();
            gain.gain.value = 100;
            gain.connect(osc.frequency);

            let osc2 = context.createOscillator();
            osc2.type = "square";
            /* osc2.frequency.value = 1; */
            osc2.frequency.value = 100;
            osc2.connect(gain);
            osc2.start(0);

            document.getElementById("stop").disabled = false;
            document.getElementById("play").disabled = true;

            document.getElementById("oscil1").addEventListener("input", function() {
                document.getElementById("fig1").innerHTML = document.getElementById("oscil1").value;
                osc2.frequency.value = document.getElementById("oscil1").value;
            });

            document.getElementById("oscil2").addEventListener("input", function() {
                document.getElementById("fig2").innerHTML = document.getElementById("oscil2").value;
                osc.frequency.value = document.getElementById("oscil2").value;
            });

            document.querySelector("#stop").addEventListener("mousedown", function() {
                osc.stop(0);
                osc.disconnect(context.destination);
                gain.disconnect(osc.frequency);
                osc2.disconnect(gain);
                osc2.stop(0);

                document.getElementById("stop").disabled = true;
                document.getElementById("play").disabled = false;
            });

        });







// let audioContext = new (window.AudioContext || window.webkitAudioContext)();

// //oscillators
// let myOscillator0 = audioContext.createOscillator();
// let myoscillator1 = audioContext.createOscillator();

// oscillator0.frequency.value = 450; // 

// // playing position
// setTimeout(() => oscillator0.frequency.value *= Math.pow(2, 1 / 12), 1000);
// setTimeout(() => oscillator0.frequency.value *= Math.pow(2, 1 / 12), 2000);

// oscillator1.frequency.value = 440; //the frequency
// // playing position
// setTimeout(() => oscillator1.frequency.value *= Math.pow(2, 1 / 12), 3000);
// setTimeout(() => oscillator1.frequency.value *= Math.pow(2, 1 / 12), 4000);


// //for the 1st
// oscillator0.connect(audioCtx.destination);
// oscillator0.start();
// oscillator0.stop(audioCtx.currentTime + 7); //7sec play 

// //for the 2nd 
// oscillator1.connect(audioCtx.destination);
// oscillator1.start();
// oscillator1.stop(audioCtx.currentTime + 10); //10 sec play