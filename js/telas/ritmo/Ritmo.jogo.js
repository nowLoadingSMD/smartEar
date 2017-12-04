function RitmoJogo(){

  var isPlaying = false;
  var timesPlayed = 0;
  var isCounting = false;
  var counter = 0;
  var frameCounter = 0;
  var isTime = false;
  var showFeedback = false;

  var startupTime = 0;

  var clicks = [];

  var pause = false;
  var posPause = 0;
  var estadoPause = false;
  var continuar = new Button(23, 125, pauseContinuar);
  var reiniciar = new Button(23, 294, pauseReiniciar);
  var sair = new Button(23, 463, pauseSair);
  var imgContinuar = loadImage('assets/pause/continuar.png');
  var imgReiniciar = loadImage('assets/pause/reiniciar.png');
  var imgSair = loadImage('assets/pause/sair.png');


  var notas = [
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    }
  ];

  var backButton = new Button(40, 40, btnBack);
  var playButton = new Button(610, 597, btnPlay);
  var continuarButton = new Button(667, 587, btnGradient, 'CONTINUAR');

  var comment = loadImage('assets/ritmo/jogo/comment.png');
  var line = loadImage('assets/ritmo/jogo/line.png');
  var contagemImagem = loadImage('assets/ritmo/jogo/contagem.png');

  var feedbackErro = loadImage('assets/ritmo/jogo/feedbackErro.png');
  var feedbackAcerto = loadImage('assets/ritmo/jogo/feedbackAcerto.png');
  var voceAcertou = loadImage('assets/ritmo/jogo/voceAcertou.png');
  var voceErrou = loadImage('assets/ritmo/jogo/voceErrou.png');
  var feedbackComentarioNegativo = loadImage('assets/ritmo/jogo/feedbackComentarioNegativo.png');
  var feedbackComentarioPositivo = loadImage('assets/ritmo/jogo/feedbackComentarioPositivo.png');

  var timeLine = new TimeLine(340, 283, 600, 116, notas);
  var barraProgresso = new BarraProgresso(340, 500, 600, 15);

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    image(line, 0, 348);

    if(pause)
      showPause();

    if (isCounting == true){
      // image(contagemImagem, 476, 108);
      textSize(42);
      textFont(boldFont);
      text("COMEÇAR EM ", width/7, height/5);
      text(counter, width/7+300, height/5);
    } else {
      // image(comment, 161, 141);
      textSize(32);
      textFont(regularFont);
      textAlign(LEFT);
      text("Aperte o play para tocar o metrônomo.", width/7, height/5);
    }

    checkMouseReleased();

    var c = checkMouseReleased();

    if (isPlaying && c) {
      var d = new Date();
      var click;

      if (isTime) {
        click = {
          tempo: d.getTime(),
          imagem: loadImage('assets/ritmo/jogo/feedbackAcerto.png')
        };
      } else {
        click = {
          tempo: d.getTime(),
          imagem: loadImage('assets/ritmo/jogo/feedbackErro.png')
        };
      }

      clicks.push(click);
    }

    clicks.forEach(function(item){
      posX = timeLine.x + ((timeLine.w)  * ((item.tempo - startupTime) / 3000));
      posY = 229;
      image(item.imagem, posX, posY);
    });

    if (isPlaying){
      frameCounter++;
    }

    barraProgresso.progresso = (frameCounter/179);

    timeLine.draw();
    barraProgresso.draw();
    playButton.draw();

    if (showFeedback){
      fill(0, 0, 0, 100);
      rect(0,0,1280, 720);
      image(voceAcertou, 462, 62);
      image(feedbackComentarioPositivo, 387, 514);
      continuarButton.draw();
    }

    checkPress();

  };

  var resetVariables = function(){
    isPlaying = false;
    timesPlayed = 0;
    isCounting = false;
    counter = 3;
    frameCounter = 0;
    isTime = false;
    showFeedback = false;

    clicks = [];
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
      resetVariables();
    }

    if (buttonPressed(reiniciar)){
      state.currentScreen = 'ritmo';
      pause = false;
      estadoPause = false;
      posPause = 0;
      resetVariables();
    }

    if (buttonPressed(continuar)){
      estadoPause = true;
    }

    if (buttonPressed(playButton)) {
      resetVariables();
      startCounter();
    }

    if (buttonPressed(continuarButton)) {
      state.currentScreen = 'ritmoResultado';
      resetVariables();
    }

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

  var startCounter = function(){
    isCounting = true;
    counter = 3;
    sound.metronomo.play();
    setTimeout(setCounter, 1000);
  };

  var setCounter = function(){
    counter--;
    sound.metronomo.play();
    if (counter > 0){
      setTimeout(setCounter, 1000);
    } else {
      isCounting = false;
      counter = 0;
      isPlaying = true;
      isTime = true;
      frameCounter = 0;
      var d = new Date();
      startupTime = d.getTime();
      playMetronomo();
    }
  };

  var playMetronomo = function(){
    timesPlayed++;
    sound.metronomo.play();

    if (timesPlayed < 4) {
      setTimeout(playMetronomo, 1000);
      setTimeout(setIsTimeToFalse, 100);
      setTimeout(setIsTimeToTrue, 950);
    } else {
      setTimeout(function(){
        showFeedback = true;
      }, 500);
      setTimeout(setIsTimeToFalse, 100);
      isPlaying = false
    }
  };

  var setIsTimeToTrue = function(){
    isTime = true;
  };

  var setIsTimeToFalse = function(){
    isTime = false;
  };

}

function TimeLine(x, y, w, h, notas){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.notas = notas;

  this.draw = function(){

    var nextPos = this.x - 65;

    for(var i = 0; i < notas.length; i++){
      image(notas[i].imagem, nextPos, this.y);

      switch (notas[i].nome) {
        case 'seminima':
          nextPos += this.w/3;
          break;
        default:
          console.log('Deu ruim aqui');
      }

    }

  };
}

function BarraProgresso(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.progresso = 0;

  this.draw = function(){
    fill(240);
    rect(this.x, this.y, this.w, this.h);
    fill(0, 255, 0);
    rect(this.x, this.y, this.progresso * this.w, this.h);
  };


}
