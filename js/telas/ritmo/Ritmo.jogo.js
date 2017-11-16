function RitmoJogo(){
  var contando = false;
  var tocando = false;
  var mostrarFeedback = false;
  var contagem = 0;
  var clicks = [];
  var startupTime = 0;

  var backButton = new Button(40, 40, btnBack);
  var playButton = new Button(610, 597, btnPlay);
  var continuarButton = new Button(667, 587, btnGradient, 'CONTINUAR');

  var comment = loadImage('assets/ritmo/jogo/comment.png');
  var line = loadImage('assets/ritmo/jogo/line.png');
  //var linhaReferencia = loadImage('assets/ritmo/jogo/linhaReferencia.png');
  var seminima = loadImage('assets/ritmo/jogo/seminima.png');
  var contagemImagem = loadImage('assets/ritmo/jogo/contagem.png');

  var feedbackErro = loadImage('assets/ritmo/jogo/feedbackErro.png');
  var feedbackAcerto = loadImage('assets/ritmo/jogo/feedbackAcerto.png');
  var voceAcertou = loadImage('assets/ritmo/jogo/voceAcertou.png');
  var voceErrou = loadImage('assets/ritmo/jogo/voceErrou.png');
  var feedbackComentarioNegativo = loadImage('assets/ritmo/jogo/feedbackComentarioNegativo.png');
  var feedbackComentarioPositivo = loadImage('assets/ritmo/jogo/feedbackComentarioPositivo.png');

  var tocarMetronomo = function(time, playBackRate){
    sound.metronomo.rate(playBackRate);
    sound.metronomo.play(time);
    var date = new Date();
    var playTime = date.getTime();

    checkClick(playTime);
  };

  var checkClick = function(playTime){

    var delay = Math.abs(playTime - state.lastMousePressed);

    var click = {
      tempo: state.lastMousePressed,
      imagem: loadImage('assets/ritmo/jogo/feedbackErro.png')
    };

    if ((delay < 100) || ((delay > 900) && (delay < 1000))) {
      click.imagem = loadImage('assets/ritmo/jogo/feedbackAcerto.png');
    }

    clicks.push(click);

  };

  var metronomoPat = [2,0,1,0,2,0,1];
  var phrase = new p5.Phrase('metronomo', tocarMetronomo, metronomoPat);
  var myPart = new p5.Part();
  myPart.addPhrase(phrase);
  myPart.setBPM(30);

  var notas = [
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    }
  ];

  var timeLine = new TimeLine(195, 283, 784, 116, notas);

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    image(line, 0, 348);
    //image(linhaReferencia, 246, 525);

    if (contando == true){
      image(contagemImagem, 476, 108);
      textSize(42);
      text(contagem, 790, 139);
    } else {
      image(comment, 161, 141);
    }

    if (tocando){
      clicks.forEach(function(item){
        posX = 260 + (784 * ((item.tempo - startupTime) / 4000));
        posY = 229;
        image(item.imagem, posX, posY);
      });
    }

    timeLine.draw();
    playButton.draw();

    if (mostrarFeedback){
      fill(0, 0, 0, 100);
      rect(0,0,1280, 720);
      image(voceAcertou, 462, 62);
      image(feedbackComentarioPositivo, 387, 514);
      continuarButton.draw();

    }

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(playButton)){
      contando = true;
      contagem = 3;
      sound.metronomo.play();
      setTimeout(contar, 1000);
      setTimeout(onPartStart, 3000);
    }

    if (buttonPressed(backButton)){
      mostrarFeedback = false;
      state.currentScreen = 'ritmo';
    }

    if (buttonPressed(continuarButton)){
      mostrarFeedback = false
      state.currentScreen = 'ritmoResultado';
    }

  }

  var onPartStart = function(){
    contando = false;
    var date = new Date();
    startupTime = date.getTime();
    clicks = [];
    tocando = true;
    myPart.start();
    setTimeout(mostrarTelaFeedback, 4000);
  };

  var mostrarTelaFeedback = function(){
    mostrarFeedback = true;
  };

  var contar = function(){
    if (contagem > 1){
      sound.metronomo.play();
      contagem--;
      setTimeout(contar, 1000);
    }
  };

}


function TimeLine(x, y, w, h, notas){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.notas = notas;

  this.draw = function(){

    var nextPos = this.x;

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

function BarraDeReferencia(){

}