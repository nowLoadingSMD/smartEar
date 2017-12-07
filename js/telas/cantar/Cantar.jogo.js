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
  var pause = false;
  var posPause = 0;
  var estadoPause = false;
  var continuar = new Button(23, 125, pauseContinuar);
  var reiniciar = new Button(23, 294, pauseReiniciar);
  var sair = new Button(23, 463, pauseSair);
  var imgContinuar = loadImage('assets/pause/continuar.png');
  var imgReiniciar = loadImage('assets/pause/reiniciar.png');
  var imgSair = loadImage('assets/pause/sair.png');

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
    text("Si", width/7+390, height/5);
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

    if(pause)
      showPause();

    if (showFeedback){
      fill(0, 0, 0, 230);
      rect(0, 0, 1280, 720);
      image(voceAcertou, 462, 62);
      continuarButton.draw();
    }

    checkPress();
  };

  var checkPress = function(){
    if (buttonPressed(backButton)){
      pause = true;
    }

    if (buttonPressed(sair)){
      state.currentScreen = 'menu';
      pause = false;
      estadoPause = false;
      posPause = 0;
    }

    if (buttonPressed(reiniciar)){
      state.currentScreen = 'cantar';
      pause = false;
      estadoPause = false;
      posPause = 0;
    }

    if (buttonPressed(continuar)){
      estadoPause = true;
    }

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

  var showPause = function(){
      background(35, 38, 37, 70);
      fill(68, 72, 71);
      noStroke();
      rect(0, 0, posPause, 720);
      textFont(regularFont);
      fill(255);

      if(posPause<128){
        image(imgContinuar, posPause-105, 125);
        image(imgReiniciar, posPause-105, 294);
        image(imgSair, posPause-105, 463);
        text("CONTINUAR", posPause-120, 235);
        text("REINICIAR", posPause-108, 403);
        text("SAIR", posPause-85, 570);
        if(!estadoPause)
          posPause+=10;
      }
      if(estadoPause)
        posPause-=10;
      if(posPause>=128 && !estadoPause){
        continuar.draw();
        text("CONTINUAR", 8, 235);
        reiniciar.draw();
        text("REINICIAR", 20, 403);
        sair.draw();
        text("SAIR", 43, 570);
      }

      if(estadoPause && posPause<=0){
        estadoPause = false;
        pause = false;
      }

      checkPress();
  };
}
