function startExample () {
    var file = document.querySelector('#upload_files').files[0];

    var objectUrl = URL.createObjectURL(file);
    var audioContext = new window.AudioContext();

    // setup canvas
    var canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 250;
    document.querySelector('#canv').appendChild(canvas);

    // setup audio element
    var audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.autoplay = true;
    audioElement.src = objectUrl;
    document.querySelector('#canv').appendChild(audioElement);

    // create source from html5 audio element
    var source = audioContext.createMediaElementSource(audioElement);

    // Create a gain node.
    var gainNode = audioContext.createGain();

    //create filter node
    var filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 400;

    // Connect the source to the gain node.
    source.connect(gainNode);

    // Connect the gain to the filter node.
    gainNode.connect(filter);

    // attach oscilloscope
    var scope = new Oscilloscope(filter);

    window.gainNode = gainNode;
    window.filter = filter;

    // reconnect audio output to speakers
    filter.connect(audioContext.destination);

    // customize drawing options
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';

    // start default animation loop
    scope.animate(ctx)
}
