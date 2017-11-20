function CantarJogo(){
  var showFeedback = false;
  var frameHold = 0;
  var pitchDetect;

  var backButton = new Button(40, 38, btnBack);
  var continuarButton = new Button(667, 587, btnGradient, 'CONTINUAR');
  var notaButton = new Button(width/2+100, height-height/6, btnSound);

  // var btnNota = {
  //   url: 'assets/cantar/jogo/botaoNota.png',
  //   width: 353,
  //   height: 80
  // };

  // var notaButton = new Button(463, 576, btnNota);

  // var comment = loadImage('assets/cantar/jogo/comment.png');
  //var notaButton = loadImage('assets/cantar/jogo/botaoNota.png');
  var onda = loadImage('assets/cantar/jogo/onda.png');
  var voceAcertou = loadImage('assets/cantar/jogo/voceAcertou.png');

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(handleSuccess);

  function handleSuccess(stream){
    console.log('hue');
    pitchDetect = new PitchDetect(stream);
  }


  this.draw = function(){

    clear();
    background(bgNoise);

    if((pitchDetect !== undefined) && (pitchDetect !== null)){
      var p = pitchDetect.getPitch();
      if (p.note == 'B'){
        frameHold++;
      } else {
        frameHold = 0;
      }
    }

    backButton.draw();

    // image(comment, 160, 141);
    textSize(32);
    text("Reproduza o som da nota ", width/7, height/5);
    fill(111, 193, 62);
    text("Si", width/7+380, height/5);
    image(onda, 0, 260);

    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("Escute a nota: Si", width/2-30, height-height/6+55);
    notaButton.draw();

    console.log(frameHold);

    if (frameHold >= 120){
      showFeedback = true;
    }

    if (showFeedback){
      fill(0, 0, 0, 100);
      rect(0, 0, 1280, 720);
      image(voceAcertou, 462, 62);
      continuarButton.draw();
    }

    checkPress();
  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      showFeedback = false;
      state.currentScreen = 'cantar';
    }

    if (buttonPressed(notaButton)){
      sound.si.play();
    }

    if (buttonPressed(continuarButton)){
      showFeedback = false;
      state.currentScreen = 'cantarResultado';
    }

  };

  var checkPitch = function(){

  };
}
